const get = async (url) => {
  try {
    let request = await fetch(url);
    let data = await request.json();
    return data;
  } catch (err) {
    console.log('http get method err', err);
    throw Error(err);
  }
};

const post = async (url, data) => {
  try {
    let request = await fetch(url, {
      method: 'POST',
      body: data,
    });
    let json = await request.json();
    return json;
  } catch (err) {
    console.log('http post method err', err);
    throw Error(err);
  }
};
const Http = { get, post };

export default Http;
