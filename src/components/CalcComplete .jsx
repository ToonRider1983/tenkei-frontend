import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default function CalcComplete() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div className="flex justify-center items-center py-3">
          <label className="text-xl font-bold">Calc Complete</label>
        </div>
        <hr />
        <div className="flex justify-between items-center gap-2 mx-5 py-4">
          <div className="flex gap-2 items-center">
            <div>
              <input
                type="text"
                className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              />
            </div>
            <label className="font-medium text-xs">
              lblAction_Pd_Remark_LBL
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <input
                type="text"
                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              />
            </div>
            <label className="font-medium text-xs">
              lblAction_Pd_Remark_LBL
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <input
                type="text"
                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              />
            </div>
            <label className="font-medium text-xs">
              lblAction_Shipment_Date_LBL
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-medium text-xs">
              lblAction_Pd_Calc_Date_LBL
            </label>
            <div className="flex">
              <div className="w-5/12">
                <input
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-2/12">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-1/12">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-4/12">
                <input
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 items-center mx-5">
          <div></div>
          <div className="flex gap-2 items-center col-span-2">
            <label className="font-medium text-xs">Calc Date</label>
            <div className="w-3/5">
              <input
                type="text"
                className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center col-span-2">
            <label className="font-medium text-xs">Input Date</label>
            <div className="w-3/5">
              <input
                type="text"
                className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
