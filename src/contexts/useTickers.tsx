import { createContext, useState } from "react";

export const TickersContext = createContext({} as TickersConsumerProps);

type TickersProviderProps = {
  children: React.ReactNode;
};

type TickersConsumerProps = {
  stocks: string[];
  addStock: (symbol: string) => void;
  removeStock: (symbol: string) => void;
};

export function TickersProvider({ children }: TickersProviderProps) {
  const [stocks, setStocks] = useState<string[]>([]);

  function addStock(stock: string) {
    setStocks([...stocks, stock]);
  }

  function removeStock(stock: string) {
    setStocks(stocks.filter((s) => s !== stock));
  }

  return (
    <TickersContext.Provider
      value={{ stocks, addStock, removeStock } as TickersConsumerProps}
    >
      {children}
    </TickersContext.Provider>
  );
}

export default TickersProvider;
