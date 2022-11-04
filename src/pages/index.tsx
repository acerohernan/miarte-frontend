import type { NextPage } from "next";
import PrivateRoute from "../components/routes/private";

const Home: NextPage = () => {
  return (
    <PrivateRoute>
      <div className="layout">
        <h1>This is the home</h1>
      </div>
    </PrivateRoute>
  );
};

export default Home;
