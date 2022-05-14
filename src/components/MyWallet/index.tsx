import { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Select from "react-select";
import { WalletContext } from "../../contexts/useWallet";
import { financialApi } from "../../services/api";
import { Button } from "../Button";
import { Table } from "../Table";
import { TableCell } from "../Table/TableCell";
import { TableRow } from "../Table/TableRow";
import { TableHeader } from "../TableHeader";
import { WalletTableRow } from "./WalletTableRow";

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

  const { stocksInWallet, addStockInWallet } = useContext(WalletContext);

  const handleAddShare = () => {
    if (!selectedShare.name) return;

    addStockInWallet(selectedShare.name);
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
        {stocksInWallet.map((stock) => {
          return <WalletTableRow key={stock.name} stock={stock} />;
        })}
        {openNewWalletField && (
          <TableRow rows={4}>
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
              <div>Preço</div>
              <div>{selectedShare.price}</div>
            </TableCell>
            <TableCell>
              <div>Data</div>
            </TableCell>
            <TableCell>
              <Button content="Compra" primary onClick={handleAddShare} />
            </TableCell>
          </TableRow>
        )}
      </Table>
    </div>
  );
};
