import { FC, useState } from "react";
import { Button } from "../Button";
import { TableHeader } from "../TableHeader";
import styles from "./StockChart.module.scss";
import {} from "highcharts";
export const StockChart: FC = () => {
  const [searchStocks, setSearchStocks] = useState<string>("");
  const [stocks, setStocks] = useState<string[]>([]);

  return (
    <div>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Grafico de Preços</h1>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            onChange={(event) => {
              setSearchStocks(event.target.value);
            }}
            value={searchStocks}
          />
          <Button>Buscar</Button>
        </div>
        <div className={styles.period}>
          <Button>D</Button>
          <Button>S</Button>
          <Button>M</Button>
        </div>
      </div>

      <div className="chart"></div>
    </div>
  );
};
