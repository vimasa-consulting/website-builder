import Item from "./RecentItem";

export default function RecentSection({
  recentItems
}) {
  
  return (
    <>
      <h3 className="text-xl">Recently Edited</h3>
      <div className="flex flex-wrap mt-5 gap-3">
        {recentItems.map((project) => <Item key={project._id} project={project} />)}
      </div>
      
      <hr className="h-px my-8 bg-gray-600 border-0 w-3/4"  />
    </>
  );
}