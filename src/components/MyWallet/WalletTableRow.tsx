import { useContext, useEffect, useMemo, useState } from "react";
import { WalletContext } from "../../contexts/useWallet";
import {
  asyncFetchQuoteShortInformation,
  financialApi,
} from "../../services/api";
import { convertFloatToUSD } from "../../utils/currency";
import { Button } from "../Button";
import { TableCell } from "../Table/TableCell";
import { TableRow } from "../Table/TableRow";

type WalletTableRowProps = {
  stock: {
    name: string;
    quantity: number;
  };
};

export function WalletTableRow({ stock }: WalletTableRowProps) {
  const [stockFullInfo, setStockFullInfo] = useState<any>({});

  const { increaseStockInWallet, decreaseStockInWallet } =
    useContext(WalletContext);

  useEffect(() => {
    async function fetchStockFullInfo() {
      if (!stock.name) return;

      const data = await asyncFetchQuoteShortInformation(stock.name);
      setStockFullInfo(data);
    }
    fetchStockFullInfo();
  }, [stock]);

  const isLastStock = useMemo(() => stock.quantity === 0, [stock]);

  return (
    <TableRow rows={6}>
      <TableCell>({stock.name})</TableCell>
      <TableCell>
        <div>Ações</div>
        <div>{stock.quantity}</div>
      </TableCell>
      <TableCell>
        <div>Preço Unitario</div>
        <div>{convertFloatToUSD(stockFullInfo.price || 0)}</div>
      </TableCell>
      <TableCell>
        <div>Valor Total</div>
        <div>
          {convertFloatToUSD(stockFullInfo.price * stock.quantity || 0)}
        </div>
      </TableCell>
      <TableCell>
        <Button
          content="Compra"
          primary
          onClick={() => increaseStockInWallet(stock.name)}
        />
      </TableCell>
      <TableCell>
        <Button
          content={isLastStock ? "Remover" : "Vender"}
          secondary
          onClick={() => decreaseStockInWallet(stock.name)}
        />
      </TableCell>
    </TableRow>
  );
}
