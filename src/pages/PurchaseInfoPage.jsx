import React from 'react';
import PurchaseInfo from '../components/PurchaseInfo';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function PurchaseInfoPage() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex justify-center items-center py-3">
          <label className="text-xl font-bold">Purchase Info</label>
        </div>
        <hr className="border-y-[1px] border-gray-300" />
        <PurchaseInfo />
      </div>
    </div>
  )
}