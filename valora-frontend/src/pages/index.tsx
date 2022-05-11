import type { NextPage } from "next";
import { MyWallet } from "../components/MyWallet";
import { RecentSearch } from "../components/RecentSearch";
import { TemplateDashboard } from "../components/TemplateDashboard";

const Home: NextPage = () => {
  return (
    <TemplateDashboard>
      <RecentSearch />
      <MyWallet />
    </TemplateDashboard>
  );
};

export default Home;
