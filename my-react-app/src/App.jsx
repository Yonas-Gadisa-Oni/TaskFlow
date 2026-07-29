import { useState } from "react";

import Sider from "./components/Sider";
import Header from"./components/Header";
import Date from  "./components/Date";



function App(){

  const [showSider, setShowSider] = useState(true)

  return(
    <div>
      <Sider
        showSider={showSider}
        setShowSider={setShowSider}
      />
      <Header
        showSider={showSider}
      />
      <Date
        showSider={showSider}
      />
    </div>
  );
}

export default App;