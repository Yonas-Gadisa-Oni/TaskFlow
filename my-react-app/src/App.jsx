import { useState } from "react";

import Sider from "./components/Sider";
import Header from "./components/Header";
import Date from "./components/Date";
import Card from "./components/Card"

import "./App.css";

function App() {
  const [showSider, setShowSider] = useState(true);

  return (
    <div className="layout">
      <Sider
        showSider={showSider}
        setShowSider={setShowSider}
      />

      <Header showSider={showSider} />

      <main className={`main ${showSider ? "expanded" : "collapsed"}`}>
        <section className="Date">
          <Date />
        </section>
        <section className="Card">
          <Card />
        </section>
      </main>
    </div>
  );
}

export default App;