import List from "@/components/Project/List";
import NewItem from "@/components/Project/NewItem";

export default function Page() {
  return (
    <div className="flex flex-col pb-14">
      <h3 className="text-xl">Recently Edited</h3>
      <List />
      <hr className="h-px my-8 bg-gray-600 border-0 w-3/4" />
      <NewItem />
    </div>
  );
}