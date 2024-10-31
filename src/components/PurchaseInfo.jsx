import React from "react";
import { useLocation } from "react-router-dom";

export default function PurchaseInfo() {
  const location = useLocation(); // รับค่า state ที่ถูกส่งมา
  const { searchOrderNo } = location.state || {}; // ตรวจสอบว่า state ถูกส่งมาแล้ว

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-wrap justify-between items-center gap-2 mx-5 py-4">
        {/* Search Order No Section */}
        <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto">
          <label className="font-medium text-xs">Search_Order_No</label>
          <div className="w-full sm:w-3/5">
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

        {/* Search Poln No Section */}
        <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto">
          <label className="font-medium text-xs">Search_Poln_No</label>
          <div className="w-full sm:w-3/5">
            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="w-full sm:w-3/5">
            <input
              type="text"
              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>
        </div>

        {/* Search OdPoln No Section */}
        <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto">
          <label className="font-medium text-xs">Search_OdPoln_No</label>
          <div className="w-full sm:w-3/5">
            <input
              type="text"
              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>
        </div>
      </div>


      <hr className="border-y-[1px] border-gray-300" />

      <div className="grid grid-cols-1 gap-2 mx-5 py-4">

        <div>
          <label className="font-bold">Order_Info</label>
        </div>

        <div className="col-span-11 grid grid-cols-1 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-3">
            {/* Product Group Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/6">Product_Grp</label>
              <div className="w-full sm:w-2/6">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-full sm:w-2/6">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>

            {/* Od Pending, Control Person, and Sales Person Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Od Pending */}
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-6 w-6" />
                <label className="font-medium text-xs">Od_Pending</label>
              </div>

              {/* Control Person */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Ctl_Person</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* Sales Person */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Sales_Person</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Specific Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/6">Specific</label>
              <div className="w-full sm:w-2/6">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-full sm:w-2/6">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-3">
            {/* Received Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/5">Received</label>
              <div className="w-full sm:w-3/5">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>

            {/* Customer, Qty, and Price Sections */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Customer Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/6">Customer</label>
                <div className="w-full sm:w-2/6">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="w-full sm:w-2/6">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* Quantity Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/6">Qty</label>
                <div className="w-full sm:w-2/6">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="w-full sm:w-2/6">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* Price and Supply Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-1/4">Price</label>
                <div className="w-full sm:w-1/4">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="w-full sm:w-1/4">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <label className="font-medium text-xs w-full sm:w-1/4">Supply</label>
                <div className="w-full sm:w-1/4">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/6">Progress</label>
              <div className="w-full sm:w-2/6">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff00] w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-full sm:w-2/6">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-3">
            {/* Request Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/5">Request</label>
              <div className="w-full sm:w-3/5">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>

            {/* Product, Req3, and Detail Sections */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
              {/* Product Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Product</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* Req3 and Coating Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs">Req3</label>
                <div className="w-full sm:w-1/3">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <label className="font-medium text-xs">Coating</label>
                <div className="w-full sm:w-1/3">
                  <input
                    type="text"
                    className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* Detail Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Detail</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/6">Delivery</label>
              <div className="w-full sm:w-2/6">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-full sm:w-2/6">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-3">
            {/* Product Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/5">Product</label>
              <div className="w-full sm:w-3/5">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>

            {/* Size, Mate1, and P_Docu Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
              {/* Size Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Size</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* Mate1 Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Mate1</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* P_Docu Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">P_Docu</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Target Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/6">Target</label>
              <div className="w-full sm:w-2/6">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-full sm:w-2/6">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-3">
            {/* Confirm Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/5">Confirm</label>
              <div className="w-full sm:w-3/5">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>

            {/* Draw, Mate2, S_Docu Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
              {/* Draw Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Draw</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* Mate2 Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">Mate2</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              {/* S_Docu Section */}
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="font-medium text-xs w-full sm:w-2/5">S_Docu</label>
                <div className="w-full sm:w-3/5">
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Pd_Complete Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-2/6">Pd_Complete</label>
              <div className="w-full sm:w-4/6">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-y-[1px] border-gray-300" />

      <div className="grid grid-cols-1 gap-2 mx-5 py-4">
        <div>
          <label className="font-bold">Purchase_Info</label>
        </div>

        <div className="col-span-11 grid grid-cols-1 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-3">
            <div className="col-span-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div className="col-span-4 sm:col-span-2 flex items-center gap-2">
                <label className="font-medium text-xs w-1/3 sm:w-1/5">
                  OfPch_No
                </label>
                <div className="w-2/3 sm:w-4/5">
                  <input
                    type="text"
                    className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="col-span-4 sm:col-span-1 flex gap-2 items-center">
                <label className="font-medium text-xs w-1/3 sm:w-2/5">
                  Req_Date
                </label>
                <div className="w-2/3 sm:w-3/5">
                  <input
                    type="text"
                    className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="col-span-4 sm:col-span-1 flex gap-2 items-center">
                <label className="font-medium text-xs w-1/3 sm:w-2/5">
                  Upd_Date
                </label>
                <div className="w-2/3 sm:w-3/5">
                  <input
                    type="text"
                    className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-xs w-full sm:w-1/4">
                PO_Progress
              </label>
              <div className="w-full sm:w-1/4">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-full sm:w-1/4">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-3">
            <div className="flex gap-2 items-center col-span-5 sm:col-span-2">
              <label className="font-medium text-xs w-1/3">Order_No</label>
              <div className="w-2/3">
                <input
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>

            <div className="col-span-5 sm:col-span-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div className="flex gap-2 items-center">
                <label className="font-medium text-xs w-1/3">PO_No</label>
                <div className="w-2/3">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <label className="font-medium text-xs w-1/3">PO_Line_No</label>
                <div className="w-2/3">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <label className="font-medium text-xs w-1/3">Vendor_CAT</label>
                <div className="flex items-center gap-2 w-2/3">
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
              <div className="flex gap-2 items-center">
                <label className="font-medium text-xs w-1/3">Vendor</label>
                <div className="flex gap-2 items-center w-2/3">
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
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-3">
            <div className="flex gap-2 items-center col-span-5 sm:col-span-2">
              <label className="font-medium text-xs w-1/3">PO_Person</label>
              <div className="w-2/3 flex gap-2">
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

            <div className="col-span-5 sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="flex items-center gap-2 col-span-2">
                <label className="font-medium text-xs w-1/3">PO_Item</label>
                <div className="w-2/3">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">PO_Mate</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                  <div className="flex items-center">
                    <input type="checkbox" className="h-5 w-5" />
                    <label className="font-medium text-xs ml-1">Mate_Docu</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-5 sm:col-span-2">
              <label className="font-medium text-xs w-1/3">PO_Qty</label>
              <div className="flex gap-1 items-center w-2/3">
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
            </div>

            <div className="flex items-center w-full mt-2">
              <input
                type="text"
                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                placeholder="Additional Info"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 mb-3">
            <div className="flex items-center gap-2 col-span-5 sm:col-span-2">
              <label className="w-1/3 font-medium text-xs">PO_Date</label>
              <div className="w-2/3">
                <input
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-3 grid grid-cols-1 sm:grid-cols-5 gap-2">
              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">Req_Date</label>
                <div className="flex gap-2 items-center w-full">
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
              </div>
              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">Cont_Date</label>
                <div className="flex gap-2 items-center w-full">
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
              </div>
              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">Rec_Date</label>
                <div className="w-full">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">Rec_Qty</label>
                <div className="w-full">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">Re_Qty</label>
                <div className="w-full">
                  <input
                    type="text"
                    className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-3">
            <div className="flex items-center gap-2 col-span-5 sm:col-span-2">
              <label className="font-medium text-xs w-1/3">Price_CD</label>
              <div className="w-2/3 flex items-center gap-2">
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
            <div className="col-span-5 sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">Price</label>
                <div className="w-full">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label className="font-medium text-xs">Cancel_Date</label>
                <div className="w-full">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
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
      </div>

      <hr className="border-y-[1px] border-gray-300" />

      <div className="grid grid-cols-12 gap-2 mx-5 py-4">
        <div className="col-span-12">
          <label className="font-bold text-lg">List</label>
        </div>
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-4 gap-2 items-center">
          <div className="flex gap-2 items-center">
            <label className="font-medium text-xs">Now_Ctl</label>
            <input
              type="text"
              className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label className="font-medium text-xs">List_View_W (22.8~40cm)</label>
            <input
              type="text"
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label className="font-medium text-xs">List_View_H (3~15cm)</label>
            <input
              type="text"
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 w-28 h-8 rounded-lg cursor-pointer">
              <span className="text-white font-medium text-sm">Chang_View</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-5 overflow-x-auto">
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
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
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
  );
}
