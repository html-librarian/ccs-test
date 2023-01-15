import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { Root } from "../pages/Root";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
]);
