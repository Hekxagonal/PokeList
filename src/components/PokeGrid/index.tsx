import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme';
import Loading from '../Loading';
import PokeProfile from '../Poke';
import loadResults from '../../utils/load-results';
import * as S from './styles';

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
  }?,
];
const PokeGrid = () => {
  const [list, setList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon/',
  );
  type Pages = {
    next: string;
    previous: string;
    count: number;
  };

  const [pages, setPages] = useState<Pages>({
    next: '',
    previous: '',
    count: 0,
  });
  type LoadingState = {
    isError: boolean;
    error?: { message: string };
  };

  const [loadingState, setLoadingState] = useState<LoadingState>({
    isError: false,
    error: undefined,
  });
  const { state } = useContext(ThemeContext);

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
        const results = json.results.map(async (el: any) => {
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

  const handlePages = (value: boolean) => {
    setList([]);
    if (value) {
      setCurrentPage(pages.next);
      return;
    }
    setCurrentPage(pages.previous);
    return;
  };

  const handleTypes = (rawTypes: iTypes) => {
    const result = [rawTypes[0].type.name, rawTypes[1]?.type.name];
    return result.filter((el) => (el ? true : false));
  };

  if (!loadingState.isError) {
    return (
      <S.Container>
        <S.PokeWrapper>
          {list.map((el, i) => {
            return (
              <PokeProfile
                data-testid="pokeprofile"
                key={i}
                name={el.name}
                types={handleTypes(el.types)}
                sprites={el.sprites}
                anim={i}
              />
            );
          })}
        </S.PokeWrapper>
        <S.Navigation>
          {pages.previous && (
            <S.PageLeft
              themevalue={state.theme}
              onClick={() => handlePages(false)}
              size="50px"
            />
          )}
          {pages.next && (
            <S.PageRight
              themevalue={state.theme}
              onClick={() => handlePages(true)}
              size="50px"
            />
          )}
        </S.Navigation>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Loading isError={loadingState.isError} error={loadingState.error} />
    </S.Container>
  );
};

export default PokeGrid;
