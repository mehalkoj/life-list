import prisma from './lib/prisma';
import Signup from './components/Signup'


// Fetch posts data (Server-side)
const getData = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

const PostsPage = async () => {
  const posts = await getData();
};




export default function Page(){


  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <Signup />
      </div>
    </>
  );
}
