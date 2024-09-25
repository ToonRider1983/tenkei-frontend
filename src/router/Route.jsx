import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import { OrderListPage } from "../pages/OrderListPage";
import CostInfoPage from "../pages/CostInfoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path:"/order-list",
        element: <OrderListPage />,
    },
    {
        path:"/cost-info",
        element: <CostInfoPage />,
    }

]);

export default function Route() {
    return <RouterProvider router={router} />;
  }