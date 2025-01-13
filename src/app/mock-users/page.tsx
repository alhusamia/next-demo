import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj, userObj);

  const res = await fetch("https://67837ee08b6c7a1316f491b6.mockapi.io/users");
  const users: MockUser[] = await res.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    if (typeof name !== "string") return;
    const res = await fetch(
      "https://67837ee08b6c7a1316f491b6.mockapi.io/users",
      {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const user: MockUser = await res.json();
    revalidatePath("/mock-users");
    console.log(user);
  }

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input type="text" name="name" required className="border p-2 mr-2" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add User
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-white rounded-lg shadow-md text-grey-700"
          >
            {user.name}
          </li>
        ))}
      </div>
    </div>
  );
}
