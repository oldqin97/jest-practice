const getSearchObj = () => {
  // ?a=1&b=2
  const { search } = window.location;

  // a=1&b=2
  const searchStr = search.slice(1);

  // ['a=1','b=2']
  const pairs = searchStr.split('&');

  const searchObj: Record<string, string> = {};

  pairs.forEach(pair => {
    const [key, value] = pair.split('=');
    searchObj[key] = value;
  });

  // return Object.fromEntries(
  //   new URLSearchParams(window.location.search).entries(),
  // );

  return searchObj;
};

export default getSearchObj;
