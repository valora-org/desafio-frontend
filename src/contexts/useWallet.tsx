import { createContext, useState } from "react";
import toast from "react-hot-toast";

type StockWallet = {
  name: string;
  quantity: number;
};

type WalletConsumerProps = {
  stocksInWallet: StockWallet[];
  addStockInWallet: (stock: string) => void;
  removeStockInWallet: (stock: string) => void;
  increaseStockInWallet: (stock: string) => void;
  decreaseStockInWallet: (stock: string) => void;
};

export const WalletContext = createContext({} as WalletConsumerProps);

type WalletProviderProps = {
  children: React.ReactNode;
};

export function WalletProvider({ children }: WalletProviderProps) {
  const [stocksInWallet, setStocksInWallet] = useState<StockWallet[]>([]);

  function addStockInWallet(stock: string) {
    setStocksInWallet([...stocksInWallet, { name: stock, quantity: 0 }]);

    toast(`${stock} Adicionada com sucesso`);
  }

  function increaseStockInWallet(stock: string) {
    setStocksInWallet(
      stocksInWallet.map((s) =>
        s.name === stock ? { ...s, quantity: s.quantity + 1 } : s
      )
    );
    toast("Ação adicionada com sucesso");
  }

  function decreaseStockInWallet(stock: string) {
    if (stocksInWallet.find((s) => s.name === stock)?.quantity === 0) {
      removeStockInWallet(stock);
      return;
    }

    setStocksInWallet(
      stocksInWallet.map((s) =>
        s.name === stock ? { ...s, quantity: s.quantity - 1 } : s
      )
    );

    toast("Ação removida com sucesso");
  }

  function removeStockInWallet(stock: string) {
    setStocksInWallet(stocksInWallet.filter((s) => s.name !== stock));
  }

  return (
    <WalletContext.Provider
      value={
        {
          stocksInWallet,
          addStockInWallet,
          decreaseStockInWallet,
          increaseStockInWallet,
          removeStockInWallet,
        } as WalletConsumerProps
      }
    >
      {children}
    </WalletContext.Provider>
  );
}
