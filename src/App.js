import React, { Component } from "react";
import posts from "./posts";

// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor() {
    super();
    this.handleQuery = this.handleQuery.bind(this);
    this.filteredPosts = posts;

    this.state = {
      query: "",
    };
  }
  handleQuery(event) {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
    this.search();
  }

  search() {
    const query = this.state.query;
    this.filteredPosts = posts.filter(function (post) {
      return post.title.toLowerCase().match(query);
    });
    console.log(this.state.query, this.filteredPosts);
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input
            type="text"
            placeholder="Ingresa el término de búsqueda"
            value={this.state.query}
            onChange={this.handleQuery}
          />
        </div>
        <ul>
          {this.filteredPosts.map((post, key) => (
            <li key={key}>
              <a href={post.url}>
                <img src={post.image} alt={post.title} />
              </a>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
