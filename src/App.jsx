import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { modal } = useGlobalContext();

  return (
    <div>
      <Search />
      <Favorites />
      <Meals />
      {modal && <Modal />}
    </div>
  );
}

export default App;
