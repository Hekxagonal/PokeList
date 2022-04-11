import NavBar from '../src/components/Navbar';
import PokeGrid from '../src/components/PokeGrid';

type HomeProps = {
    list: any[]
    pages: {previous: boolean, next: boolean},
    isError: { message: string }
}

export default function Home({ list, pages, isError }: HomeProps) {
  return (
    <>
      <NavBar />
      <PokeGrid />
    </>
  );
}

export const getStaticProps = async () => {
  let list: any = [];
  let isError : any = null
  const pokePerPage: number = 20;
  let pages = { previous: false, next: false }
  let firstPoke: number = 0;
  const currentPage = `https://pokeapi.co/api/v2/pokemon/?offset=${firstPoke}&limit=${pokePerPage}`;



  try {
    const data = await fetch(currentPage);
    const json = await data.json();
    firstPoke = firstPoke + pokePerPage;
    pages = { previous: !!json.previous, next: !!json.next }

    const results = json.results.map(async (el: Object) => {
      const poke = await loadResults(el);
      return poke;
    });
    await Promise.all(results).then((result) => list = result);
  } catch (e: any) {
    isError = e
  }
  interface iProps {
    props: HomeProps;
    }

  const props: iProps = {
    props: {
      list,
      pages,
      isError,
    },
  };

  return props;
};
