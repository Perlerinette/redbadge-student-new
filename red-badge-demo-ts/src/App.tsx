import React from "react";
import PropsExample from "./components/PropsExample";
import PropsMappingExample from "./components/PropsMapping";

function App() {
  const visitedPlaces = ['France', 'Italy', 'Spain', 'Britain', 'USA', 'Germany'];

  return (
    <div>
      <PropsExample name="Tom" business="bakery"/>
      <PropsMappingExample visited={visitedPlaces} />
    </div>

  )
}

export default App;

