import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/CardList/cardListComponent";
import { SearchBox } from "./Components/SearchBox/searchBoxComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searhFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searhFeild: e.target.value })
  };

  render() {
    const { monsters, searhFeild } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searhFeild.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monster Rolodex</h1>
        <SearchBox
          placeHolder="Search Monster"
          onHandleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Ashish Sharma
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
