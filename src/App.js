import React, { Component } from "react";
import Layout from "../src/hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
/*export default function App() {
  return (
    <div className="App">
      
    </div>
  );
}
*/
