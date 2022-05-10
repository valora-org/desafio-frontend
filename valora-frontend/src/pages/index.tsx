import type { NextPage } from "next";
import { MyWallet } from "../components/MyWallet";
import { TemplateDashboard } from "../components/TemplateDashboard";

const Home: NextPage = () => {
  return (
    <TemplateDashboard>
      <MyWallet />
    </TemplateDashboard>
  );
};

export default Home;
