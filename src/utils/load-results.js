const loadResults = async (el) => {
  const data = await fetch(el.url);
  const json = await data.json();
  return json;
};

export default loadResults;