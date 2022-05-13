import type { NextPage } from "next";
import { MyWallet } from "../components/MyWallet";
import { RecentSearch } from "../components/RecentSearch";
import { StockChart } from "../components/StockChart";
import { TemplateDashboard } from "../components/TemplateDashboard";
import { TickersProvider } from "../contexts/useTickers";

const Home: NextPage = () => {
  return (
    <TickersProvider>
      <TemplateDashboard>
        <StockChart />
        <RecentSearch />
        <MyWallet />
      </TemplateDashboard>
    </TickersProvider>
  );
};

export default Home;
