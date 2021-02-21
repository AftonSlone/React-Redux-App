import { useState } from "react";
import CardList from "./components/CardList";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <CardList />
    </div>
  );
}

export default App;
