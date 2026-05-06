import { Link, useLocation, useParams, useSearchParams } from "react-router-dom"


export function Header() {
  return (
    <>
      <Link to='/'>
        <h1>헤더입니다.</h1>
      </Link>
    </>
  )
}


export function Main() {
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to="/product/1"> <li>1번상품</li> </Link>
      <Link to="/product/2"> <li>2번상품</li> </Link>
      <Link to="/product/3?q=bag&page=2#top"> <li>3번상품(/3?q=bag&page=2#top)</li> </Link>
      {/* /경로/파라미터?쿼리#해시 */}
    </>
  )
}

export function Product() {
  const {id} = useParams();
  const [searchParams] = useSearchParams(); // 경로 파라미터: URL의 ':id' 같은 값
  const q = searchParams.get('q');  // 쿼리스트링 : q의 값
  const location = useLocation(); // 전체 URL 정보

  return (
    <>
      <h3>{id}번 상품 페이지입니다.</h3>
      <p>검색어 q: {q}</p>
      <p>pathname: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
    </>
  )
}

export function NotFound() {
  return (
    <>
      <h1>404 Error</h1>
    </>
  )
}
