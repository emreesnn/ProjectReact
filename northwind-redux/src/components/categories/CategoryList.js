import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h1>Category List</h1>
        <h3>Seçili Kategori : {this.props.currentCategory.categoryName}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentCategory: state.changeCategoryReducer };
}

export default connect(mapStateToProps)(CategoryList);
