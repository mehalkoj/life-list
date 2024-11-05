import prisma from './lib/prisma';
import TasksPage from './components/Tasks';

export default async function Home() {
  const tasks = await prisma.task.findMany({
    select: {
      title: true,
      id: true,
      desc: true,
      points: true,
    },
  });

  return <TasksPage tasks={tasks} />;
}