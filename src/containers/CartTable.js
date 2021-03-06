import * as React from "react";
import { DeleteForever, Payment } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { itemsToArray } from "../utils";
import {
  reduceQuantity,
  removeProduct,
  addProduct,
} from "../store/actions/cartactions";
import { Link } from "react-router-dom";
import { addMessage } from "../store/actions/messageactions";
import { messages } from "../utils/messages";

export default function DenseTable() {
  const cart = useSelector((state) => state.cart); //cart state
  const dispatch = useDispatch();

  let itemsArray = [];
  itemsArray = itemsToArray(cart.items); //convert object to array

  const reduceQuantityHandler = (item) => {
    if (item.cartQuantity === 0) {
      dispatch(addMessage({ messageText: messages.zero, bgColor: "warning" }));
    } else {
      dispatch(reduceQuantity(item));
    }
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {itemsArray.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #212529" }}
              >
                <Link
                  to={{
                    pathname: `/${item.name.split(" ").join("-")}`,
                    state: { id: item.id },
                  }}
                >
                  <img src={item.src} alt={item.name} className="cart__image" />
                </Link>
                <h4>{item.name}</h4>
                <h4 className="cart__price">{item.price}€</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #212529" }}
              >
                <h4>{item.name}</h4>
                <h5>{item.category}</h5>
              </TableCell>
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #212529" }}
              >
                <button
                  className="cart__button"
                  type="button"
                  onClick={() => dispatch(addProduct(item))}
                >
                  +
                </button>
                <span className="cart__span">{item.cartQuantity}</span>
                <button
                  className="cart__button"
                  type="button"
                  onClick={() => reduceQuantityHandler(item)}
                >
                  -
                </button>
              </TableCell>
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #212529" }}
              >
                <span className="cart__span"> {item.price}€</span>
              </TableCell>
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #212529" }}
              >
                <DeleteForever
                  style={{ fontSize: 40, cursor: "pointer" }}
                  onClick={() => dispatch(removeProduct(item.id))}
                />
              </TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
              style={{ borderBottom: "1px solid #212529" }}
            ></TableCell>
            <TableCell
              align="center"
              style={{ borderBottom: "1px solid #212529" }}
            >
              <span className="cart__span">Total amount</span>
            </TableCell>
            <TableCell
              align="center"
              style={{ borderBottom: "1px solid #212529" }}
            >
              <span className="cart__span">{cart.totalQuantity}</span>
            </TableCell>
            <TableCell
              align="center"
              style={{ borderBottom: "1px solid #212529" }}
            >
              <Payment
                style={{ fontSize: 40, position: "relative", top: "1vh" }}
              />
              <span className="cart__span">{cart.totalPrice}€</span>
            </TableCell>
            <TableCell
              style={{ borderBottom: "1px solid #212529" }}
            ></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
