import { FC, useContext, useEffect, useState } from "react";
import { TickersContext } from "../../contexts/useTickers";
import { financialApi } from "../../services/api";
import { convertFloatToUSD } from "../../utils/currency";
import { Button } from "../Button";
import { TableCell } from "../Table/TableCell";
import { TableRow } from "../Table/TableRow";

type RecentSearchTableRowProps = {
  stock: string;
};

interface Stock {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

export const RecentSearchTableRow: FC<RecentSearchTableRowProps> = ({
  stock,
}) => {
  const [fullStockInfo, setFullStockInfo] = useState({} as Stock);
  const [isLoading, setIsLoading] = useState(false);

  const { removeStock } = useContext(TickersContext);

  useEffect(() => {
    async function fetchQuoteStock() {
      setIsLoading(true);
      const { data } = await financialApi.get(`/quote/${stock}`);
      setFullStockInfo(data[0]);
      setIsLoading(false);
    }
    fetchQuoteStock();
  }, [stock]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <TableRow>
          <TableCell>
            <div>{fullStockInfo?.name}</div>
            <div>{fullStockInfo?.symbol}</div>
          </TableCell>
          <TableCell>
            <div>{convertFloatToUSD(fullStockInfo?.open || 0)}</div>
            <div>Abertura</div>
          </TableCell>
          <TableCell>
            <div>{convertFloatToUSD(fullStockInfo?.previousClose || 0)}</div>
            <div>Fechamento</div>
          </TableCell>
          <TableCell direction="row">
            <Button content="Adicionar" primary />
            <Button
              content="Remover"
              secondary
              onClick={() => removeStock(stock)}
            />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
