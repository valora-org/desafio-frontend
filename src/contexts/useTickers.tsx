import { createContext, useState } from "react";

export const TickersContext = createContext({} as TickersConsumerProps);

type TickersProviderProps = {
  children: React.ReactNode;
};

type TickersConsumerProps = {
  stocks: string[];
  stocksOnChart: string[];
  addStock: (symbol: string) => void;
  removeStock: (symbol: string) => void;
  addStockOnChart: (symbol: string) => void;
  removeStockOnChart: (symbol: string) => void;
};

export function TickersProvider({ children }: TickersProviderProps) {
  const [stocks, setStocks] = useState<string[]>([]);
  const [stocksOnChart, setStocksOnChart] = useState<string[]>([]);

  function addStock(stock: string) {
    setStocks([...stocks, stock]);
  }

  function removeStock(stock: string) {
    setStocks(stocks.filter((s) => s !== stock));
  }

  function addStockOnChart(stock: string) {
    setStocksOnChart([...stocksOnChart, stock]);
  }

  function removeStockOnChart(stock: string) {
    setStocksOnChart(stocksOnChart.filter((s) => s !== stock));
  }

  return (
    <TickersContext.Provider
      value={
        {
          stocks,
          addStock,
          removeStock,
          stocksOnChart,
          addStockOnChart,
          removeStockOnChart,
        } as TickersConsumerProps
      }
    >
      {children}
    </TickersContext.Provider>
  );
}

export default TickersProvider;
