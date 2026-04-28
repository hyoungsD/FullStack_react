import useFetch from './useFetch';

// useFetch 사용하기

type Movie = {
  id: number;
  title: string;
}

export default function UseFetchTest() {
  const {data, loading} = useFetch<{movies: Movie[]}>(
    'https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json'
  )
  if(loading) return <p>loading...</p>;

  return (
    <div>
      <h2>UseFetchTest</h2>
      <ul>
        {data?.movies.map((m) => (  // data가 null일 수도 있으므로 '?'를 붙인다
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  )
}


