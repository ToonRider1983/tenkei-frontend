import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const PurchaseContext = createContext();

export default function PurchaseContextProvider({ children }) {

    const [purchaseData, setPurchaseData] = useState(null); 
    
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
            const response = await axios.post("/procure/search-procure", { Order_No: orderNo});
            
            // Check if the response contains valid procure data
            if (response.data && response.data.data && response.data.data.procure) {
                setPurchaseData(response.data.data.procure); // Correctly set purchase data from procure
                return true; 
            } else {
                return false; 
            }
        } catch (error) {
            console.error("Error fetching order data:", error);
            return false; 
        }
    };

    return (
        <PurchaseContext.Provider value={{purchaseData, setPurchaseData, createPurchase,searchPurchaseData,}}>
            {children}
        </PurchaseContext.Provider>
    );
};