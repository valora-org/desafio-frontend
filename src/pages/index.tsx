import type { NextPage } from "next";
import { Toaster } from "react-hot-toast";
import { MyWallet } from "../components/MyWallet";
import { RecentSearch } from "../components/RecentSearch";
import { StockChart } from "../components/StockChart";
import { TemplateDashboard } from "../components/TemplateDashboard";
import { TickersProvider } from "../contexts/useTickers";
import { WalletProvider } from "../contexts/useWallet";

const Home: NextPage = () => {
  return (
    <TickersProvider>
      <WalletProvider>
        <TemplateDashboard>
          <StockChart />
          <RecentSearch />
          <MyWallet />
        </TemplateDashboard>
      </WalletProvider>
      <Toaster />
    </TickersProvider>
  );
};

export default Home;
