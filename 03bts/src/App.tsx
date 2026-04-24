
import './App.css'
import type { Member } from './types/Member';
import MemberCard from './component/MemberCard';

const members: Member[] = [
  { image: '/bts/bts1.png', nick: 'RM'},
  { image: '/bts/bts2.png', nick: '진'},
  { image: '/bts/bts3.png', nick: '슈가'},
  { image: '/bts/bts4.png', nick: '제이홉'},
  { image: '/bts/bts5.png', nick: '지민'},
  { image: '/bts/bts6.png', nick: '뷔'},
  { image: '/bts/bts7.png', nick: '정국'},
]

function App() {

  return (
    <div className='card-wrap'>
      <MemberCard member={members[0]} />
      <MemberCard member={members[1]} />
      <MemberCard member={members[2]} />
    </div>
  )
}

export default App
