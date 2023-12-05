import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <Home></Home>

      <ToastContainer />
    </>
  );
}
export default App;
