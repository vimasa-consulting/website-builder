import CentrePanel from "./_components/centre-panel";
import NavigationPanel from "./_components/navigation-panel";

const DashboardPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-row justify-center">
        <div className=" p-5 w-64 border-r-2 border-black">
          <NavigationPanel />
          </div>
        <div className=" p-5">
          <CentrePanel />
          </div>     
      </div>
    </div>
  );
};

export default DashboardPage;
