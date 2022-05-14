import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import styles from "./StockChart.module.scss";
import { Input } from "../Input";
import { financialApi } from "../../services/api";

import Highcharts, {
  ChartOptions,
  SeriesOptionsType,
  TitleOptions,
} from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TickersContext } from "../../contexts/useTickers";

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
  const { stocksOnChart, addStockOnChart } = useContext(TickersContext);
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

  return (
    <div>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Grafico de Preços</h1>
        </div>
        <div className={styles.search}>
          <Input
            type="text"
            placeholder="AAPL, GOOG, MSFT"
            onChange={(event) =>
              setSearchStocks(event.target.value.toUpperCase())
            }
            value={searchStocks}
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
