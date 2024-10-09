import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { OrderListPage } from "../pages/OrderListPage";
import CostInfoPage from "../pages/CostInfoPage";
import DashboardPage from "../pages/DashboardPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path:"/dashboard",
        element:<DashboardPage/>
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