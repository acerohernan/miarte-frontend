import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import PrivateRoute from "../../components/routes/private";
import { useAuthContext } from "../../context/hooks";
import DashboardView from "../../views/studio/dashboard";

const Dashboard: NextPage = () => {
  const {
    actions: { getInformation, getSteps },
    state: { user },
  } = useAuthContext();

  const {} = useQuery({
    queryKey: ["user", "information"],
    queryFn: getInformation,
  });

  return (
    <PrivateRoute>
      <DashboardView />
    </PrivateRoute>
  );
};

export default Dashboard;
