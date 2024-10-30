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
    return (
        <PurchaseContext.Provider value={{purchaseData, setPurchaseData, createPurchase,}}>
            {children}
        </PurchaseContext.Provider>
    );
};