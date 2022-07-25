/* eslint-disable no-undef */

import { ToastContainer, toast } from 'react-toastify';

export const fetchHelper = async (
  apiEndpoint: string,
  payload: { method: string; token?: string; body?: any },
  toastMessage?: string,
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
    if (toastMessage) toast(`${toastMessage} successfully`);
    return { data, status: res.status };
  } catch (error) {
    if (toastMessage) toast(`${toastMessage} unsuccessfully`);
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
