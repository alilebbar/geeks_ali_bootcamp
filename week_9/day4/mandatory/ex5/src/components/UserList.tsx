import { useEffect, useState } from "react";

export default function UserList() {
  interface User {
    id: number;
    name: string;
    email: string;
  }
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {loading? "Loading..." : users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
