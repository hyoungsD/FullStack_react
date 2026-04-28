import { useEffect, useState } from 'react'

// useFetch
// 데이터를 가져오는(fetch) 작업을 재사용하려고 만든 custom hook


export default function useFetch<T>(url: string) {
  // <T> 제네릭 : 여러 타입을 가져올 때 사용, 사용할 때 타입을 정의한다

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    load();
  }, [url])


  return {data, loading}
}

