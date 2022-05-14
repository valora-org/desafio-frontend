import { FC, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { WalletContext } from "../../contexts/useWallet";
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

  const { addStockInWallet, removeStockInWallet, stocksInWallet } =
    useContext(WalletContext);

  const hasStockInWallet = useMemo(() => {
    return stocksInWallet.find((stockInWallet) => stockInWallet.name === stock);
  }, [stock, stocksInWallet]);

  useEffect(() => {
    async function fetchQuoteStock() {
      try {
        setIsLoading(true);
        const { data } = await financialApi.get(`/quote/${stock}`);
        setFullStockInfo(data[0]);
      } catch (error) {
        toast.error("Não foi possível carregar a cotação");
      } finally {
        setIsLoading(false);
      }
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
            <Button
              content="Adicionar"
              primary
              onClick={() => addStockInWallet(stock)}
            />
            <Button
              content="Remover"
              secondary
              onClick={() => removeStockInWallet(stock)}
              disabled={!hasStockInWallet}
            />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
