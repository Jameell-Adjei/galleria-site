import Navbar from "./Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/app.scss";
import HomePage from "./HomePage";
import { DetailsPageProvider } from "./context/DetailsPageContext";
import DetailsPage from "./DetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/slideshow",
    element: <DetailsPage />,
  },
]);

function App() {
  return (
    <>
      <DetailsPageProvider>
        <Navbar/>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </DetailsPageProvider>
    </>
  );
}

export default App;
