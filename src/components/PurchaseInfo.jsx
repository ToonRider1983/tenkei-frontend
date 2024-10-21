import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default function PurchaseInfo() {
  const location = useLocation(); // รับค่า state ที่ถูกส่งมา
  const { searchOrderNo } = location.state || {}; // ตรวจสอบว่า state ถูกส่งมาแล้ว
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div>
          <div className="flex justify-center items-center py-3">
            <label className="text-xl font-bold">Purchase Info</label>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-2 mx-5 py-4">
            <div className="flex gap-2 items-center">
              <label className="font-medium text-xs">Search_Order_No</label>
              <div className="w-3/5">
              {searchOrderNo ? (

                <input
                  type="text"
                  value={searchOrderNo}
                  className="bg-[#cbfefe] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              ) : (
                <input
                  type="text"
                  className="bg-[#cbfefe] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              )}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-medium text-xs">Search_Poln_No</label>
              <div className="w-3/5">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-3/5">
                <input
                  type="text"
                  className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-medium text-xs">Search_OdPoln_No</label>
              <div className="w-3/5">
                <input
                  type="text"
                  className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-12 gap-2 mx-5 py-4">
            <div>
              <label className="font-bold">Order_Info</label>
            </div>
            <div className="col-span-11 grid grid-cols-1 items-center">
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">
                    Pruduct_Grp
                  </label>
                  <div className="w-2/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <div className="w-2/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 gap-2 grid grid-cols-3">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="h-6 w-6" />
                    <label className="font-medium text-xs">Od_Pending</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      Ctl_Person
                    </label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      Sales_Person
                    </label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Specific</label>
                  <div className="w-2/6">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="w-2/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5">Received</label>
                  <div className="w-3/5">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 gap-2 grid grid-cols-3">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/6">
                      Customer
                    </label>
                    <div className="w-2/6">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <div className="w-2/6">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/6">Qty</label>
                    <div className="w-2/6">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <div className="w-2/6">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs">Price</label>
                    <div>
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <label className="font-medium text-xs">Supply</label>
                    <div>
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Progress</label>
                  <div className="w-2/6">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff00] w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="w-2/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5">Request</label>
                  <div className="w-3/5">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Product</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs">Req3</label>
                    <div>
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <label className="font-medium text-xs">Coating</label>
                    <div>
                      <input
                        type="text"
                        className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Detail</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Delivery</label>
                  <div className="w-2/6">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="w-2/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5">Product</label>
                  <div className="w-3/5">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Size</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Mate1</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">P_Docu</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Target</label>
                  <div className="w-2/6">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="w-2/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5">Confirm</label>
                  <div className="w-3/5">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Draw</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Mate2</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">S_Docu</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">
                    Pd_Complete
                  </label>
                  <div className="w-4/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-12 gap-2 mx-5 py-4">
            <div>
              <label className="font-bold">Purchase_Info</label>
            </div>
            <div className="col-span-11 grid grid-cols-1 items-center">
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="col-span-4 grid grid-cols-4 gap-2">
                  <div className="col-span-2 flex items-center gap-2">
                    <label className="font-medium text-xs w-1/5">
                      OfPch_No
                    </label>
                    <div className="w-4/5">
                      <input
                        type="text"
                        className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      Req_Date
                    </label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      Upd_Date
                    </label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">
                    PO_Progress
                  </label>
                  <div className="w-2/6">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="w-2/6">
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5">Order_No</label>
                  <div className="w-3/5">
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 gap-2 grid grid-cols-3">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">PO_No</label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      PO_Line_No
                    </label>
                    <div className="w-3/5">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      Vendor_CAT
                    </label>
                    <div className="flex items-center gap-2 w-3/5">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <input
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Vendor</label>
                  <div className="flex gap-2 items-center w-4/6">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5">PO_Person</label>
                  <div className="w-3/5 flex gap-2">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 items-center gap-2 grid grid-cols-3">
                  <div className="col-span-2 items-center gap-2 flex">
                    <label className="font-medium text-xs w-3/12">
                      PO_Item
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="font-medium text-xs">PO_Mate</label>
                    <div>
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="h-6 w-6" />
                    </div>
                    <label className="font-medium text-xs">Mate_Docu</label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <label className="font-medium text-xs w-2/6">PO_Qty</label>
                  <div className="w-4/6 flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-1/2"
                      />
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <label className="w-2/5 font-medium text-xs">PO_Date</label>
                  <div className="w-3/5">
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 gap-2 flex items-center">
                  <label className="font-medium text-xs">Req_Date</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Cont_Date</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 gap-2 flex items-center">
                  <label className="font-medium text-xs">Rec_Date</label>
                  <div>
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Rec_Qty </label>
                  <div>
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Re_Qty</label>
                  <div>
                    <input
                      type="text"
                      className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5">Price_CD</label>
                  <div className="w-3/5 flex items-center gap-2">
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-1/2"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <label className="font-medium text-xs">Price</label>
                  <div className="w-full">
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Cancel_Date</label>
                  <div className="w-full">
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <label className="font-medium text-xs">PO_Remark</label>
                  <div className="w-full">
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-12 gap-2 mx-5 py-4">
            <div>
              <label className="font-bold">List</label>
            </div>
            <div className="col-span-11 grid grid-cols-1 items-center">
              <div className="flex gap-2 mb-3 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs">Now_Ctl</label>
                  <div>
                    <input
                      type="text"
                      className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs">
                    List_View_W(22.8~40cm)
                  </label>
                  <div>
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs">
                    List_View_H(3~15cm)
                  </label>
                  <div>
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-700 w-28 h-8 rounded-lg cursor-pointer">
                    <label className="text-white font-medium text-sm cursor-pointer">
                      Chang_View
                    </label>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-5">
            <table className="border-2 border-black w-full table-fixed">
              <thead className="">
                <tr>
                  <th className="py-3 bg-white border-2 border-black">Orc</th>
                  <th className="py-3 bg-white border-2 border-black">Pc</th>
                  <th className="py-3 bg-white border-2 border-black">
                    PO_Item
                  </th>
                  <th className="py-3 bg-white border-2 border-black">
                    PO_Material
                  </th>
                  <th className="py-3 bg-white border-2 border-black">
                    PO_Dat
                  </th>
                  <th className="py-3 bg-white border-2 border-black">
                    Req_Date
                  </th>
                  <th className="py-3 bg-white border-2 border-black">
                    Conf_Date
                  </th>
                  <th className="py-3 bg-white border-2 border-black">
                    Rec_Date
                  </th>
                  <th className="py-3 bg-white border-2 border-black">
                    Vendor_CAT
                  </th>
                  <th className="py-3 bg-white border-2 border-black">
                    Vendor_CD
                  </th>
                  <th className="py-3 bg-white border-2 border-black">Pc_Ma</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                </tr>
                <tr>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                </tr>
                <tr>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                </tr>
                <tr>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                </tr>
                <tr>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                </tr>
                <tr>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                </tr>
                <tr>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                  <td className="py-3 bg-white border-2 border-black"></td>
                </tr>
              </tbody>
            </table>
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
                  List <br />一 覽 (F7)
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
