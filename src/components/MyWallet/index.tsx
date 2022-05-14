import { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Select from "react-select";
import { TickersContext } from "../../contexts/useTickers";
import { financialApi } from "../../services/api";
import { Button } from "../Button";
import { Table } from "../Table";
import { TableCell } from "../Table/TableCell";
import { TableRow } from "../Table/TableRow";
import { TableHeader } from "../TableHeader";
import styles from "./MyWallet.module.scss";

type Options = {
  value: string;
  label: string;
};

type Share = {
  name?: string;
  quantity?: number;
  price?: number;
  createdAt?: Date;
};

export const MyWallet = () => {
  const [openNewWalletField, setOpenNewWalletField] = useState(false);
  const [newWalletName, setNewWalletName] = useState("");
  const [shares, setShares] = useState<Options[]>([]);
  const [selectedShare, setSelectedShare] = useState<Share>({} as Share);

  function handleOpenNewWalletField() {
    setOpenNewWalletField(!openNewWalletField);
    fetchSymbolList();
  }

  async function fetchSymbolList() {
    const { data } = await financialApi.get(
      "/financial-statement-symbol-lists"
    );
    const options = data.map((symbolList: any) => ({
      value: symbolList,
      label: symbolList,
    }));
    setShares(options);
  }

  const asyncFetchShareActualPrice = async () => {
    if (!selectedShare.name) return;

    const { data } = await financialApi.get(
      `quote-short/${selectedShare.name}`
    );

    setSelectedShare({
      ...selectedShare,
      price: data[0].price,
    });
  };

  const { stocks, addStock } = useContext(TickersContext);

  const handleAddShare = () => {
    if (!selectedShare.name) return;
    addStock(selectedShare.name);

    setSelectedShare({} as Share);
    setNewWalletName("");
  };

  return (
    <div>
      <TableHeader title="Minha Carteira">
        <Button onClick={handleOpenNewWalletField}>
          {!openNewWalletField ? <FiPlus size={16} /> : <FiMinus size={16} />}
        </Button>
      </TableHeader>

      <Table>
        <TableRow rows={6}>
          <TableCell>(AAPL)</TableCell>
          <TableCell>
            <div>Ações</div>
            <div>12</div>
          </TableCell>
          <TableCell>
            <div>Preço</div>
            <div>R$ 227.27</div>
          </TableCell>
          <TableCell>
            <div>Data</div>
            <div>12/12/2020</div>
          </TableCell>
          <TableCell>
            <Button content="Compra" primary />
          </TableCell>
          <TableCell>
            <Button content="Venda" secondary />
          </TableCell>
        </TableRow>
        {openNewWalletField && (
          <TableRow rows={6}>
            <TableCell>
              <div style={{ paddingRight: 12 }}>
                <Select
                  options={newWalletName.length >= 3 ? shares : []}
                  inputValue={newWalletName}
                  onInputChange={(newValue) => setNewWalletName(newValue)}
                  onChange={(newValue) => {
                    setSelectedShare({
                      name: newValue?.value || "",
                    });
                    asyncFetchShareActualPrice();
                  }}
                />
              </div>
            </TableCell>
            <TableCell>
              <div>Ações</div>
              <div>0</div>
            </TableCell>
            <TableCell>
              <div>Preço</div>
              <div>{selectedShare.price}</div>
            </TableCell>
            <TableCell>
              <div>Data</div>
            </TableCell>
            <TableCell>
              <Button content="Compra" primary onClick={handleAddShare} />
            </TableCell>
            <TableCell>
              <Button content="Venda" secondary />
            </TableCell>
          </TableRow>
        )}
      </Table>
    </div>
  );
};
