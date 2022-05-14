/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const TickersContext = createContext({} as TickersConsumerProps);

type TickersProviderProps = {
  children: React.ReactNode;
};

type Options = {
  value: string;
  label: string;
};

type TickersConsumerProps = {
  stocks: string[];
  stocksOnChart: string[];
  recentStocks: string[];
  symbolList: Options[];
  setSymbolList: (symbolList: Options[]) => void;
  addStock: (symbol: string) => void;
  removeStock: (symbol: string) => void;
  addStockOnChart: (symbol: string) => void;
  removeStockOnChart: (symbol: string) => void;
  addOnRecentStocks: (symbol: string) => void;
  removeOnRecentStocks: (symbol: string) => void;
};

export function TickersProvider({ children }: TickersProviderProps) {
  const [stocks, setStocks] = useState<string[]>([]);
  const [stocksOnChart, setStocksOnChart] = useState<string[]>([]);
  const [recentStocks, setRecentStocks] = useState<string[]>([]);

  const [symbolList, setSymbolList] = useState<Options[]>([]);

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

  function addOnRecentStocks(stock: string) {
    setRecentStocks([...recentStocks, stock]);
  }

  function removeOnRecentStocks(stock: string) {
    setRecentStocks(recentStocks.filter((s) => s !== stock));
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
          addOnRecentStocks,
          removeOnRecentStocks,
          recentStocks,
          symbolList,
          setSymbolList,
        } as TickersConsumerProps
      }
    >
      {children}
    </TickersContext.Provider>
  );
}

export default TickersProvider;
