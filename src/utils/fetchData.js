export const Exercisesoptions = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": "1ac3239cc2msh502caae9ec91d8ep194d96jsn104c2585cf01",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  }
};
export const youtubeoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8f25482e75msh38be01eee92cb06p135c23jsn5e66e61d264d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
  }
};

export const fetchData = async (url, options) => {
  const fetchdata = await fetch(url, options);
  const data = await fetchdata.json();
  return data;
};
