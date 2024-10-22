import { useState, createContext, useEffect, useContext } from "react"; // นำเข้า useContext ด้วย
import axios from "../configs/axios";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
    const [orderData, setOrderData] = useState(null); // สถานะสำหรับเก็บข้อมูลการสั่งซื้อ
    const [WorkergData, setWorkergData] = useState(null); 
    const [WorkerData, setWorkerData] = useState(null); 
    const [CustomerData, setCustomerData] = useState(null); 
    // ฟังก์ชันสำหรับดึงข้อมูลการสั่งซื้อทั้งหมด
    const fetchOrders = async () => {
        try {
            const response = await axios.get("/order/td_orders");
            setOrderData(response.data); // อัปเดตข้อมูลที่ได้จาก API
            console.log(response.data);
            return response; // คืนค่า response
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error; // ขว้างข้อผิดพลาดไปยัง caller
        }
    };

    const fetchWorkerGroups = async () => { 
        try {
            const response = await axios.get("/order/workerg"); // เปลี่ยนเป็น endpoint ที่คุณสร้าง
            setWorkergData(response.data); // อัปเดตข้อมูลที่ได้จาก API
            console.log(response.data);
            return response; // คืนค่า response
        } catch (error) {
            console.error("Error fetching worker groups:", error);
            throw error; // ขว้างข้อผิดพลาดไปยัง caller
        }
    };

    const fetchWorker = async () => { 
        try {
            const response = await axios.get("/order/worker"); // เปลี่ยนเป็น endpoint ที่คุณสร้าง
            setWorkerData(response.data); // อัปเดตข้อมูลที่ได้จาก API
            console.log(response.data);
            return response; // คืนค่า response
        } catch (error) {
            console.error("Error fetching worker groups:", error);
            throw error; // ขว้างข้อผิดพลาดไปยัง caller
        }
    };

    const fetchCustomer = async () => { 
        try {
            const response = await axios.get("/order/customer"); // เปลี่ยนเป็น endpoint ที่คุณสร้าง
            setCustomerData(response.data); // อัปเดตข้อมูลที่ได้จาก API
            console.log(response.data);
            return response; // คืนค่า response
        } catch (error) {
            console.error("Error fetching worker groups:", error);
            throw error; // ขว้างข้อผิดพลาดไปยัง caller
        }
    };
    // ฟังก์ชันสำหรับค้นหาข้อมูลการสั่งซื้อด้วยหมายเลข
    const searchOrderData = async (orderNo) => {
        try {
            const response = await axios.post("/order/search_order", { Order_No: orderNo  });
            setOrderData(response.data.data.order); // อัปเดตข้อมูลที่ได้จาก API
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    const editOrders = async () => {
        try {
           const response = await axios.put('/order/editOrder', orderData); 
           console.log('Order updated successfully:', response.data);
           return response.data;
        } catch (error) {
        console.error("Error updating order:", error.response?.data || error.message);
        throw new Error('Failed to update order');
        }
    };

    const deleteOrder = async (orderNo) => {
        try {   
            const response = await axios.delete(`/order/deleteOrder`, {
                data: { Order_No: orderData.Order_No } // ส่งค่า Order_No ใน body
            });
    
            console.log('Order deleted successfully:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error deleting order:', error);
            throw new Error('Failed to delete order');
        }
    };

    useEffect(() => {
        fetchWorkerGroups(); // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลเมื่อคอมโพเนนต์ถูกโหลด
    }, []);

    useEffect(() => {
        fetchWorker(); // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลเมื่อคอมโพเนนต์ถูกโหลด
    }, []);

    return (
        <OrderContext.Provider value={{CustomerData, WorkerData, WorkergData, orderData, searchOrderData, fetchOrders,editOrders, fetchWorkerGroups, fetchWorker, deleteOrder,  setOrderData, }}>
            {children}
        </OrderContext.Provider>
    );
};
