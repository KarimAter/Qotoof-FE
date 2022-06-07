const fetchHelper = async (
  apiEndpoint: string,
  payload: { method: string; headers: {}; body?: any },
) => {
  try {
    const res = await fetch(apiEndpoint, payload);
    console.log(res);
    const data = await res.json();
    console.log(data);
    return { data, status: res.status };
  } catch (error) {
    console.log(error);
  }
};

export default fetchHelper;
