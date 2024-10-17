import React from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const CostInfo = () => {
  // Function to handle footer actions
  const handleAction = (action) => {
    console.log(`${action} button clicked`);
    // Add logic for each footer button here
  };

  // Define table headers
  const headers = ["CC", "F", "Process", "MA", "Machine", "MA", "Work", "Work"];

  // Generate table rows with input fields
  const rows = Array.from({ length: 11 }, (_, rowIndex) => (
    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
      {headers.map((_, colIndex) => (
        <td key={colIndex} className="px-4 py-2 border text-sm">
          <input
            type="text"
            className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Cost Info</h1>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
        {/* Flex container to align everything in one line */}
        <div className="flex flex-wrap gap-4 mb-4">
          {/* Search Order No */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <label className="text-xs font-bold">Search Order No.</label>
            <input
              type="text"
              className="bg-blue-200 border border-gray-300 p-1 rounded w-32"
            />
          </div>
          {/* Search Part No */}
          <div className="flex items-center space-x-4 flex-shrink-0 relative">
            <label className="text-xs font-bold">Search Part No.</label>
            <div className="relative w-32">
              <input
                type="text"
                className="bg-blue-200 border border-gray-300 p-1 rounded pl-10 w-full"
              />
              <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                <option value="" disabled hidden>Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Search Cost No */}
          <div className="flex items-center space-x-4 flex-shrink-0 relative">
            <label className="text-xs font-bold">Search Cost No.</label>
            <div className="relative w-32">
              <input
                type="text"
                className="bg-blue-200 border border-gray-300 p-1 rounded pl-10 w-full"
              />
              <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                <option value="" disabled hidden>Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Checkboxes */}
          <div className="flex items-center space-x-2 ml-4">
            <input type="checkbox" id="checkbox1" className="mr-2" />
            <label htmlFor="checkbox1" className="text-sm">Process List View</label>
            <input type="checkbox" id="checkbox2" className="mr-2" />
            <label htmlFor="checkbox2" className="text-sm">Auto Year Change</label>
          </div>
          {/* Additional Info */}
          <div className="flex items-center space-x-4 flex-shrink-0 relative">
            <label className="text-xs font-bold">Search OdPt No.</label>
            <div className="relative w-32">
              <input
                type="text"
                className="bg-white border border-gray-300 p-1 rounded pl-10 w-full"
              />
              <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                <option value="" disabled hidden>Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Order No */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <label className="text-xs font-bold">Search OdPtCs No.</label>
            <input
              type="text"
              className="bg-white border border-gray-300 p-1 rounded w-32"
            />
            <label className="text-xs font-bold">Order No.</label>
            <input
              type="text"
              className="bg-white border border-gray-300 p-1 rounded w-32"
            />
          </div>
        {/* Parts No */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Parts No.</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Cost No.</label>
          <input
            type="text"
            className="bg-pink-200 border border-gray-300 p-1 rounded w-32"
          />
        </div>
        {/* Process No */}
        <div className="flex items-center space-x-4 flex-shrink-0 relative">
          <label className="text-xs font-bold">Process No.</label>
          <div className="relative w-32">
            <input
              type="text"
              className="bg-yellow-200 border border-gray-300 p-1 rounded pl-10 w-full"
            />
            <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
              <option value="" disabled hidden>Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div>
        </div>
        {/* Machine_CD(CMC)*/}
        <div className="flex items-center space-x-4 flex-shrink-0 relative">
          <label className="text-xs font-bold">Machine CD(CMC)</label>
          <div className="relative w-32">
            <input
              type="text"
              className="bg-green-200 border border-gray-300 p-1 rounded pl-10 w-full"
            />
            <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
              <option value="" disabled hidden>Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Machine Time</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div>
        </div>
        {/* Worker_CD(CPT)*/}
        <div className="flex items-center space-x-4 flex-shrink-0 relative">
          <label className="text-xs font-bold">Worker CD(CPT)</label>
          <div className="relative w-32">
            <input
              type="text"
              className="bg-green-200 border border-gray-300 p-1 rounded pl-10 w-full"
            />
            <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
              <option value="" disabled hidden>Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Process Date</label>
          <input
            type="text"
            className="bg-yellow-200 border border-gray-300 p-1 rounded w-32"
          />
        </div>
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Person Time(CPT)</label>
          <input
            type="text"
            className="bg-yellow-200 border border-gray-300 p-1 rounded w-32"
          />
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Process Qty(CPN)</label>
          <input
            type="text"
            className="bg-yellow-200 border border-gray-300 p-1 rounded w-32"
          />
        </div>
        {/* Cost_Progress*/}
        <div className="flex items-center space-x-4 flex-shrink-0 relative">
          <label className="text-xs font-bold">Cost Progress</label>
          <div className="relative w-32">
            <input
              type="text"
              className="bg-yellow-300 border border-gray-300 p-1 rounded pl-10 w-full"
            />
            <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
              <option value="" disabled hidden>Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
          <input
            type="text"
            className="bg-yellow-300 border border-gray-300 p-1 rounded w-32"
          />
        </div>
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Complete Date</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div>
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Complete Qty</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        {/* Checkboxes */}
        <div className="flex items-center space-x-2 ml-4">
            <input type="checkbox" id="checkbox1" className="mr-2" />
            <label htmlFor="checkbox1" className="text-sm">Outside</label>
            <input type="checkbox" id="checkbox2" className="mr-2" />
            <label htmlFor="checkbox2" className="text-sm">Final Complete</label>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">CS Register Date</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div> 
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">CS Modify Date</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div> 
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">Sequence No.</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div> 
        </div>
        <div className="flex items-center space-x-4 mt-4 flex-shrink-0">
          <label className="text-xs font-bold">PR No.</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">ERR No.</label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-1 rounded w-32"
          />
        </div> 
        <div className="flex items-center space-x-4 flex-shrink-0">
          <label className="text-xs font-bold">CS Remark</label>
          <textarea
            type="text"
            className="bg-yellow-200 border border-gray-300 p-1 rounded w-96"
          />
        </div> 
        </div> 
        <div className="flex items-center space-x-4 mt-10 flex-shrink-0">
        <label htmlFor="costListQC" className="items-center text-xs font-bold space-x-4">Cost List QC-FG Comp</label>
        <input
          type="text"
          id="costListQC"
          className="bg-gray-200 border border-gray-300 p-1 rounded w-46"
        />
      </div>
      </div>
      <div className="p-4 flex flex-col items-center">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-xs font-medium text-gray-700 border-b border-gray-300 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
      {/* Footer */}
      <Footer handleAction={handleAction} />
    </div>
    </div>
    </div>
  );
}

export default CostInfo;
