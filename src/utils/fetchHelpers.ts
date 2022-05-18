const fetchHelper = async (
  apiEndpoint: string,
  payload: { method: string; headers: {}; body?: any },
) => {
  try {
    const res = await fetch(apiEndpoint, payload);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchHelper;
