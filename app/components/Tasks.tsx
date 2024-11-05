export interface Tasks {
    id: number | null;
    title: string | null;
    desc: string | null;
    points: number | null;
    complete: boolean;
  }

 
  
  export default function TasksPage({ tasks }: { tasks: Tasks[] }) {

    function handle(){
        
    }

    return (
      <div>
        <h1>Tasks</h1>
        <ul>
            {/* Maps tasks details into a single li element in span elements */}
          {tasks.map((task) => (
            <li key={task.id}>
                <span className="">{task.title ?? 'No tasks available'}</span>
                <span className="">{task.desc ?? "No Desc"}</span>
                <span className="">{task.points ?? "No Points"}</span>
                <input onClick={handle} type="checkbox"></input>

            </li>
          ))}
        </ul>
      </div>
    );
  }