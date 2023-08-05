import Sidebar from "./sidebar";
import MainContainer from "./container";


const Dashboard = () => {
    return (
      <div className="Dashboard">
        <div className="dashboard-item">
            <Sidebar />
            <MainContainer />
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  