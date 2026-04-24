import { useState } from 'react'
// import NavigationCard from './NavigationCard';
import MemberCard from './MemberCard';
import Navigation from './Navigation';
import type { Member } from '../types/Member';
import './BTS.css';

interface BTSProps {
  members: Member[];
}



export default function BTS({members}: BTSProps) {
  const [index, setIndex] = useState<number>(0);
  const changeIndex = (newIndex: number): void => {
    const len = members.length; // 7
    setIndex((newIndex + len) % len);
    console.log(newIndex, (newIndex + len) % len);
  }

  return (
    <div className='member-container'>
      <MemberCard member={members[index]} />
      <Navigation index={index} onChangeIndex={changeIndex}  />
    </div>
  )
}
