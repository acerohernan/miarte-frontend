import { NextPage } from "next";
import PrivateRoute from "../../components/routes/private";
import DashboardView from "../../views/studio/dashboard";

const Dashboard: NextPage = () => {
  return (
    <PrivateRoute>
      <DashboardView />
    </PrivateRoute>
  );
};

export default Dashboard;
