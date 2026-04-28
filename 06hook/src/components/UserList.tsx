import { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, [])

  return (
    <div>
      <h2>UserList</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} / {user.email}</li>
        ))}
      </ul>
    </div>
  )
}
