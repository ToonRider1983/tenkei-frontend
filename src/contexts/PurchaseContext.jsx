import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const PurchaseContext = createContext();

export default function PurchaseContextProvider({ children }) {

    const [purchaseData, setPurchaseData] = useState(null); 
    const [selectedPurchaseNo, setSelectedPurchaseNo] = useState(null); 
    const createPurchase = async () => {
        try {
            const response = await axios.post('/procure/add-procure', purchaseData); 
            console.log('Purchase created successfully:', response.data);
            return response.data;
        } catch (error) {
            console.error("Error creating order:", error.response?.data || error.message);
            throw new Error('Failed to create order');
        }
    };

    const searchPurchaseData = async (orderNo) => { 
        try {
            const response = await axios.post("/procure/search-procure", { Order_No: orderNo });
    
          
            if (response.data && response.data.data && Array.isArray(response.data.data.procure)) {
                setSelectedPurchaseNo(response.data.data.procure); 
                return true; 
            } else {
                return false; 
            }
        } catch (error) {
            console.error("Error fetching order data:", error);
            return false; 
        }
    };

    const editProcure= async () => {
        try {
           const response = await axios.put('/procure/edit-procure', purchaseData); 
           console.log('purchase updated successfully:', response.data);
           return response.data;
        } catch (error) {
        console.error("Error updating order:", error.response?.data || error.message);
        throw new Error('Failed to update order');
        }
    };

    const searchProcureData = async (OdPcLnNo) => {
        try {
            const response = await axios.post("/procure/search-purchase", { OdPcLn_No: OdPcLnNo});
            
            
            if (response.data && response.data.data && response.data.data.procure) {
                setPurchaseData(response.data.data.procure); 
                return true; 
            } else {
                return false; 
            }
        } catch (error) {
            console.error("Error fetching order data:", error);
            return false; 
        }
    };

    const deleteProcure = async () => {
        try {   
            const response = await axios.delete(`/procure/delete-procure`, {
                data: { OdPcLn_No: purchaseData.OdPcLn_No } 
            });
    
            console.log('purchaseData deleted successfully:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error deleting purchaseData:', error);
            throw new Error('Failed to delete purchaseData');
        }
    };

    return (
        <PurchaseContext.Provider value={{setSelectedPurchaseNo, selectedPurchaseNo, purchaseData, setPurchaseData, createPurchase,searchPurchaseData,searchProcureData,editProcure,deleteProcure,}}>
            {children}
        </PurchaseContext.Provider>
    );
};