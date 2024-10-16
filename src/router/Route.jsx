import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { OrderListPage } from "../pages/OrderListPage";
import CostInfoPage from "../pages/CostInfoPage";
import CalcCompletePage from "../pages/CalcCompletePage";
import CostListPage from "../pages/CostListPage";
import OrderInfoPage from "../pages/OrderInfoPage";
import PlanInfoPage from "../pages/PlanInfoPage";
import PlanListPage from "../pages/PlanListPage";
import PurchaseInfoPage from "../pages/PurchaseInfoPage";
import PurchaseListPage from "../pages/PurchaseListPage";
import ResultInfoPage from "../pages/ResultInfoPage";
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
        path:"/calc-complete",
        element: <CalcCompletePage />,
    },
    {
        path:"/cost-list",
        element: <CostListPage />,
    },
    {
        path:"/order-info",
        element: <OrderInfoPage />,
    },
    {
        path:"/plan-info",
        element: <PlanInfoPage />,
    },
    {
        path:"/plan-list",
        element: <PlanListPage />,
    },
    {
        path:"/purchase-info",
        element: <PurchaseInfoPage />,
    },
    {
        path:"/purchase-list",
        element: <PurchaseListPage />,
    },
    {
        path:"/result-info",
        element: <ResultInfoPage />,
    },
    {
        path:"/cost-info",
        element: <CostInfoPage />,
    }

]);

export default function Route() {
    return <RouterProvider router={router} />;
  }