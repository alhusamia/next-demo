type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <ul className="list-reset space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="bg-white rounded-lg shadow-md text-grey-700"
        >
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
