import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function CostList() {
  return (
<div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div>
      <div className="bg-stone-300 grid grid-cols-1">
        <div className="bg-white w-11/12 mt-5 rounded-2xl mx-auto shadow-xl">
          <div className="flex justify-center py-4">
            <label className="text-xl font-bold">Cost List</label>
          </div>
          <hr />
          <div className="flex justify-between items-center mx-5 gap-2 py-2">
            <div className="flex">
              <label className="w-[110px] font-medium">Search_Type</label>
              <div className="w-24">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <label className="w-[110px] font-medium">Delivery</label>
              <div className="w-24">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <label className="w-[110px] font-medium">Delivery2</label>
              <div className="w-24">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <label className="w-[110px] font-medium">Delivery3</label>
              <div className="w-24">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <label className="w-[110px] font-medium">View_Schedule</label>
              <div className="w-24">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <label className="w-[110px] font-medium">Plan_Target</label>
              <div className="w-24">
                <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-12">
            <div className="w-full content-start ms-5 mt-4">
              <label className="font-bold text-sm">Search_Type</label>
            </div>
            <div className="col-span-11 me-5 mt-5">
              <div className="grid grid-cols-12">
                <div className="col-span-9">
                  {/* Group 1 */}
                  <div className="gap-2 flex mb-4 justify-start me-5">
                    <div className="flex gap-2 w-52">
                      <label className="w-24 font-medium text-sm">Format</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Change_Page</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Target</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="gap-2 flex mb-4 items-center justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Order_No</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex w-48">
                      <div className="flex w-24 gap-1 items-center">
                        <div className="w-auto flex me-1">
                          <input type="checkbox" className="w-6 h-6" />
                        </div>
                        <label className="text-xs font-medium">Into_View</label>
                      </div>
                      <div className="flex w-24 gap-1 items-center">
                        <div className="w-auto flex me-1">
                          <input type="checkbox" className="w-6 h-6" />
                        </div>
                        <label className="text-xs font-medium">PI_Colo</label>
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Mark_Days</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-auto gap-2 ms-5">
                      <label className="w-20 font-medium text-sm">Ctl_Person</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 3 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">NAV_Name</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex w-[390px] gap-2">
                      <label className="w-auto font-medium text-sm">Product_Grp</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-auto gap-2 ms-5">
                      <label className="w-20 font-medium text-sm">Sales_grp</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 4 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Product_Name</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-48 gap-2">
                      <label className="w-auto font-medium text-sm">Not_Pd_Grp1</label>
                      <div className="w-20">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-20">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-48 gap-2">
                      <label className="w-auto font-medium text-sm">Price_CAT</label>
                      <div className="w-16">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-16">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-auto gap-2 ms-5">
                      <label className="w-20 font-medium text-sm">Sales_Person</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 5 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">NAV_Size</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-48 gap-2">
                      <label className="w-auto font-medium text-sm">Not_Pd_Grp2</label>
                      <div className="w-16">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-16">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-auto gap-2">
                      <label className="w-auto font-medium text-sm">Request_CAT</label>
                      <div className="w-16">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-16">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <div className="w-16">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-16">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <div className="w-16">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-16">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 6 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="w-1/2 flex gap-2">
                      <div className="flex gap-2 w-48">
                        <label className="w-24 font-medium text-sm">Product_Size</label>
                        <div className="w-24">
                          <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                      </div>
                      <div className="flex justify-between w-52 gap-2 ms-3">
                        <label className="w-auto font-medium text-sm">Customer1</label>
                        <div className="w-28">
                          <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <div className="w-28">
                          <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-end gap-2">
                      <div className="flex gap-2 w-60">
                        <label className="w-24 font-medium text-sm">Order_Progress</label>
                        <div className="w-auto">
                          <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                      </div>
                      <div className="flex gap-2 w-auto">
                        <label className="w-auto font-medium text-sm">Mate1</label>
                        <div className="w-28">
                          <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Group 7 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Cus_Draw_No</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-52">
                      <label className="w-auto font-medium text-sm">Customer2</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Cus_Name1</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Item1</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-auto">
                      <label className="w-auto font-medium text-sm">Mate2</label>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 8 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Com_Draw_No</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-52">
                      <label className="w-auto font-medium text-sm">Customer3</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Cus_Name2</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Item2</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-auto">
                      <label className="w-auto font-medium text-sm">Mate3</label>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 9 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Pd_Draw_No</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-52">
                      <label className="w-auto font-medium text-sm">Not_Customer</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Cus_Name3</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Item3</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-auto">
                      <label className="w-auto font-medium text-sm">Mate4</label>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 10 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Sales_Note</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-52">
                      <label className="w-auto font-medium text-sm">Specific1</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Coating1</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Item4</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-auto">
                      <label className="w-auto font-medium text-sm">Mate5</label>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 11 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Pd_Note</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-52">
                      <label className="w-auto font-medium text-sm">Specific2</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Coating2</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Od_Pent</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-auto">
                      <label className="w-auto font-medium text-sm">Od_CAT1</label>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 12 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">Pd_Remark</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-52">
                      <label className="w-auto font-medium text-sm">Not_Specific1</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Coating3</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">TempShip</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-auto">
                      <label className="w-auto font-medium text-sm">Od_CAT2</label>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 13 */}
                  <div className="gap-2 flex mb-4 justify-between me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-24 font-medium text-sm">QC_Remark</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-52">
                      <label className="w-auto font-medium text-sm">Not_Specitic2</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Not_Coat</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-40">
                      <label className="w-auto font-medium text-sm">Unrecive</label>
                      <div className="w-28">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-auto">
                      <label className="w-auto font-medium text-sm">Od_CAT3</label>
                      <div className="w-28">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  {/* Group 1 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Order_Progress</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Delivery_CAT</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Group 3 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Schedule_CAT</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Group 4 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Target_CAT</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Group 5 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Request_Delivery</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 6 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Nav Delivery</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 7 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Confirm_Delivery</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 8 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Product_Delivery</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 9 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Product_Received</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 10 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Product_Complete</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 11 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">QC_Complete</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 12 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Shipment_Date</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 13 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Cale_Date</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <hr />
          <div className="grid grid-cols-12">
            <div className="w-full content-start ms-5 mt-4">
              <label className="font-bold text-[12px]">Plan_Info_Search</label>
            </div>
            <div className="col-span-11 me-5 mt-5">
              <div className="grid grid-cols-12">
                <div className="col-span-9">
                  {/* Group 1 */}
                  <div className="gap-2 flex mb-4 justify-start me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Parts_No</label>
                      <div className="w-full">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Parts_Pend</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Pt_CAT1</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Pt_CAT2</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Pt_CAT3</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="gap-2 flex mb-4 justify-start me-5">
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Reg_Person</label>
                      <div className="w-full">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Parts_Mate</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Parts_Note</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Pt_Remark</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 w-48">
                      <label className="w-auto font-medium text-sm">Parts_Info</label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  {/* Group 1 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Parts_Delivery</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="mb-4">
                    <div className="flex gap-2 justify-end">
                      <label className="w-28 font-medium text-sm">Pl_Process_Date</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <label className="w-auto font-medium text-sm">~</label>
                      <div className="w-24">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
              Change_View
            </button>
          </div>
        </div>
        <div className="bg-white w-11/12 mt-5 rounded-xl mx-auto p-4 mb-3 shadow-xl">
          <div className="grid grid-cols-3 gap-4">
            <div className="grid grid-cols-4 gap-2">
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Search <br />
                検索 (F1)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Setting <br />
                設定 (F2)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Show <br />
                照会 (F3)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                F4
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                F5
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Target <br />
                対象 (F6)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                List <br />
                一 覽 (F7)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Data <br />
                データ (F8)
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                → CSV <br />
                (F9)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                F10
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                Clear <br />
                クリア (F11)
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
    </div>
  )
}
