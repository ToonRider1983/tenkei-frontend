import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default function ResultInfo() {
  return (
<div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div>
            <div className="flex justify-center items-center py-3">
                <label className="text-xl font-bold">Result Info</label>
            </div>
            <hr />
            <div className="mx-5 py-4">
                <div className="grid grid-cols-5 w-full items-center gap-2 mb-3">
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Search_Order_No</label>
                        <div className="w-3/5">
                            <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Search_Parts_No</label>
                        <div className="w-3/5">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Search_OdPtL_No</label>
                        <div className="w-3/5">
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">End_No</label>
                        <div className="w-3/5">
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Total(min)</label>
                        <div className="w-3/5 flex justify-between items-center gap-2">
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            <label className="font-medium text-xs">~</label>
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 w-full items-center gap-2 mb-3">
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Target_ProcessL_Grp</label>
                        <div className="w-3/5">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Target_Process_Date</label>
                        <div className="w-3/5 flex justify-between items-center gap-2">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            <label className="font-medium text-xs">~</label>
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                    <div></div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Now_No</label>
                        <div className="w-3/5">
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Re_Tatal</label>
                        <div className="w-3/5 flex justify-between items-center gap-2">
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            <label className="font-medium text-xs">~</label>
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center gap-2 mb-3">
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Sort</label>
                        <div className="w-3/5">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Mark_Days</label>
                        <div className="w-3/5">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-6 h-6" />
                            <label className="text-xs font-medium">Color_Separate</label>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-6 h-6" />
                            <label className="text-xs font-medium">Info_View</label>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Re_Process</label>
                        <div className="w-3/5">
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">Re_Total_Net</label>
                        <div className="w-3/5">
                            <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-12 mx-5 py-4">
                <div className="flex items-start">
                    <label className="text-xs font-bold">Order_Info_Search</label>
                </div>
                <div className="col-span-11 grid grid-cols-1">
                    <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                            <label className="font-medium text-xs w-2/5">Product_Grp</label>
                            <div className="w-3/5 flex gap-1 justify-between">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 items-center">
                            <div className="flex gap-2 items-center justify-center">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="text-xs font-medium">Od_Pending</label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium w-2/5 text-end">Ctl_Person</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium w-2/5 text-end">Sales_Person</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5 text-end">Specific</label>
                            <div className="flex gap-2 w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Received</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-4 gap-2 items-center ">
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Customer</label>
                                <div className="w-3/5 flex justify-between gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Qty</label>
                                <div className="w-3/5 flex justify-between gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Price</label>
                                <div className="w-3/5 flex justify-between gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Supply</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">Progress</label>
                            <div className="w-3/5 flex justify-between gap-2">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Request</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-4 items-center gap-2">
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Product</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Req3</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Coating</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Detail</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">Delivery</label>
                            <div className="w-3/5 flex justify-between gap-2">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs ">Product</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 items-center gap-2">
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Size</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Mate1</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">P_Docu</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">Target</label>
                            <div className="w-3/5 flex justify-between gap-2">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs ">Confirm</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Draw</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Mate2</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">S_Docu</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">Pd_Complete</label>
                            <div className="w-3/5 flex justify-between gap-2">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-12 mx-5 py-4">
                <div className="flex items-start">
                    <label className="text-xs font-bold">Parts_Info</label>
                </div>
                <div className="col-span-11 grid grid-cols-1">
                    <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Parts_No</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Order_Parts_No</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <input type="checkbox" className="w-6 h-6" />
                                <label className="w-2/5 font-medium text-xs">Pt_Pending</label>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <label className="w-2/5 font-medium text-xs text-end">Pl_Req_Person</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="w-2/5 font-medium text-xs text-end">Pl_Ed_Rev</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Pt_Name</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-between items-center gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium w-2/5">Pt_Mate</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium w-2/5">Pt_Qty</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-2 items-center w-2/12">
                                <input type="checkbox" className="h-6 w-6" />
                                <label className="text-xs font-medium">Split</label>
                            </div>
                            <div className="flex justify-between gap-1 items-center w-2/12">
                                <label className="text-xs font-medium w-1/5">Spare</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 items-center w-2/12">
                                <label className="text-xs font-medium w-1/5">NG</label>
                                <div className="w-4/5">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 items-center w-5/12">
                                <label className="text-xs font-medium w-4/12">Connect_Od_No</label>
                                <div className="w-7/12">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5 text-end">Progress</label>
                            <div className="flex gap-2 w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff00] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Parts_Deli</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-2 items-center gap-2">
                            <div className="flex justify-start items-center gap-2">
                                <label className="font-medium text-xs w-2/12">Pt_Note</label>
                                <div className="w-7/12">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-2">
                                <label className="font-medium text-xs w-auto">Connect_Pt_No</label>
                                <div className="w-4/6">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5 text-end items-center">Schedule</label>
                            <div className="flex gap-2 w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Plan_Reg</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-2 items-center gap-2">
                            <div className="flex gap-2 items-center justify-start">
                                <label className="w-2/12 font-medium text-xs">Pt_Info</label>
                                <div className="w-7/12">
                                    <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center justify-end">
                                <label className="text-xs font-medium w-auto text-end">Connect_Pr_No</label>
                                <div className="flex gap-2 w-4/6">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="w-2/5 font-medium text-xs text-end">Pt_Complete</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Plan_Upd</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-4 flex justify-between items-center gap-2">
                            <label className="font-medium text-xs">Info</label>
                            <div className="flex gap-1 items-center">
                                <label className="font-medium text-xs">1</label>
                                <div className="flex gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="checkbox" className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <label className="font-medium text-xs">2</label>
                                <div className="flex gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="checkbox" className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <label className="font-medium text-xs">3</label>
                                <div className="flex gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="checkbox" className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <label className="font-medium text-xs">4</label>
                                <div className="flex gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="checkbox" className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <label className="font-medium text-xs">5</label>
                                <div className="flex gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="checkbox" className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <label className="font-medium text-xs">6</label>
                                <div className="flex gap-2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input type="checkbox" className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="w-2/5 font-medium text-xs">Order_No</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-4 flex justify-between items-center gap-2">
                            <div className="flex gap-2 items-center w-2/12">
                                <label className="font-medium text-xs w-2/5">Parts_No</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center w-2/12">
                                <label className="font-medium text-xs w-2/5">Target_No</label>
                                <div className="w-3/5">
                                    <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center w-2/12">
                                <label className="font-medium text-xs w-2/5">MV_Range</label>
                                <div className="w-3/5">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center w-2/12">
                                <label className="font-medium text-xs w-3/5">Date_Rev_Days</label>
                                <div className="w-2/5">
                                    <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs">Auto_Finish</label>
                                <input type="checkbox" className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs">Plan_Edit</label>
                                <input type="checkbox" className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs">Admin</label>
                                <input type="checkbox" className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-12 mx-5 py-4">
                <div>

                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 text-center">
                    <label className="font-medium text-xs">No1</label>
                    <label className="font-medium text-xs">No2</label>
                    <label className="font-medium text-xs">No3</label>
                    <label className="font-medium text-xs">No4</label>
                    <label className="font-medium text-xs">No5</label>
                    <label className="font-medium text-xs">No6</label>
                    <label className="font-medium text-xs">No7</label>
                    <label className="font-medium text-xs">No8</label>
                    <label className="font-medium text-xs">No9</label>
                    <label className="font-medium text-xs">No10</label>
                    <label className="font-medium text-xs">No11</label>
                    <label className="font-medium text-xs">No12</label>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Process_Name</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_M_Time</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/L</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_P_Time</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/L</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_Process_Date</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Result_Date</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Rs_M(min/lot)</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Rs_P(min/lot)</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Result_Qty</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 mx-5 py-4">
                <div>

                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 text-center">
                    <label className="font-medium text-xs">No13</label>
                    <label className="font-medium text-xs">No14</label>
                    <label className="font-medium text-xs">No15</label>
                    <label className="font-medium text-xs">No16</label>
                    <label className="font-medium text-xs">No17</label>
                    <label className="font-medium text-xs">No18</label>
                    <label className="font-medium text-xs">No19</label>
                    <label className="font-medium text-xs">No20</label>
                    <label className="font-medium text-xs">No21</label>
                    <label className="font-medium text-xs">No22</label>
                    <label className="font-medium text-xs">No23</label>
                    <label className="font-medium text-xs">No24</label>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Process_Name</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_M_Time</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/L</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_P_Time</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/L</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_Process_Date</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Result_Date</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Rs_M(min/lot)</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Rs_P(min/lot)</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Result_Qty</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 mx-5 py-4">
                <div>

                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 text-center">
                    <label className="font-medium text-xs">No25</label>
                    <label className="font-medium text-xs">No26</label>
                    <label className="font-medium text-xs">No27</label>
                    <label className="font-medium text-xs">No28</label>
                    <label className="font-medium text-xs">No29</label>
                    <label className="font-medium text-xs">No30</label>
                    <label className="font-medium text-xs">No31</label>
                    <label className="font-medium text-xs">No32</label>
                    <label className="font-medium text-xs">No33</label>
                    <label className="font-medium text-xs">No34</label>
                    <label className="font-medium text-xs">No35</label>
                    <label className="font-medium text-xs">No36</label>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Process_Name</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_M_Time</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/L</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_P_Time</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/L</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        <label className="font-medium text-xs">min/P</label>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Plan_Process_Date</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Result_Date</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Rs_M(min/lot)</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Rs_P(min/lot)</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="font-medium text-xs">Result_Qty</label>
                </div>
                <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                    </div>
                    <div>
                        <input type="text" className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
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
                            Finish <br />
                            完了 (F3)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            PDS <br />
                            Input (F4)
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Re WIP <br />
                            仕戻 (F5)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Graph <br />
                            山積 (F6)
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
                            Next Ml <br />
                            連番 (F10)
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
  )
}
