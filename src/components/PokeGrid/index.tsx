import { useEffect, useState } from 'react'
import PokeProfile from '../Poke'
import loadResults from './load-results'
import * as S from './styles'

const PokeGrid = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const load = async () => {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const json = await data.json()
            const results = json.results.map(async (el) => {
                const poke = await loadResults(el);
                return poke
            })
            Promise.all(results).then((result) => setList(result))
        }
        load()
    }, [])

    const handleTypes = (types) => {
        const result = [types[0].type.name, types[1]?.type.name]
        return result.filter((el) => el ? true : false)
    }

    if(list.length !== 0){
        return (
            <S.Container>
            {list.map((el) => {
                return <PokeProfile name={el.name} types={handleTypes(el.types)} sprites={el.sprites}/>
            })}
        </S.Container>
        )
    }

    return (
        <S.Container>
            Loading
        </S.Container>
    )
}


export default PokeGrid


