/* eslint-disable no-undef */

export const fetchHelper = async (
  apiEndpoint: string,
  payload: { method: string; token: string; body?: any },
) => {
  // const router = useRouter();
  try {
    console.log(payload);
    const res = await fetch(apiEndpoint, {
      ...payload,
      headers: {
        Authorization: `Bearer ${payload.token}`,
        'Content-Type': `application/json`,
      },
    });
    const data = await res.json();
    // const { status } = res;
    // if (status === 401) router.push({ pathname: '/Sign' });
    return { data, status: res.status };
  } catch (error) {
    return { data: undefined, status: 500 };
  }
};

export const fetcher = async (url: string, token: string) => {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const error = new Error();
    const errMsg = await res.json();
    error.message = errMsg.msg;
    throw error;
  }
  return res.json();
};

// export { fetchHelper, fetcher };
