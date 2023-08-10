
import React from "react";
import Tooltip from "./components/Tooltip";

const App = () => {



  return (
    <div>
        {/* Do not remove the main div */}
           <Tooltip text="This is tooltip">
              <h1>Hover over me</h1>
           </Tooltip>
    </div>
  )
}

export default App
