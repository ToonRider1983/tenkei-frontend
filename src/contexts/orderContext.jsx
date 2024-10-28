import { useState, createContext, useEffect, useContext } from "react"; // นำเข้า useContext ด้วย
import axios from "../configs/axios";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
    const [orderData, setOrderData] = useState(null); // สถานะสำหรับเก็บข้อมูลการสั่งซื้อ
    const [WorkergData, setWorkergData] = useState(null); 
    const [WorkerData, setWorkerData] = useState(null); 
    const [CustomerData, setCustomerData] = useState(null); 
   
    const resetOrderData = () => {
        setOrderData((prevData) => ({
            ...prevData, // คงค่าของ Order_No จากข้อมูลเดิมไว้
            Quantity: null,
            Product_Grp_CD: "",
            Od_CAT1: false,
            Od_CAT2: false,
            Od_CAT3: false,
            NAV_Name: "",
            Product_Name: "",
            NAV_Size: "",
            Product_Size: "",
            Customer_Draw: "",
            Company_Draw: "",
            Product_Draw: "",
            Unit_CD: "",
            Sl_Instructions: "",
            Pd_Instructions: "",
            Pd_Remark: "",
            I_Remark: "",
            Sales_Grp_CD: "",
            Sales_Person_CD: "",
            Request1_CD: "",
            Request2_CD: "",
            Request3_CD: "",
            Material1: "",
            H_Treatment1: "",
            Material2: "",
            H_Treatment2: "",
            Material3: "",
            H_Treatment3: "",
            Material4: "",
            H_Treatment4: "",
            Material5: "",
            H_Treatment5: "",
            Tolerance: "",
            Coating_CD: "",
            Coating: "",
            Quote_No: "",
            Quote_CD: "",
            Item1_CD: "",
            Custom_Material: "",
            Od_No_of_Custom: null,
            Pd_Received_Date: null,
            Pd_Complete_Date: null,
            Shipment_Date: null,
            Pd_Calc_Date: null,
            Calc_Process_Date: null,
            Od_Upd_Date: null,
            Customer_CD: "",
            Supply_CD: "",
            Destination_CD: "",
            Contract_Docu_CD: "",
            Unit_Price: null,
            Od_No_of_Pd_Split: null,
            Od_Ctl_Person_CD: "",
            Od_Reg_Person_CD: "",
            Od_Upd_Person_CD: "",
            Specific_CD: "",
            Od_Progress_CD: "",
            Delivery_CD: "",
            Schedule_CD: "",
            Target_CD: "",
            Pd_Target_Qty: null,
            Pd_Complete_Qty: null,
            I_Complete_Qty: null,
            Shipment_Qty: null,
            Pd_Split_Qty: null,
            Pd_Calc_Qty: null,
            NG_Qty: null,
            Request_Delivery: null,
            Product_Delivery: null,
            Confirm_Delivery: null,
            NAV_Delivery: null,
          }));
      };

    const fetchOrders = async () => {
        try {
            const response = await axios.get("/order/td-orders");
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
            const response = await axios.get("/order/workerG"); // เปลี่ยนเป็น endpoint ที่คุณสร้าง
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
            const response = await axios.post("/order/search-order", { Order_No: orderNo });
    
            if (response.data && response.data.data && response.data.data.order) {
                // ถ้ามีข้อมูลการสั่งซื้อให้กำหนดค่าให้ orderData
                setOrderData(response.data.data.order);
                return true; // สร้างค่ากลับเพื่อบอกว่ามีข้อมูล
            } else {
                resetOrderData(); // หากไม่มีข้อมูลให้รีเซ็ตข้อมูล
                return false; // สร้างค่ากลับเพื่อบอกว่าไม่มีข้อมูล
            }
        } catch (error) {
            console.error("Error fetching order data:", error);
            resetOrderData();
            return false; // สร้างค่ากลับเพื่อบอกว่ามีข้อผิดพลาดในการค้นหา
        }
    };

    const editOrders = async () => {
        try {
           const response = await axios.put('/order/edit-order', orderData); 
           console.log('Order updated successfully:', response.data);
           return response.data;
        } catch (error) {
        console.error("Error updating order:", error.response?.data || error.message);
        throw new Error('Failed to update order');
        }
    };

    const createOrder = async () => {
        try {
            const response = await axios.post('/order/add-order', orderData); 
            console.log('Order created successfully:', response.data);
            return response.data;
        } catch (error) {
            console.error("Error creating order:", error.response?.data || error.message);
            throw new Error('Failed to create order');
        }
    };

    const deleteOrder = async (orderNo) => {
        try {   
            const response = await axios.delete(`/order/delete-order`, {
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
        <OrderContext.Provider value={{CustomerData, WorkerData, WorkergData, orderData, searchOrderData, fetchOrders,editOrders, fetchWorkerGroups, fetchWorker, deleteOrder,  setOrderData, createOrder, }}>
            {children}
        </OrderContext.Provider>
    );
};
