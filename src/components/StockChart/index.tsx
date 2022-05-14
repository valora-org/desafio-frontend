import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import styles from "./StockChart.module.scss";
// import { Input } from "../Input";
import Select from "react-select";
import { asyncFetchSymbolList, financialApi } from "../../services/api";

import Highcharts, {
  ChartOptions,
  SeriesOptionsType,
  TitleOptions,
} from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TickersContext } from "../../contexts/useTickers";
import toast from "react-hot-toast";

type HistoricalData = {
  close: number;
  date: string;
  high: number;
  low: number;
  open: number;
  volume: number;
};

type HistoricalStock = {
  name: string;
  historic: HistoricalData[];
};

export const StockChart: FC = () => {
  const [searchStocks, setSearchStocks] = useState<string>("");

  const [currentStocks, setCurrentStocks] = useState<HistoricalStock[]>([]);
  const { stocksOnChart, addStockOnChart, symbolList, setSymbolList } =
    useContext(TickersContext);
  const [period, setPeriod] = useState<"1min" | "5min" | "15min">("1min");

  const options = useMemo(() => {
    return {
      title: {
        text: "Historical Stock Prices",
      } as TitleOptions,
      series: currentStocks.map((stock) => {
        return {
          name: stock.name,
          data: stock.historic.map((data) => [data.date, data.close]),
          type: "line",

          tooltip: {
            valueDecimals: 2,
          },
        } as SeriesOptionsType;
      }),
      alignTicks: true,
    } as ChartOptions;
  }, [currentStocks]);

  useEffect(() => {
    async function fetchCurrentStocksHistoricalChart() {
      setCurrentStocks([]);
      new Promise((resolve) => {
        stocksOnChart.forEach(async (stock) => {
          const { data } = await financialApi.get(
            `/historical-chart/${period}/${stock}`
          );

          setCurrentStocks((currentStocks) => [
            ...currentStocks,
            {
              name: stock,
              historic: data,
            },
          ]);
        });
        resolve(true);
      });
    }
    fetchCurrentStocksHistoricalChart();
  }, [stocksOnChart, period]);

  useEffect(() => {
    async function fetchSymbolList() {
      const data = await asyncFetchSymbolList();

      const options = data.map((symbolList: any) => ({
        value: symbolList,
        label: symbolList,
      }));

      setSymbolList(options);
    }
    fetchSymbolList();
  }, [setSymbolList]);

  const { addOnRecentStocks } = useContext(TickersContext);

  return (
    <div>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Grafico de Preços</h1>
        </div>
        <div className={styles.search}>
          <Select
            placeholder="AAPL, GOOG"
            styles={{
              placeholder: (provided) => ({
                ...provided,
                color: "grey",
              }),
              input: (provided) => ({
                ...provided,
                color: "grey",
                width: "200px",
              }),
            }}
            onInputChange={(newValue) =>
              setSearchStocks(newValue.toUpperCase())
            }
            options={searchStocks.length >= 2 ? symbolList : []}
            onChange={(selectedOption) => {
              if (selectedOption) {
                addStockOnChart(selectedOption.value);
                toast(`${selectedOption.value} adicionado ao gráfico`);
                addOnRecentStocks(selectedOption.value);
              }
            }}
          />
          <Button
            onClick={() => {
              addStockOnChart(searchStocks);
              setSearchStocks("");
            }}
          >
            Buscar
          </Button>
        </div>
        <div className={styles.period}>
          <Button
            onClick={() => setPeriod("1min")}
            secondary={period === "1min"}
          >
            D
          </Button>
          <Button
            onClick={() => setPeriod("5min")}
            secondary={period === "5min"}
          >
            S
          </Button>
          <Button
            onClick={() => setPeriod("15min")}
            secondary={period === "15min"}
          >
            M
          </Button>
        </div>
      </div>

      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};
