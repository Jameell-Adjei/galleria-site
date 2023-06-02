import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/app.scss";
import DetailsPage from "./DetailsPage";
import ImageContainer from "./ImageContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path: "/",
        element: <ImageContainer/>
      },
      {
        path: "/slideshow",
        element: <DetailsPage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
