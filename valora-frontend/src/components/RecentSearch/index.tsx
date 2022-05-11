import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { Button } from "../Button";
import { Table } from "../Table";
import { TableCell } from "../Table/TableCell";
import { TableRow } from "../Table/TableRow";
import { TableHeader } from "../TableHeader";
import styles from "./RecentSearch.module.scss";

export const RecentSearch = () => {
  return (
    <div>
      <TableHeader title="Buscas Recentes">
        <Button content="">
          <FiArrowDown />
        </Button>
      </TableHeader>
      <Table>
        <TableRow>
          <TableCell>Apple Inc. (AAPL)</TableCell>
          <TableCell>
            <div>R$ 227.27</div>
            <div>Abertura</div>
          </TableCell>
          <TableCell>
            <div>R$ 227.27</div>
            <div>Fechamento</div>
          </TableCell>
          <TableCell direction="row">
            <Button content="Adicionar" primary />
            <Button content="Remover" secondary />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Amazon.com, Inc (AMZN)</TableCell>
          <TableCell>
            <div>R$ 227.27</div>
            <div>Abertura</div>
          </TableCell>
          <TableCell>
            <div>R$ 227.27</div>
            <div>Fechamento</div>
          </TableCell>
          <TableCell direction="row">
            <Button content="Adicionar" primary />
            <Button content="Remover" secondary />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Alphabet Inc. (GOOG)</TableCell>
          <TableCell>
            <div>R$ 227.27</div>
            <div>Abertura</div>
          </TableCell>
          <TableCell>
            <div>R$ 227.27</div>
            <div>Fechamento</div>
          </TableCell>
          <TableCell direction="row">
            <Button content="Adicionar" primary />
            <Button content="Remover" secondary />
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
};
