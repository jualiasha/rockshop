import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";

export default function DenseTable({ products }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" style={{ borderBottom: "unset" }}>
                <img
                  src={product.src}
                  alt={product.name}
                  className="cart__image"
                />
                <h4>{product.name}</h4>
                <h4 className="cart__price">{product.price}€</h4>
              </TableCell>
              <TableCell align="center">{product.name}</TableCell>
              <TableCell align="center">{product.category}</TableCell>
              <TableCell align="center">{product.cartquantity}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
