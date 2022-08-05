import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCartList() {
    return (
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Category id</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                  color="danger"
                >
                  Del
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCartList()}</div>;
  }
}
