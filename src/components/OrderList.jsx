import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FaCircle, FaSquareFull } from "react-icons/fa6"
import { IoIosArrowRoundForward } from "react-icons/io"
import { MdStarRate } from "react-icons/md"
import { useOrder } from "../hooks/use-order";

export default function OrderList() {
    const {
        orderData,
        setOrderData,
      } = useOrder();

      const [formState, setFormState] = useState({
        targetYear: false,
        targetMonth: false,
        orderNo: false,
        navName: false,
        productName: true,
        navSize: false,
        productSize: false,
        customerDraw: false,
        companyDraw: false,
        productDraw: false,
        slInstructions: false,
        pdInstructions: false,
        pdRemark: false,
        iRemark: false,
        stPdGrpCD: true,
        stPdGrpAbb: true,
        edPdGrpCD: true,
        edPdGrpAbb: true,
        noPdGrpCD1: true,
        noPdGrpAbb1: true,
        noPdGrpCD2: true,
        noPdGrpAbb2: true,
        priceCD: false,
        priceName: false,
        customerCD1: true,
        customerAbb1: true,
        customerCD2: true,
        customerAbb2: true,
        customerCD3: true,
        customerAbb3: true,
        noCustomerCD: true,
        noCustomerAbb: true,
        customerName1: false,
        customerName2: false,
        customerName3: false,
        specificCD1: true,
        specificName1: true,
        specificCD2: true,
        specificName2: true,
        noSpecificCD1: true,
        noSpecificName1: true,
        noSpecificCD2: true,
        noSpecificName2: true,
        coatingCD1: true,
        coatingName1: true,
        coatingCD2: true,
        coatingName2: true,
        coatingCD3: true,
        coatingName3: true,
        noCoatingCD: true,
        noCoatingName: true,
        odCtlPersonCD: true,
        odCtlPersonName: true,
        slGrpCD: true,
        slGrpName: true,
        slPersonCD: true,
        slPersonName: true,
        request1CD: false,
        request1Name: false,
        request2CD: false,
        request2Name: false,
        request3CD: false,
        request3Name: false,
        odNoOfCustom: false,
        item1CD: true,
        item1Name: true,
        item2CD: false,
        item2Name: false,
        item3CD: false,
        item3Name: false,
        item4CD: false,
        item4Name: false,
        material1: false,
        material2: false,
        material3: false,
        material4: false,
        material5: false,
        odPending: false,
        tempShipment: false,
        unreceived: false,
        odCAT1: false,
        odCAT2: false,
        odCAT3: false,
        stOdProgressCD: true,
        edOdProgressCD: true,
        stDeliveryCD: false,
        edDeliveryCD: false,
        stScheduleCD: false,
        edScheduleCD: false,
        stTargetCD: false,
        edTargetCD: false,
        stRequestDelivery: false,
        edRequestDelivery: false,
        stNAVDelivery: false,
        edNAVDelivery: false,
        stConfirmDelivery: false,
        edConfirmDelivery: false,
        stProductDelivery: true,
        edProductDelivery: true,
        stPdReceivedDate: false,
        edPdReceivedDate: false,
        stPdCompleteDate: false,
        edPdCompleteDate: false,
        stICompleteDate: true,
        edICompleteDate: true,
        stShipmentDate: false,
        edShipmentDate: false,
        stCalcDate: true,
        edCalcDate: true,
        stCalcProcessDate: true,
        edCalcProcessDate: true,
        stPlProcessDate: true,
        edPlProcessDate: true,
      });
    
      const initialItem = (kyoka) => {
        if (kyoka) {
          setFormState((prevState) => ({
            ...prevState,
            // เปิดฟิลด์ที่ต้องการ
          }));
        } else {
          setFormState((prevState) => ({
            ...prevState,
            // ปิดฟิลด์ที่ต้องการ
          }));
        }
      };
    
      const enableFields = (fieldNames) => {
        setFormState((prevState) => {
          const updatedFields = { ...prevState };
          fieldNames.forEach((field) => (updatedFields[field] = true));
          return updatedFields;
        });
      };
    
      const disableFields = (fieldNames) => {
        setFormState((prevState) => {
          const updatedFields = { ...prevState };
          fieldNames.forEach((field) => (updatedFields[field] = false));
          return updatedFields;
        });
      };
    
      const Search_Type_AfterUpdate = (searchType) => {
        // ปิดฟิลด์ตามที่เลือก
        if (searchType === 'Simple') {
          initialItem(true); // เปิดฟิลด์ที่ต้องการ
          disableFields([
            'orderNo', 'navName', 'navSize', 'productSize', 'customerDraw', 'companyDraw',
            'productDraw', 'slInstructions', 'pdInstructions', 'pdRemark', 'iRemark', 
            'priceCD', 'priceName', 'customerName1', 'customerName2', 'customerName3',
            'request1CD', 'request1Name', 'request2CD', 'request2Name', 'request3CD',
            'request3Name', 'odNoOfCustom', 'item2CD', 'item2Name', 'item3CD', 'item3Name',
            'material1', 'material2', 'material3', 'material4', 'material5', 'odPending', 
            'tempShipment', 'unreceived', 'odCAT1', 'odCAT2', 'odCAT3', 'stDeliveryCD', 
            'edDeliveryCD', 'stScheduleCD', 'edScheduleCD', 'stTargetCD', 'edTargetCD',
            'stRequestDelivery', 'edRequestDelivery', 'stNAVDelivery', 'edNAVDelivery',
            'stConfirmDelivery', 'edConfirmDelivery', 'stPdReceivedDate', 'edPdReceivedDate', 
            'stPdCompleteDate', 'edPdCompleteDate', 'stShipmentDate', 'edShipmentDate'
          ]);
          disableFields([
            'navName', 'navSize', 'productSize', 'customerDraw', 'companyDraw',
            'productDraw', 'slInstructions', 'pdInstructions', 'pdRemark', 'iRemark', 
            'priceCD', 'priceName', 'customerName1', 'customerName2', 'customerName3',
            'request1CD', 'request1Name', 'request2CD', 'request2Name', 'request3CD',
            'request3Name', 'odNoOfCustom', 'item2CD', 'item2Name', 'item3CD', 'item3Name',
            'material1', 'material2', 'material3', 'material4', 'material5', 'odPending', 
            'tempShipment', 'unreceived', 'odCAT1', 'odCAT2', 'odCAT3', 'stDeliveryCD', 
            'edDeliveryCD', 'stScheduleCD', 'edScheduleCD', 'stTargetCD', 'edTargetCD',
            'stRequestDelivery', 'edRequestDelivery', 'stNAVDelivery', 'edNAVDelivery',
            'stConfirmDelivery', 'edConfirmDelivery', 'stPdReceivedDate', 'edPdReceivedDate', 
            'stPdCompleteDate', 'edPdCompleteDate', 'stShipmentDate', 'edShipmentDate'
          ]);
        } else if (searchType === 'Normal') {
          initialItem(true);
          enableFields([
            'orderNo', 'pdInstructions', 'pdRemark', 'customerName1', 'customerName2',
            'customerName3', 'request3CD', 'request3Name', 'odPending', 'tempShipment',
            'unreceived', 'odCAT1', 'odCAT2', 'odCAT3', 'stTargetCD', 'edTargetCD',
            'stRequestDelivery', 'edRequestDelivery', 'stNAVDelivery', 'edNAVDelivery',
            'stConfirmDelivery', 'edConfirmDelivery'
          ]);
          disableFields([
            // ฟิลด์ที่ต้องการปิดเมื่อเลือก Simple
            'navName', 'navSize', 'productSize', 'customerDraw', 'companyDraw',
            'productDraw', 'slInstructions', 'pdInstructions', 'pdRemark', 'iRemark', 
            'priceCD', 'priceName', 'customerName1', 'customerName2', 'customerName3',
            'request1CD', 'request1Name', 'request2CD', 'request2Name', 'request3CD',
            'request3Name', 'odNoOfCustom', 'item2CD', 'item2Name', 'item3CD', 'item3Name',
            'material1', 'material2', 'material3', 'material4', 'material5', 'odPending', 
            'tempShipment', 'unreceived', 'odCAT1', 'odCAT2', 'odCAT3', 'stDeliveryCD', 
            'edDeliveryCD', 'stScheduleCD', 'edScheduleCD', 'stTargetCD', 'edTargetCD',
            'stRequestDelivery', 'edRequestDelivery', 'stNAVDelivery', 'edNAVDelivery',
            'stConfirmDelivery', 'edConfirmDelivery', 'stPdReceivedDate', 'edPdReceivedDate', 
            'stPdCompleteDate', 'edPdCompleteDate', 'stShipmentDate', 'edShipmentDate'
          ]);
        } else if (searchType === 'Detail') {
          initialItem(true);
          enableFields([
            'orderNo', 'navName', 'navSize', 'productSize', 'customerDraw', 'companyDraw',
            'productDraw', 'slInstructions', 'pdInstructions', 'pdRemark', 'iRemark', 
            'priceCD', 'priceName', 'customerName1', 'customerName2', 'customerName3',
            'request1CD', 'request1Name', 'request2CD', 'request2Name', 'request3CD',
            'request3Name', 'odNoOfCustom', 'item2CD', 'item2Name', 'item3CD', 'item3Name',
            'material1', 'material2', 'material3', 'material4', 'material5', 'odPending', 
            'tempShipment', 'unreceived', 'odCAT1', 'odCAT2', 'odCAT3', 'stDeliveryCD', 
            'edDeliveryCD', 'stScheduleCD', 'edScheduleCD', 'stTargetCD', 'edTargetCD',
            'stRequestDelivery', 'edRequestDelivery', 'stNAVDelivery', 'edNAVDelivery',
            'stConfirmDelivery', 'edConfirmDelivery', 'stPdReceivedDate', 'edPdReceivedDate', 
            'stPdCompleteDate', 'edPdCompleteDate', 'stShipmentDate', 'edShipmentDate'
          ]);
          disableFields([
            // ฟิลด์ที่ต้องการปิดเมื่อเลือก Normal
            'orderNo', 'pdInstructions', 'pdRemark', 'customerName1', 'customerName2',
            'customerName3', 'request3CD', 'request3Name', 'odPending', 'tempShipment',
            'unreceived', 'odCAT1', 'odCAT2', 'odCAT3', 'stTargetCD', 'edTargetCD',
            'stRequestDelivery', 'edRequestDelivery', 'stNAVDelivery', 'edNAVDelivery',
            'stConfirmDelivery', 'edConfirmDelivery'
          ]);
        }
      };
    
      // Handle change event for Search_Type select
      const handleSearchTypeChange = (event) => {
        const selectedType = event.target.value;
        Search_Type_AfterUpdate(selectedType); 
      };

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div>
            <div className="flex justify-center items-center py-3">
                <label className="text-xl font-bold">Order List</label>
            </div>
            <hr />
            <div className="flex justify-between items-center mx-5 py-4">
                <div className="flex gap-2 items-center">
                    <label className="text-xs font-medium">Search_Type</label>
                    <div className="w-40">
                        <select onChange={handleSearchTypeChange} id="Search_Type" className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                            <option value="Simple">Simple</option>
                            <option value="Normal">Normal</option>
                            <option value="Detail">Detail</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <label className="text-xs font-medium">Plan_Target</label>
                    <div className="w-40">
                        <select  id="Plan_Target" className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-12 mx-5 py-4">
                <div className="flex items-start">
                    <label className="text-xs font-bold">Order_Info_Search</label>
                </div>
                <div className="col-span-11 grid grid-cols-1">
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="font-medium text-xs w-2/5">Format</label>
                            <div className="w-3/5">
                                <select id="Format" className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="Backlog">Backlog</option>
                                    <option value="Calc">Calc</option>
                                    <option value="Final">Final</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Change_Page</label>
                                <div className="w-3/5">
                                    <select id="Change_Page" className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Target_Year</label>
                                <div className="w-3/5">
                                    <input disabled={!formState.targetYear}  id="Target_Year"  type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium w-2/5 text-end">Target_Month</label>
                                <div className="w-3/5">
                                    <select disabled={!formState.targetMonth} id="Target_Month" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Order_Progress</label>
                            <div className="flex gap-2 w-3/5">
                                <select disabled={!formState.stOdProgressCD} id="S_St_Od_Progress_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label>~</label>
                                <select disabled={!formState.edOdProgressCD} id="S_Ed_Od_Progress_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="font-medium text-xs w-2/5">Order_No</label>
                            <div className="w-3/5">
                                <input  disabled={!formState.orderNo} id="S_Order_No" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3">
                            <div>
                            </div>
                            <div>

                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium w-2/5 text-end">Ctl_Person</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.odCtlPersonCD} id="S_Od_Ctl_Person_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.odCtlPersonName}  id="S_Od_Ctl_Person_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Delivery_CAT</label>
                            <div className="flex gap-2 w-3/5">
                                <select disabled={!formState.stDeliveryCD} id="S_St_Delivery_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label>~</label>
                                <select disabled={!formState.edDeliveryCD} id="S_Ed_Delivery_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="font-medium text-xs w-2/5">Nav_Name</label>
                            <div className="w-3/5">
                                <input disabled={!formState.navName} id="S_NAV_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="col-span-2 grid grid-cols-1 gap-2">
                                <div className="w-full flex items-center gap-2">
                                    <label className="text-xs font-medium w-1/5 text-end">Product_Grp</label>
                                    <div className="flex justify-between w-4/5 gap-2">
                                        <select disabled={!formState.stPdGrpCD} id="S_St_Pd_Grp_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.noPdGrpAbb1} id="S_No_Pd_Grp_Abb1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                        <label>~</label>
                                        <select disabled={!formState.edPdGrpCD} id="S_Ed_Pd_Grp_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.edPdGrpAbb}  id="S_Ed_Pd_Grp_Abb" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium w-2/5 text-end">Sales_Grp</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.slGrpCD} id="S_Sl_Grp_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.slGrpName}  id="S_Sl_Grp_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Schedule_CAT</label>
                            <div className="flex gap-2 w-3/5">
                                <select disabled={!formState.stScheduleCD} id="S_St_Schedule_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label>~</label>
                                <select disabled={!formState.edScheduleCD} id="S_Ed_Schedule_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Product_Name</label>
                            <div className="w-3/5">
                                <input disabled={!formState.productName} id="S_Product_Name" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Not_Pd_Grp1</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.noPdGrpCD1} id="S_No_Pd_Grp_CD1" className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.noPdGrpAbb1} id="S_No_Pd_Grp_Abb1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Price_CAT</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.priceCD} id="S_Price_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.priceName} id="S_Price_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Sales_Person</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.slPersonCD} id="S_Sl_Person_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.slPersonName} id="S_Sl_Person_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Target_CAT</label>
                            <div className="flex gap-2 w-3/5">
                                <select disabled={!formState.stTargetCD} id="S_St_Target_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label>~</label>
                                <select disabled={!formState.edTargetCD} id="S_Ed_Target_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">NAV_Size</label>
                            <div className="w-3/5">
                                <input disabled={!formState.navSize} id="S_NAV_Size" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Not_Pd_Grp2</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.noPdGrpCD2} id="S_No_Pd_Grp_CD2" className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.noPdGrpAbb2} id="S_No_Pd_Grp_Abb2" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 flex gap-2 items-center">
                                <label className="text-xs font-medium">Request_CAT</label>
                                <div className="w-2/12">
                                    <select disabled={!formState.request1CD} id="S_Request1_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-2/12">
                                    <input disabled={!formState.request1Name} id="S_Request1_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                                <div className="w-2/12">
                                    <select disabled={!formState.request2CD} id="S_Request2_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-2/12">
                                    <input disabled={!formState.request2Name}  id="S_Request2_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                                <div disabled={!formState.request3CD} id="S_Request3_CD" className="w-2/12">
                                    <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="w-2/12">
                                    <input disabled={!formState.request3Name} id="S_Request3_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Request_Delivery</label>
                            <div className="flex gap-2 w-3/5">
                                <input disabled={!formState.stRequestDelivery} id="S_St_Request_Delivery" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input disabled={!formState.edRequestDelivery} id="S_Ed_Request_Delivery" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Product_Size</label>
                            <div className="w-3/5">
                                <input disabled={!formState.productSize} id="S_Product_Size" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Customer1</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.customerCD1} id="S_Customer_CD1" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.customerAbb1} id="S_Customer_Abb1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="col-span-2 flex justify-end items-center gap-2">
                                    <label className="text-xs font-medium w-auto text-end">Od_No_of_Customer</label>
                                    <div className="w-2/5">
                                        <input disabled={!formState.odNoOfCustom} id="S_Od_No_of_Custom" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Mate1</label>
                                    <div className="w-3/5">
                                        <input disabled={!formState.material1} id="S_Material1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">NAV_Delivery</label>
                            <div className="flex gap-2 w-3/5">
                                <input disabled={!formState.stNAVDelivery} id="S_St_NAV_Delivery" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input disabled={!formState.edNAVDelivery} id="S_Ed_NAV_Delivery" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Cus_Draw_No</label>
                            <div className="w-3/5">
                                <input disabled={!formState.customerDraw} id="S_Customer_Draw" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Customer2</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.customerCD2} id="S_Customer_CD2" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.customerAbb2} id="S_Customer_Abb2" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end">Cus_Name1</label>
                                    <div>
                                        <input disabled={!formState.customerName1} id="S_Customer_Name1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end w-1/5">Item1</label>
                                    <div className="flex gap-2 w-4/5">
                                        <select disabled={!formState.item1CD} id="S_Item1_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.item1Name} id="S_Item1_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Mate2</label>
                                    <div className="w-3/5">
                                        <input disabled={!formState.material2} id="S_Material2" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Confirm_Delivery</label>
                            <div className="flex gap-2 w-3/5">
                                <input  disabled={!formState.stConfirmDelivery} id="S_St_Confirm_Delivery" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input  disabled={!formState.edConfirmDelivery} id="S_Ed_Confirm_Delivery" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Com_Draw_No</label>
                            <div className="w-3/5">
                                <input disabled={!formState.companyDraw} id="S_Company_Draw" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Customer3</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.customerCD3} id="S_Customer_CD3" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.customerAbb3} id="S_Customer_Abb3" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end">Cus_Name2</label>
                                    <div>
                                        <input disabled={!formState.customerName2} id="S_Customer_Name2" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end w-1/5">Item2</label>
                                    <div className="flex gap-2 w-4/5">
                                        <select disabled={!formState.item2CD}  id="S_Item2_CD"  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input  disabled={!formState.item2Name}  id="S_Item2_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Mate3</label>
                                    <div className="w-3/5">
                                        <input disabled={!formState.material3} id="S_Material3" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Product_Delivery</label>
                            <div className="flex gap-2 w-3/5">
                                <input disabled={!formState.stProductDelivery} id="S_St_Product_Delivery" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input disabled={!formState.edProductDelivery} id="S_Ed_Product_Delivery" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Pd_Draw_No</label>
                            <div className="w-3/5">
                                <input disabled={!formState.productDraw}  id="S_Product_Draw" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Note_Customer</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.noCustomerCD} id="S_No_Customer_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.noCustomerAbb} id="S_No_Customer_Abb" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end">Cus_Name3</label>
                                    <div>
                                        <input disabled={!formState.customerName3}  id="S_No_Customer_Name3" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end w-1/5">Item3</label>
                                    <div className="flex gap-2 w-4/5">
                                        <select disabled={!formState.item3CD} id="S_Item3_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.item3Name} id="S_Item3_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Mate4</label>
                                    <div className="w-3/5">
                                        <input disabled={!formState.material4} id="S_Material4" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Product_Received</label>
                            <div className="flex gap-2 w-3/5">
                                <input disabled={!formState.stPdReceivedDate} id="S_St_Pd_Received_Date" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input disabled={!formState.edPdReceivedDate} id="S_Ed_Pd_Received_Date" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Sales_Note</label>
                            <div className="w-3/5">
                                <input disabled={!formState.slInstructions} id="S_Sl_instructions" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Specific1</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.specificCD1} id="S_Specific_CD1" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.specificName1} id="S_Specific_Name1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end">Coating1</label>
                                    <div className="flex gap-2">
                                        <select disabled={!formState.coatingCD1} id="S_Coating_CD1" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.coatingName1} id="S_Coating_Name1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end w-1/5">Item4</label>
                                    <div className="flex gap-2 w-4/5">
                                        <select disabled={!formState.item4CD} id="S_Item4_CD" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.item4Name} id="S_Item4_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Mate5</label>
                                    <div className="w-3/5">
                                        <input disabled={!formState.material5} id="S_Material5" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Product_Complete</label>
                            <div className="flex gap-2 w-3/5">
                                <input disabled={!formState.stPdCompleteDate} id="S_St_Pd_Complete_Date" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input disabled={!formState.edPdCompleteDate} id="S_Ed_Pd_Complete_Date" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Pd_Note</label>
                            <div className="w-3/5">
                                <input disabled={!formState.pdInstructions} id="S_Pd_instructions" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Specific2</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.specificCD2} id="S_Specific_CD2" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.specificName2} id="S_Specific_Name2" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end">Coating2</label>
                                    <div className="flex gap-2">
                                        <select disabled={!formState.coatingCD2} id="S_Coating_CD2" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.coatingName2} id="S_Coating_Name2" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end w-2/5">Od_Pent</label>
                                    <div className="flex gap-2 w-3/5">
                                        <select disabled={!formState.odPending} id="S_Od_Pending" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Od_CAT1</label>
                                    <div className="w-3/5">
                                        <select  disabled={!formState.odCAT1} id="S_Od_CAT1" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">QC_Complete</label>
                            <div className="flex gap-2 w-3/5">
                                <input  disabled={!formState.stICompleteDate} id="S_St_I_Complete_Date" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input  disabled={!formState.edICompleteDate} id="S_Ed_I_Complete_Date" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">Pd_Remark</label>
                            <div className="w-3/5">
                                <input disabled={!formState.pdRemark} id="S_Pd_Remark" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Not_Specific1</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.noSpecificCD1} id="S_No_Specific_CD1" className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.noSpecificName1} id="S_No_Specific_Name1" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end">Coating3</label>
                                    <div className="flex gap-2">
                                        <select disabled={!formState.coatingCD3} id="S_Coating_CD3" className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input  disabled={!formState.coatingName3} id="S_Coating_Name3" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end w-2/5">TempShip</label>
                                    <div className="flex gap-2 w-3/5">
                                        <select disabled={!formState.tempShipment} id="S_Temp_Shipment" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Od_CAT2</label>
                                    <div className="w-3/5">
                                        <select  disabled={!formState.odCAT2} id="S_Od_CAT2" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Shipment_Date</label>
                            <div className="flex gap-2 w-3/5">
                                <input disabled={!formState.stShipmentDate} id="S_St_Shipment_Date" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input disabled={!formState.edShipmentDate} id="S_Ed_Shipment_Date" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="flex gap-2">
                            <label className="text-xs font-medium w-2/5">QC_Remark</label>
                            <div className="w-3/5">
                                <input disabled={!formState.iRemark} id="S_I_Remark" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs w-2/5 text-end">Not_Specific2</label>
                                <div className="flex gap-2 w-3/5">
                                    <select disabled={!formState.noSpecificCD2} id="S_No_Specific_CD2" className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input disabled={!formState.noSpecificName2} id="S_No_Specific_Name2" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end">Not_Coat</label>
                                    <div className="flex gap-2">
                                        <select disabled={!formState.noCoatingCD} id="S_No_Coating_CD" className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <input disabled={!formState.noCoatingName} id="S_No_Coating_Name" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="text-xs font-medium text-end w-2/5">Unrecive</label>
                                    <div className="flex gap-2 w-3/5">
                                        <select disabled={!formState.unreceived} id="S_Unreceived" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="w-2/5 text-xs font-medium text-end">Od_CAT3</label>
                                    <div className="w-3/5">
                                        <select  disabled={!formState.odCAT3} id="S_Od_CAT3" className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">Calc_Date</label>
                            <div className="flex gap-2 w-3/5">
                                <input disabled={!formState.stCalcDate} id="S_St_Calc_Date" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                <input disabled={!formState.edCalcDate} id="S_Ed_Calc_Date" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                        <div className="col-span-4 flex justify-between gap-6">
                            <button className="h-full w-full bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                    Target_Conv1
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                    (
                                    <FaCircle />
                                    <IoIosArrowRoundForward className="text-2xl" />
                                    <MdStarRate />
                                    )
                                </label>
                            </button>
                            <button className="h-full w-full bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                    Target_Conv2
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                    (
                                    <FaSquareFull />
                                    <IoIosArrowRoundForward className="text-2xl" />
                                    <FaCircle />
                                    )
                                </label>
                            </button>
                            <button className="h-full w-full bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                    Target_Conv3
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                    (
                                    Null
                                    <IoIosArrowRoundForward className="text-2xl" />
                                    <FaCircle />
                                    )
                                </label>
                            </button>
                            <button className="h-full w-full bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                    Target_Conv4
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                    (
                                    Null
                                    <IoIosArrowRoundForward className="text-2xl" />
                                    <FaSquareFull />
                                    )
                                </label>
                            </button>
                            <button className="h-full w-full bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                    Target_Conv5
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                    (
                                    <IoIosArrowRoundForward className="text-2xl" />
                                    Null
                                    )
                                </label>
                            </button>
                            <button className="h-full w-full bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                    FG_SUM
                                </label>
                            </button>
                        </div>
                        <div className="gap-2 items-center grid grid-cols-1">
                            <div className="flex gap-2">
                                <label className="text-xs font-medium w-2/5">Cale_Process</label>
                                <div className="flex gap-2 w-3/5">
                                    <input  disabled={!formState.stCalcProcessDate} id="S_St_Calc_Process_Date" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input  disabled={!formState.edCalcProcessDate} id="S_Ed_Calc_Process_Date" type="text" className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <label className="text-xs font-medium w-2/5">Pl_Process_Date</label>
                                <div className="flex gap-2 w-3/5">
                                    <input disabled={!formState.stPlProcessDate} id="S_St_Pl_Process_Date" type="text" className="bg-[#00ffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                    <input disabled={!formState.edPlProcessDate} id="S_Ed_Pl_Process_Date" type="text" className="bg-[#00ffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-12 mx-5 py-4">
                <div className="flex items-start">
                    <label className="text-xs font-bold">List</label>
                </div>
                <div className="col-span-11 grid grid-cols-1">
                    <div className="flex justify-start gap-3 mb-3">
                        <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">Sort1</label>
                            <div className="w-full">
                                <select  id="Sort1" className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">Sort2</label>
                            <div className="w-full">
                                <input id="Sort2" type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">Sort3</label>
                            <div className="w-full">
                                <input id="Sort3" type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center w-3/12">
                            <label className="font-medium text-xs">Sort..</label>
                            <div className="w-full">
                                <input id="Sort" type="text" className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <button className="bg-blue-500 h-full w-2/12 rounded-md hover:bg-blue-700">
                            <label className="text-white">Plan_Result_Data</label>
                        </button>
                    </div>
                    <div className="flex justify-start gap-3 items-center">
                        <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">Select_Od_No</label>
                            <div className="w-full">
                                <input id="Select_Od_No" type="text" className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">Select_Pt_No</label>
                            <div className="w-full">
                                <input id="Select_Pt_No" type="text" className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">List_View_W(22.8~40cm)</label>
                            <div className="w-full">
                                <input id="Od_List_ViewW" type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs w-full">List_View_H(3-15cm)</label>
                            <div className="">
                                <input id="Od_List_ViewH" type="text" className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full" />
                            </div>
                        </div>
                        <button className="bg-blue-500 h-full w-2/12 rounded-md hover:bg-blue-700">
                            <label className="text-white">Change_View</label>
                        </button>
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
  );
}
