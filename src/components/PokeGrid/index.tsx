import { useEffect, useState } from "react";
import Loading from "../Loading";
import PokeProfile from "../Poke";
import loadResults from "./load-results";
import * as S from "./styles";

type iList = Array<any>;

interface iDefaultText {
  isError: boolean;
  error: { message: string } | undefined;
}

type iTypes = [
  {
    type: {
      name: string;
    };
  },
  {
    type: {
      name: string;
    };
  }?
];

interface iPages {
  next: string;
  previous: string;
  count: number;
}
const PokeGrid = () => {
  const [list, setList] = useState<iList>([]);
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [pages, setPages] = useState<iPages>({
    next: '',
    previous: '',
    count: 0,
  });
  const [loadingState, setLoadingState] = useState<iDefaultText>({
    isError: false,
    error: undefined,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(currentPage);
        const json = await data.json();
        setPages({
          next: json.next,
          previous: json.previous,
          count: json.count / 20,
        });
        const results = json.results.map(async (el: Object) => {
          const poke = await loadResults(el);
          return poke;
        });
        Promise.all(results).then((result) => setList(result));
      } catch (e: any) {
        setLoadingState({ isError: true, error: e });
      }
    };
    load();
  }, [currentPage]);

  const handlePages = (value : boolean) => {
    setList([])
    if (value) {
      setCurrentPage(pages.next);
      return
    }
    setCurrentPage(pages.previous);
    return
  }

  const handleTypes = (rawTypes: iTypes) => {
    const result = [rawTypes[0].type.name, rawTypes[1]?.type.name];
    return result.filter((el) => (el ? true : false));
  };

  if (list.length !== 0) {
    return (
      <S.Container>
        <S.PokeWrapper>
          {list.map((el, i) => {
            return (
              <PokeProfile
                name={el.name}
                types={handleTypes(el.types)}
                sprites={el.sprites}
                anim={i}
              />
            );
          })}
        </S.PokeWrapper>
        <S.Navigation>
          {pages.previous && <S.PageLeft onClick={() => handlePages(false)} size="50px" />}
          {pages.next && <S.PageRight onClick={() => handlePages(true)} size="50px" />}
        </S.Navigation>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Loading loadingState={loadingState} />
    </S.Container>
  );
};

export default PokeGrid;
