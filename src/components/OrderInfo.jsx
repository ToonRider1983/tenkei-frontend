import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";

export default function OrderInfo() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
       
        <div>
            <div className="flex justify-center items-center py-3">
                <label className="text-xl font-bold">Order Info</label>
            </div>
            <hr />
            <div className="flex justify-between items-center mx-5 py-4">
                <div className="flex gap-2">
                    <label>Search_Order_No</label>
                    <div>
                        <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <label>Order No.</label>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <label>Production Group</label>
                    <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-6 h-6" />
                    <label>Auto_Year_Change Group</label>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 py-4 mx-4 gap-2">
                <div className="grid grid-cols-1">
                    <div className="flex gap-1">
                        <div className="w-7/12 content-around">
                            <div className="flex items-center mb-8">
                                <label className="w-4/6 text-xs font-semibold">Request Delivery Date</label>
                                <div>
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex items-center mb-8">
                                <label className="w-4/6 text-xs font-semibold">Production Delivery Date</label>
                                <div>
                                    <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex items-center mb-8  ">
                                <label className="w-4/6 text-xs font-semibold">Comfirm Delivery Date</label>
                                <div>
                                    <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label className="w-4/6 text-xs font-semibold">NAV Delivery Date</label>
                                <div>
                                    <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="w-5/12 content-around">
                            <div className="flex items-center mb-3 gap-2">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="w-3/5 text-xs font-semibold">Order Pending</label>
                            </div>
                            <div className="flex items-center mb-3 gap-2">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="w-3/5 text-xs font-semibold">Temporary Shipment</label>
                            </div>
                            <div className="flex items-center mb-3 gap-2">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="w-3/5 text-xs font-semibold">Unreceived</label>
                            </div>
                            <div className="flex items-center mb-3 gap-2">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="w-3/5 text-xs font-semibold">Order Identification1</label>
                            </div>
                            <div className="flex items-center mb-3 gap-2">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="w-3/5 text-xs font-semibold">Order Identification2</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="w-3/5 text-xs font-semibold">Order Identification3</label>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">NAV Goods Name</label>
                            <div className="w-3/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <div className="w-1/6">
                                <button className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"><FaArrowDownLong /></button>
                            </div>
                        </div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Goods Name</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">NAV Goods Size</label>
                            <div className="w-3/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <div className="w-1/6">
                                <button className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"><FaArrowDownLong /></button>
                            </div>
                        </div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Goods Size</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <div className="w-5/6">
                                <div className="flex gap-2  mb-2">
                                    <label className="text-xs font-semibold w-2/5">Cutomer_Draw</label>
                                    <div className="w-3/5">
                                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <label className="text-xs font-semibold w-2/5">Company_Draw</label>
                                    <div className="w-3/5">
                                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/6">
                                <button className="bg-blue-500 text-white text-lg w-full py-[22px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"><FaArrowDownLong /></button>
                            </div>
                        </div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Draw</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex justify-between w-full gap-2 mb-2">
                            <div className="w-7/12 flex gap-1 items-center">
                                <label className="text-xs font-semibold w-5/12">Quantity</label>
                                <div className="w-3/12">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                                <div className="w-2/12">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-3/12">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="w-5/12 flex items-center">
                                <label className="text-xs font-semibold w-1/2">Remaining Qty</label>
                                <div className="w-1/2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Sale Instructions</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Instructions</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Remark</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Inspection Remark</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-1/5">Sales Group</label>
                            <div className="w-2/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-1/5">Sales Person</label>
                            <div className="w-2/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex items-center w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/12">Req Category</label>
                            <div className="w-1/12">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/12">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <div className="w-1/12">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/12">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <div className="w-1/12">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/12">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                            <div className="flex w-full gap-2">
                                <label className="text-xs font-semibold w-2/5">Material1</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex w-full gap-2 mb-2">
                                <label className="text-xs font-semibold w-1/5">H/T</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-2/5">Material2</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-1/5">H/T</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-2/5">Material3</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-1/5">H/T</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-2/5">Material4</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-1/5">H/T</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-2/5">Material5</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex w-1/2 gap-2">
                                <label className="text-xs font-semibold w-1/5">H/T</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <div className="flex w-2/5 gap-2">
                                <label className="text-xs font-semibold w-2/6">Coating</label>
                                <div className="w-2/6">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-2/6">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex w-3/5 gap-2">
                                <label className="text-xs font-semibold w-2/6">CT_Detail</label>
                                <div className="w-4/6">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                            <label className="text-xs font-semibold w-1/5">Tolerance</label>
                            <div className="w-4/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                            <div className="flex w-6/12 gap-2 items-center">
                                <label className="text-xs font-semibold w-2/5">Quotation No</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex w-6/12 gap-2 items-center">
                                <label className="text-xs font-semibold w-1/5">CAT</label>
                                <div className="w-2/5">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-2/5">
                                    <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-1/5">Item</label>
                            <div className="w-2/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center mb-2">
                            <label className="text-xs font-semibold w-3/12">Customer Materail</label>
                            <div className="w-9/12">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center mb-2">
                            <label className="text-xs font-semibold w-1/5">PO No</label>
                            <div className="w-4/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-1/5">Production Docu</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <div className="w-1/5">
                                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">Setting</button>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-1/5">Supplement_Docu</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <div className="w-1/5">
                                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">Setting</button>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Production_Received</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Production_Completed</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">QC_Completed</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Shipment_Date</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Production_Calc_Date</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Calc_processing_Data</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 mb-2">
                            <label className="text-xs font-semibold w-2/6">Order_Modify_Date</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="grid justify-between">
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Customer</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Long Name</label>
                            <div className="w-4/6">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Delivery Category</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Delivery Destination</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Contract Document</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Unit Price</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6 flex gap-1">
                                <div className="w-2/5">
                                    <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Order No of Production Split</label>
                            <div className="w-3/6">
                                <input type="text" className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <div className="w-1/6">
                                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center gap-2">Quot <FaArrowRightLong /></button>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Order Controller Person</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Order Register Person</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Order Update Person</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Specific Item</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Order Progress CAT</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Delivery Date CAT</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Schedule CAT</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Target CAT</label>
                            <div className="w-2/6">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="w-2/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Target Qty</label>
                            <div className="w-4/6">
                            <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Pruduction Completed Qty</label>
                            <div className="w-4/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Inspection Completed Qty</label>
                            <div className="w-4/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Delivery Qty</label>
                            <div className="w-4/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Split Qty</label>
                            <div className="w-4/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">Production Calculation Qty</label>
                            <div className="w-4/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <label className="text-xs font-semibold w-2/6">NG Qty</label>
                            <div className="w-4/6">
                            <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <div className="grid grid-cols-3 gap-4">
                    <div className="grid grid-cols-4 gap-2">
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Search <br />
                            検索 (F1)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Edit <br />
                            編集 (F2)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            New Add <br />
                            追加 (F3)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Order <br />
                            受注 (F4)
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Plan <br />
                            計画 (F5)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            PS All <br />
                            全頁 (F6)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            List <br />
                            一 覽 (F7)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            NextParts <br />
                            別部 (F8)
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Save <br />
                            登録 (F9)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Delete <br />
                            削除 (F10)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                            NextInput <br />
                            次へ (F11)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Exit <br />
                            終了 (F12)
                        </button>
                    </div>
                </div>
            </div>
        </div>











      </div>
    </div>
  );
}
