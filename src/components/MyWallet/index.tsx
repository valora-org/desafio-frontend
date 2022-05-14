import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FiMinus, FiPlus } from "react-icons/fi";
import Select from "react-select";
import { TickersContext } from "../../contexts/useTickers";
import { WalletContext } from "../../contexts/useWallet";
import {
  asyncFetchQuoteShortInformation,
  asyncFetchSymbolList,
} from "../../services/api";
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
    if (openNewWalletField) return;
    try {
      const data = await asyncFetchSymbolList();
      const options = data.map((symbolList: any) => ({
        value: symbolList,
        label: symbolList,
      }));
      setShares(options);
    } catch (error) {
      toast.error("Não foi possível carregar a lista de códigos");
    }
  }

  const asyncFetchShareActualPrice = async () => {
    if (!selectedShare.name) return;

    try {
      const data = await asyncFetchQuoteShortInformation(selectedShare.name);

      setSelectedShare({
        ...selectedShare,
        price: data.price,
      });
    } catch (error) {
      toast("Não foi possível carregar o preço atual");
    }
  };

  const { stocksInWallet, addStockInWallet } = useContext(WalletContext);
  const { addOnRecentStocks } = useContext(TickersContext);
  const handleAddShare = () => {
    if (!selectedShare.name) return;

    addStockInWallet(selectedShare.name);
    addOnRecentStocks(selectedShare.name);

    setSelectedShare({} as Share);
    setNewWalletName("");

    setOpenNewWalletField(false);
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
          <TableRow rows={3}>
            <TableCell>
              <div style={{ paddingRight: 12 }}>
                <Select
                  styles={{
                    option: (provided) => ({
                      ...provided,
                      color: "grey",
                    }),
                  }}
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
              <Button content="Compra" primary onClick={handleAddShare} />
            </TableCell>
          </TableRow>
        )}
      </Table>
    </div>
  );
};
