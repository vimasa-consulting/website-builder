import Item from "./Item";
import projects from '@/mockdata/projects/projects.json';

export default function List() {
  return (
    <div className="flex flex-wrap mt-5 gap-3">
      {projects.map((project) => <Item key={project.id} project={project} />)}
    </div>
  );
}