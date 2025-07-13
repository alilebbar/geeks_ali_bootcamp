interface User {
  name?: string;
  age?: number;
  role?: string;
}

export default function UserCard({
  name = "Invité",
  age = 0,
  role = "Aucun rôle",
}: User) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}
