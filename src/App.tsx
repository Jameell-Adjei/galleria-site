import Navbar from "./Navbar";
import "./styles/app.scss";
import { DetailsPageProvider } from "./context/DetailsPageContext";
import { Outlet } from "react-router-dom";
import { LightBoxProvider } from "./context/LightBoxContext";



function App() {
  return (
    <>
      <LightBoxProvider>
      <DetailsPageProvider>
        <div className="App">
          <Navbar/>
          <Outlet/>
        </div>
      </DetailsPageProvider>
      </LightBoxProvider>
    </>
  );
}

export default App;
