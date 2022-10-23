import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import MainFeed from "./Components/MainFeed/MainFeed";
import "./App.scss";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className="main-container">
          <div className="radial-gradient-test">Persimmon Capital</div>
          <MainFeed></MainFeed>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
