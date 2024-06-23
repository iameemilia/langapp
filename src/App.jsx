import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WordList from "./components/WordList";
import "./components/styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <WordList />
      <Footer />
    </div>
  );
};

export default App;