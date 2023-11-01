import CardItemSkeleton from "./CardItemSkeleton";
import Item from "./RecentItem";

export default function RecentSection({
  recentItems,
  itemType
}) {

  return (
    <>
      <h3 className="text-xl">Recently Edited</h3>
      <div className="flex flex-wrap mt-5 gap-3">
        {recentItems?.length ? recentItems.map((project) => <Item itemType={itemType} key={project._id} project={project} />) :
        Array.from({length: 2}).map((_, index) => <CardItemSkeleton key={index} />)
        }
      </div>
      <hr className="h-px my-8 bg-gray-600 border-0 w-3/4" />
    </>
  );
}