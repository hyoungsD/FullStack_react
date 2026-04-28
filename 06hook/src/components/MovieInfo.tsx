import { useEffect, useState } from 'react'

interface MovieProps {
  id: number;
  title: string;
  poster: string;
}
interface MovieResponse {
  movies: MovieProps[];
  count: number;
}

export default function MovieInfo() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const url = 'https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json';

  useEffect(() => {
    const load = async () => {
      try{
        const res = await fetch(url);
        if(!res.ok){
          throw new Error('요청 실패');
        }
        const data: MovieResponse = await res.json();
        setMovies(data.movies);
      }catch(err){
        if(err instanceof Error) {
          console.log(err.message);
        }
      }
    }
    load();
  }, []);

  return (
    <div>
      <h2>MovieInfo</h2>
      <div style={container}>
        {movies.map((movie) => (
          <div key={movie.id} style={card}>
            <img src={movie.poster} alt={movie.title} style={image} />
            <div style={title}>{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


// style
const container: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  // minHeight: '100vh',
}

const card: React.CSSProperties = {
  width: '200px',
  height: '400px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '7px 10px 21px -3px rgba(0,0,0,0.75)',
}

const image: React.CSSProperties = {
  width: '100%',
  height: '90%',
  objectFit: 'cover',
}

const title: React.CSSProperties = {
  height: '10%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '5px',
}
