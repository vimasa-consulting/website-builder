'use client'

import List from "./List";
import NewItem from "./NewItem";
import Item from "./RecentItem";
import projects from '@/mockdata/projects/projects.json';

export default function RecentSection() {
  const recentProjects = projects.slice(1, 3);
  return (
    <>
      <h3 className="text-xl">Recently Edited</h3>
      <div className="flex flex-wrap mt-5 gap-3">
        {recentProjects.map((project) => <Item key={project._id} project={project} />)}
      </div>
      
      <hr className="h-px my-8 bg-gray-600 border-0 w-3/4" />
      <NewItem />
      <List/>
    </>
  );
}