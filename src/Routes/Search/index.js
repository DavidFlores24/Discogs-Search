import React, { Component } from "react";

import { SearchInput } from "../../Components";

import { submitSearch } from "../../API";

import styles from "./search.module.css";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artistList: {}
    };

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  async onKeyUp(evt) {
    const query = evt.target.value;

    // submit the search only when the input has 3 or more characters
    if (query.length >= 3) {
      this.setState({
        query: query
      });

      const res = await submitSearch(query);
      console.log(res);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <SearchInput keyup={this.onKeyUp} />
      </div>
    );
  }
}
