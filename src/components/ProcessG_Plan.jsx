import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io"

export default function ProcessG_Plan() {
  return (
<div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div>
            <div className="flex justify-center items-center py-3">
                <label className="text-xl font-bold">ProcessG_Plan</label>
            </div>
            <hr />
            <div className="mx-5 p-4 grid grid-cols-2 gap-2">
                <div className="w-full">
                    <div>
                        <label className="font-medium text-xs">Target_ProG_Setting</label>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                        <label className="font-medium text-xs">Please Select ProcessG</label>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="h-6 w-6" />
                            <label className="font-medium text-xs">Check_Only</label>
                        </div>
                    </div>
                    <table className="border-2 border-black w-full">
                        <thead className="">
                            <tr>
                                <th className="py-3 bg-white border-2 border-black">List</th>
                                <th className="py-3 bg-white border-2 border-black">ProcessG_CD</th>
                                <th className="py-3 bg-white border-2 border-black">ProcessG_Man</th>
                                <th className="py-3 bg-white border-2 border-black">ProcessG_Name</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                            <tr>
                                <td className="py-3 bg-white border-2 border-black">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                                <td className="py-3 bg-white border-2 border-black"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="grid grid-cols-2 mt-4">
                        <div className="flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 w-28 h-10 rounded-lg">
                                <label className="text-white font-semibold">Default</label>
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 w-28 h-10 rounded-lg">
                                <label className="text-white font-semibold">Clear</label>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Sort</label>
                            <div className="w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-auto items-center flex">
                                <input type="checkbox" className="w-6 h-6" />
                            </div>
                            <div className="w-full items-center">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Print_Object</label>
                            <div className="w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-auto items-center flex">
                                <input type="checkbox" className="w-6 h-6" />
                            </div>
                            <div className="w-full items-center">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Mrk_Days</label>
                            <div className="w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-auto items-center flex">
                                <input type="checkbox" className="w-6 h-6" />
                            </div>
                            <div className="w-full items-center">
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Od_Pending</label>
                            <div className="w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Pt_Pending</label>
                            <div className="w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Customer1</label>
                            <div className="w-3/5 flex gap-2">
                                <div className="w-1/2">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Cus_Name1</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Customer2</label>
                            <div className="w-3/5 flex gap-2">
                                <div className="w-1/2">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Cus_Name2</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Customer3</label>
                            <div className="w-3/5 flex gap-2">
                                <div className="w-1/2">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Cus_Name3</label>
                            <div className="w-3/5">
                                <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center mb-3">
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Not Customer</label>
                            <div className="w-3/5 flex gap-2">
                                <div className="w-1/2">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs w-2/5 text-end">Item1</label>
                            <div className="w-3/5 flex gap-2">
                                <div className="w-1/2">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <input type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-9 gap-2 mb-3">
                        <div className="col-span-2 text-end">
                            <label className="font-medium text-xs">Order_Progress</label>
                        </div>
                        <div className="col-span-3">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-span-1 text-center">
                            <label className="font-bold">~</label>
                        </div>
                        <div className="col-span-3">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-9 gap-2 mb-3">
                        <div className="col-span-2 text-end">
                            <label className="font-medium text-xs">Plan_Progress</label>
                        </div>
                        <div className="col-span-3">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-span-1 text-center">
                            <label className="font-bold">~</label>
                        </div>
                        <div className="col-span-3">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-9 gap-2 mb-3">
                        <div className="col-span-2 text-end">
                            <label className="font-medium text-xs">Plan_Progress</label>
                        </div>
                        <div className="col-span-3">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-span-1 text-center">
                            <label className="font-bold">~</label>
                        </div>
                        <div className="col-span-3">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mb-3">
                        <div className="col-span-3"></div>
                        <div className="col-span-1 text-end">
                            <label className="font-medium text-xs">Parts_No</label>
                        </div>
                        <div className="col-span-3">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                        <div className="col-span-1 text-center">
                            <label className="font-bold text-base">~</label>
                        </div>
                        <div className="col-span-3">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mb-3">
                        <div className="col-span-3"></div>
                        <div className="col-span-4 flex items-center gap-2">
                            <div>
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <label className="font-medium text-xs">Days_Before</label>
                        </div>
                        <div className="col-span-1 text-center">
                            <label className="font-bold text-base">~</label>
                        </div>
                        <div className="col-span-3 flex items-center gap-2">
                            <div>
                                <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                            <label className="font-medium text-xs">Days_After</label>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mb-3">
                        <div className="col-span-3"></div>
                        <div className="col-span-1 text-end">
                            <label className="font-medium text-xs">Plan_Date</label>
                        </div>
                        <div className="col-span-3">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                        <div className="col-span-1 text-center">
                            <label className="font-bold text-base">~</label>
                        </div>
                        <div className="col-span-3">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mb-3">
                        <div className="col-span-3"></div>
                        <div className="col-span-1 flex justify-end items-center">
                            <input type="checkbox" className="w-6 h-6" />
                        </div>
                        <div className="col-span-3">
                            <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-3"></div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mb-3">
                        <div className="col-span-2"></div>
                        <div className="col-span-2 text-end">
                            <label className="font-medium text-xs">Result_Date</label>
                        </div>
                        <div className="col-span-3">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                        <div className="col-span-1 text-center">
                            <label className="font-bold text-base">~</label>
                        </div>
                        <div className="col-span-3">
                            <input type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mb-3">
                        <div className="col-span-1"></div>
                        <div className="col-span-2 text-end">
                            <label className="font-medium text-xs">TG_ProcessG</label>
                        </div>
                        <div className="col-span-9">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mb-3">
                        <div className="col-span-1"></div>
                        <div className="col-span-2 text-end">
                            <label className="font-medium text-xs">TG_Process</label>
                        </div>
                        <div className="col-span-9">
                            <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 items-center mb-3">
                        <div className="col-span-6"></div>
                        <div className="col-span-3">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" className="h-6 w-6" />
                                <label className="font-medium text-xs">ProcessG List View</label>
                            </div>
                        </div>
                        <div className="col-span-3"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 items-center mb-3">
                        <div className="col-span-6"></div>
                        <div className="col-span-3">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" className="h-6 w-6" />
                                <label className="font-medium text-xs">ProcessG Graph View</label>
                            </div>
                        </div>
                        <div className="col-span-3"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-2"></div>
                        <div className="col-span-7 flex justify-start items-center gap-2">
                            <input type="checkbox" className="h-6 w-6" />
                            <input type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            <label className="font-medium text-xs">Settles_Day</label>
                        </div>
                        <div className="col-span-3"></div>
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
                            Setting  <br />
                            設定 (F2)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Show  <br />
                            照会 (F3)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Target  <br />
                            対象 (F4)
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Product  <br />
                            部門 (F5)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Calc  <br />
                            生産 (F6)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            List <br />
                            一 覽 (F7)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            Data  <br />
                            データ (F8)
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            <label className="flex justify-center items-center"><IoIosArrowRoundForward className="font-medium text-2xl" /> CSV </label>
                            (F9)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                            (F10)
                        </button>
                        <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                            Clear  <br />
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
  )
}