import Navbar from "./Navbar";
import "./styles/app.scss";
import { DetailsPageProvider } from "./context/DetailsPageContext";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <DetailsPageProvider>
        <div className="App">
          <Navbar/>
          <Outlet/>
        </div>
      </DetailsPageProvider>
    </>
  );
}

export default App;
