import { useContext } from "react";
import { FiArrowDown } from "react-icons/fi";
import { TickersContext } from "../../contexts/useTickers";
import { Button } from "../Button";
import { Table } from "../Table";
import { TableHeader } from "../TableHeader";
import { RecentSearchTableRow } from "./RecentSearchTableRow";

export const RecentSearch = () => {
  const { stocks } = useContext(TickersContext);

  return (
    <div>
      <TableHeader title="Buscas Recentes">
        <Button content="">
          <FiArrowDown />
        </Button>
      </TableHeader>
      <Table>
        {stocks.map((stock, index) => (
          <RecentSearchTableRow key={index} stock={stock} />
        ))}
      </Table>
    </div>
  );
};
