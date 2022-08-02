import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Yiyecek" },
      { categoryId: 2, categoryName: "İçecek" },
    ],
  };
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {
            //map = foreach benzeri bir döngü sağlar
            this.state.categories.map((category) => (
              <ListGroupItem key={category.categoryId}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    );
  }
}
