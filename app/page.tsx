import prisma from './lib/prisma';

interface UserName {
  name: string | null;
  id: number | null; 
}

export default async function UsersPage(){
  const users: UserName[] = await prisma.user.findMany({
    select: {
      name: true,
      id: true,
    },
  });

  return (
    <div>
      <h1>Users</h1>
        <Tasks
             />
        {users.map((user) => (
          <li key={user.id}>{user.name ?? 'No name available'}</li>
        ))}
    </div>
  );
}

