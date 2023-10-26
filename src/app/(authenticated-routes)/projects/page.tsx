import List from "@/components/Project/List";
import NewItem from "@/components/Project/NewItem";
import RecentSection from "@/components/Project/RecentSection";

export default function Page() {
  return (
    <div className="flex flex-col pb-14">
      <RecentSection />
      <NewItem />
      <List/>
    </div>
  );
}