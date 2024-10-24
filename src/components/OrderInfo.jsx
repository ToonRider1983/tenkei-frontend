import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../hooks/use-order";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function OrderInfo() {
  const navigate = useNavigate();
  const [searchOrderNo, setSearchOrderNo] = useState("");
  const [OrderNo, setOrderNo] = useState("");
  const [autoYearChange, setAutoYearChange] = useState(false);
  const [requestDelivery, setRequestDelivery] = useState("");
  const [productDelivery, setProductDelivery] = useState("");
  const [confirmDelivery, setconfirmDelivery] = useState("");
  const [navDelivery, setnavDelivery] = useState("");
  const [navName, setNavName] = useState('');
  const [productName, setProductName] = useState('');
  const [navSize, setNavSize] = useState('');
  const [productSize, setProductSize] = useState('');
  const [customerDraw, setCustomerDraw] = useState('');
  const [companyDraw, setCompanyDraw] = useState('');
  const [productDraw, setProductDraw] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pdTargetQty, setPdTargetQty] = useState('');
  const [isOrderNoLocked, setOrderNoLocked] = useState(true);
  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของฟิลด์
  const handleInputChange = (event) => {
    setSearchOrderNo(event.target.value);
    setOrderNo(event.target.value);
  };
  const handleAutoYearChange = (event) => {
    setAutoYearChange(event.target.checked);
  };

  const {
    CustomerData,
    WorkerData,
    WorkergData,
    orderData,
    searchOrderData,
    fetchOrders,
    editOrders,
    fetchWorkerGroups,
    deleteOrder,
    setOrderData,
  } = useOrder();

  // ฟังก์ชันสำหรับตรวจสอบว่าฟิลด์ว่างหรือไม่
  const confirmWhenSaveNull = (fieldName, defaultValue) => {
    const value = document.getElementById(fieldName).value;
    return value !== defaultValue && value.trim() !== "";
  };

  const handleF1Click = () => {
    if (searchOrderNo) {
      // ตรวจสอบว่ามีการกรอกหมายเลขคำสั่งซื้อ
      searchOrderData(searchOrderNo); // เรียกฟังก์ชันค้นหาข้อมูล
    } else {
      // ใช้ SweetAlert 2 แทน alert
      Swal.fire({
        title: "ข้อมูลไม่ถูกต้อง",
        text: "กรุณากรอกหมายเลขคำสั่งซื้อก่อน",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF2Click = () => {
    try {
      // เรียกใช้ฟังก์ชัน Search_Permission
      searchPermission(false);

      // เรียกใช้ฟังก์ชัน Edit_Permission
      editPermission(true);

      const orderNoInput = document.getElementById("Order_No");

      orderNoInput.disabled = true;
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F2_Click\nPlease contact system administrator.");
    }
  };

  const handleF3Click = () => {
    try {
      searchPermission(false);
      editPermission(true);

      toggleButtons(false, true, true, false);
    } catch (error) {
      // จัดการข้อผิดพลาด
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
      console.error("Error in F3_Click:", error); // แสดงข้อผิดพลาดใน Console
    }
  };

  const handleF4Click = () => {
    try {
      // ส่งค่า Search_Order_No ไปที่หน้า /plan-info
      navigate("/purchase-info", { state: { searchOrderNo: searchOrderNo } });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F4_Click\nPlease contact system administrator.");
    }
  };

  const handleF5Click = () => {
    try {
      // ส่งค่า Search_Order_No ไปที่หน้า /plan-info
      navigate("/plan-info", { state: { OrderNo: OrderNo } });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F5_Click\nPlease contact system administrator.");
    }
  };

  const handleF6Click = async () => {
    try {
      // ตรวจสอบว่า OrderNo เป็นค่าว่างหรือไม่
      if (!OrderNo) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Order_No) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        }); // แสดงข้อความเตือนถ้า OrderNo ว่าง
        return; // ออกจากฟังก์ชัน
      }
      // ส่ง OrderNo เป็นพารามิเตอร์ใน URL
      navigate(`/reports/RD_Process_SheetPage/${OrderNo}`, {
        state: { OrderNo },
      });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F6_Click\nPlease contact system administrator.");
    }
  };

  const handleF9Click = async () => {
    try {
      // ตรวจสอบว่าฟิลด์ Order_No ถูกกรอกหรือไม่
      if (!confirmWhenSaveNull("Order_No", "")) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Order_No) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
        return; // ถ้าไม่ถูกกรอกให้หยุดทำงาน
      }

      // ตรวจสอบว่าฟิลด์ Quantity ถูกกรอกหรือไม่
      if (!confirmWhenSaveNull("Quantity", 0)) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Quantity) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
        return; // ถ้าไม่ถูกกรอกให้หยุดทำงาน
      }

      // แสดงกล่องยืนยัน
      const result = await Swal.fire({
        title: "ต้องการบันทึกข้อมูลหรือไม่",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่ใช่",
      });

      if (result.isConfirmed) {
        // ดึงค่าจากฟิลด์ Order_No ที่มี id="Order_No"
        const orderNo = document.getElementById("Order_No").value;

        await editOrders(orderNo);

        // ปิดการแก้ไขสิทธิ์
        editPermission(false);

        // ปิดปุ่ม F9
        document.getElementById("saveButton").disabled = true;
      }
    } catch (error) {
      console.error("Error in handleF9Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาติดต่อผู้ดูแลระบบ",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF10Click = async () => {
    try {
      // แสดงกล่องยืนยันการลบของข้อมูล
      const result = await Swal.fire({
        title: "ยืนยันการลบ?",
        text: "คุณต้องการลบข้อมูลนี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, ลบเลย!",
        cancelButtonText: "ยกเลิก",
      });

      // ตรวจสอบว่าผู้ใช้เลือก "ยืนยัน" หรือไม่
      if (result.isConfirmed) {
        const response = await deleteOrder(searchOrderNo); // เรียกใช้ฟังก์ชันลบคำสั่ง
        console.log("Delete result:", response);

        // แสดงข้อความว่าลบเรียบร้อยแล้ว
        Swal.fire(
          "ลบเรียบร้อย!",
          "ข้อมูลของคุณได้ถูกลบเรียบร้อยแล้ว.",
          "success"
        );
      }
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert(
        "Error occurs when F10_Click\nPlease contact system administrator."
      );
    }
  };
  const handleF11Click = async () => {
    try {
      // ปิดการค้นหาและการแก้ไข
      searchPermission(false);
      editPermission(false);

      // ดึงข้อมูลคำสั่งซื้อจาก API
      const response = await fetchOrders(); // เรียกใช้ fetchOrders เพื่อดึงข้อมูลการสั่งซื้อ

      // ตรวจสอบว่ามีข้อมูลใน response หรือไม่
      if (!response || !response.data || response.data.length === 0) {
        Swal.fire({
          title: "ไม่มีข้อมูลคำสั่งซื้อ",
          icon: "warning",
          confirmButtonText: "ตกลง",
        }); // แจ้งเตือนผู้ใช้ว่าข้อมูลไม่มี
      } else {
        searchPermission(true);
      }
    } catch (error) {
      console.error("Error in handleF11Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      }); // แจ้งเตือนผู้ใช้เกี่ยวกับข้อผิดพลาด
    }
  };



  return (
    <div className="flex-1 overflow-y-auto">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 py-4">
        {/* Search Order No */}
        <div className="flex gap-2 items-center">
          <label htmlFor="Search_Order_No" className="whitespace-nowrap">Search Order No</label>
          <input
            disabled
            id="Search_Order_No"
            value={searchOrderNo}
            onChange={handleInputChange}
            type="text"
            className="bg-[#ccffff] border-2 border-gray-500 rounded-md px-2 w-full"
            placeholder="Search Order Number"
          />
        </div>

        {/* Order No */}
        <div className="flex gap-2 items-center">
          <label htmlFor="Order_No" className="whitespace-nowrap">Order No.</label>
          <input
            disabled={isOrderNoLocked}
            id="Order_No"
            value={OrderNo}
            onChange={handleInputChange}
            type="text"
            className="bg-[#ffff99] border-2 border-gray-500 rounded-md px-2 w-full"
            placeholder="Enter Order Number"
          />
        </div>

        {/* Production Group */}
        <div className="flex gap-2 items-center">
          <label htmlFor="Product_Grp_CD" className="whitespace-nowrap">Production Group</label>
          <select
            disabled
            id="Product_Grp_CD"
            className="border-2 border-gray-500 rounded-md bg-white px-2 w-full"
          >
            {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
              WorkerData.map((worker) => (
                <option key={worker.WorkG_CD} value={worker.WorkG_CD}>
                  {worker.WorkG_CD}
                </option>
              ))
            ) : (
              <option value="">No Worker Groups Available</option>
            )}
          </select>

          <input
            disabled
            id="Product_Grp_Input"
            type="text"
            className="bg-white border-2 border-gray-500 rounded-md px-2 w-full"
            placeholder="Enter Group"
          />
        </div>

        {/* Auto Year Change */}
        <div className="flex gap-2 items-center col-span-1 ">
          <input
            id="Auto_Year_Change"
            checked={autoYearChange}
            onChange={() => setAutoYearChange(!autoYearChange)}
            type="checkbox"
            className="w-6 h-6"
          />
          <label htmlFor="Auto_Year_Change" className="whitespace-nowrap">Auto Year Change Group</label>
        </div>
      </div>

      <hr className="border-y-[1px] border-gray-300" />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-5 py-4">
        <div className="grid grid-cols-1">
          <div className="flex gap-1">

            <div className="w-7/12 content-around">
              {/* Request Delivery Date Group */}
              <div className="flex items-center mb-8">
                <label className="w-4/6 text-xs font-semibold">
                  Request Delivery Date
                </label>
                <div>
                  <input
                    disabled
                    id="Request_Delivery"
                    value={requestDelivery}
                    onChange={handleRequestDeliveryChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center mb-8">
                <label className="w-4/6 text-xs font-semibold">
                  Production Delivery Date
                </label>
                <div>
                  <input
                    disabled
                    value={productDelivery}
                    onChange={(e) => setProductDelivery(e.target.value)}
                    id="Product_Delivery"
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center mb-8  ">
                <label className="w-4/6 text-xs font-semibold">
                  Comfirm Delivery Date
                </label>
                <div>
                  <input
                    disabled
                    id="Confirm_Delivery"
                    value={confirmDelivery}
                    onChange={(e) => setconfirmDelivery(e.target.value)}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label className="w-4/6 text-xs font-semibold">
                  NAV Delivery Date
                </label>
                <div>
                  <input
                    disabled
                    id="NAV_Delivery"
                    value={navDelivery}
                    onChange={(e) => setnavDelivery(e.target.value)}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-5/12 content-around">
              <div className="flex items-center mb-3 gap-2">
                <input
                  disabled
                  id="Od_Pending"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label className="w-3/5 text-xs font-semibold">
                  Order Pending
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
                <input
                  disabled
                  id="Temp_Shipment"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label className="w-3/5 text-xs font-semibold">
                  Temporary Shipment
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
                <input
                  disabled
                  id="Unreceived"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label className="w-3/5 text-xs font-semibold">
                  Unreceived
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
                <input
                  disabled
                  id="Od_CAT1"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label className="w-3/5 text-xs font-semibold">
                  Order Identification1
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
                <input
                  disabled
                  id="Od_CAT2"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label className="w-3/5 text-xs font-semibold">
                  Order Identification2
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  disabled
                  id="Od_CAT3"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label className="w-3/5 text-xs font-semibold">
                  Order Identification3
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                NAV Goods Name
              </label>
              <div className="w-3/6">
                <input
                  disabled
                  id="NAV_Name"
                  type="text"
                  value={navName}
                  onChange={(e) => setNavName(e.target.value)}
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/6">
                <button onClick={handleGoods_Name_Reflect} className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center">
                  <FaArrowDownLong />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Goods Name
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Product_Name"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                NAV Goods Size
              </label>
              <div className="w-3/6">
                <input
                  disabled
                  id="NAV_Size"
                  type="text"
                  value={navSize}
                  onChange={(e) => setNavSize(e.target.value)}
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/6">
                <button onClick={handleGoods_Size_Reflect} className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center">
                  <FaArrowDownLong />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Goods Size
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Product_Size"
                  type="text"
                  value={productSize}
                  onChange={(e) => setProductSize(e.target.value)}
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <div className="w-5/6">
                <div className="flex gap-2  mb-2">
                  <label className="text-xs font-semibold w-2/5">
                    Cutomer_Draw
                  </label>
                  <div className="w-3/5">
                    <input
                      disabled
                      id="Customer_Draw"
                      value={customerDraw}
                      onChange={(e) => setCustomerDraw(e.target.value)}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <label className="text-xs font-semibold w-2/5">
                    Company_Draw
                  </label>
                  <div className="w-3/5">
                    <input
                      disabled
                      id="Company_Draw"
                      value={companyDraw}
                      onChange={(e) => setCompanyDraw(e.target.value)}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <button onClick={handleDrawNoReflectClick} className="bg-blue-500 text-white text-lg w-full py-[22px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center">
                  <FaArrowDownLong />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Draw
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Product_Draw"
                  value={productDraw}
                  onChange={(e) => setProductDraw(e.target.value)}
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 mb-2">
              <div className="w-7/12 flex gap-1 items-center">
                <label className="text-xs font-semibold w-5/12">
                  Quantity
                </label>
                <div className="w-3/12">
                  <input
                    disabled
                    id="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="w-2/12">
                  <select
                    disabled
                    id="Unit_CD"
                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="w-3/12">
                  <input
                    disabled
                    id="Unit_CD_Input"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="w-5/12 flex items-center">
                <label className="text-xs font-semibold w-1/2">
                  Remaining Qty
                </label>
                <div className="w-1/2">
                  <input
                    disabled
                    id=""
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Sale Instructions
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Sl_Instructions"
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Instructions
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Instructions"
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Remark
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Remark"
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Inspection Remark
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="I_Remark"
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Sales Group
              </label>
              <div className="w-2/5">
                <select
                  disabled
                  id="Sales_Grp_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                    WorkergData.map((worker) => (
                      <option key={worker.WorkG_CD} value={worker.WorkG_CD}>
                        {worker.WorkG_CD}
                      </option>
                    ))
                  ) : (
                    <option value="">No Worker Groups Available</option> // แสดงข้อความถ้าไม่มีข้อมูล
                  )}
                </select>
              </div>
              <div className="w-2/5">
                <input
                  disabled
                  id="Sales_Grp_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Sales Person
              </label>
              <div className="w-2/5">
                <select
                  disabled
                  id="Sales_Person_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                >
                  {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                    WorkerData.map((worker) => (
                      <option
                        key={worker.Worker_CD}
                        value={worker.Worker_CD}
                      >
                        {worker.Worker_CD}{" "}
                        {/* หรือใช้ worker.WorkerName ถ้าต้องการแสดงชื่อ */}
                      </option>
                    ))
                  ) : (
                    <option value="">No Workers Available</option> // ข้อความเมื่อไม่มีข้อมูล
                  )}
                </select>
              </div>
              <div className="w-2/5">
                <input
                  disabled
                  id="Sales_Person_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/12">
                Req Category
              </label>
              <div className="w-1/12">
                <select
                  disabled
                  id="Request1_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/12">
                <input
                  disabled
                  id="Request1_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/12">
                <select
                  disabled
                  id="Request2_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/12">
                <input
                  disabled
                  id="Request2_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/12">
                <select
                  disabled
                  id="Request3_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/12">
                <input
                  disabled
                  id="Request3_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-full gap-2">
                <label className="text-xs font-semibold w-2/5">
                  Material1
                </label>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Material1"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 mb-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  <input
                    disabled
                    id="H_Treatment1"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">
                  Material2
                </label>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Material2"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  <input
                    disabled
                    id="H_Treatment2"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">
                  Material3
                </label>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Material3"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  <input
                    disabled
                    id="H_Treatment3"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">
                  Material4
                </label>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Material4"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  <input
                    disabled
                    id="H_Treatment4"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">
                  Material5
                </label>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Material5"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  <input
                    disabled
                    id="H_Treatment5"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="flex w-2/5 gap-2">
                <label className="text-xs font-semibold w-2/6">
                  Coating
                </label>
                <div className="w-2/6">
                  <select
                    disabled
                    id="Coating_CD"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="w-2/6">
                  <input
                    disabled
                    id="Coating_Name"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-3/5 gap-2">
                <label className="text-xs font-semibold w-2/6">
                  CT_Detail
                </label>
                <div className="w-4/6">
                  <input
                    disabled
                    id="Coating"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Tolerance
              </label>
              <div className="w-4/5">
                <input
                  disabled
                  id="Tolerance"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-6/12 gap-2 items-center">
                <label className="text-xs font-semibold w-2/5">
                  Quotation No
                </label>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Quote_No"
                    type="text"
                    className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-6/12 gap-2 items-center">
                <label className="text-xs font-semibold w-1/5">CAT</label>
                <div className="w-2/5">
                  <select
                    disabled
                    id="Quote_CD"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="w-2/5">
                  <input
                    disabled
                    id="Quote_CD_Input"
                    type="text"
                    className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-1/5">Item</label>
              <div className="w-2/5">
                <select
                  disabled
                  id="Item1_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/5">
                <input
                  disabled
                  id="Item1_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center mb-2">
              <label className="text-xs font-semibold w-3/12">
                Customer Materail
              </label>
              <div className="w-9/12">
                <input
                  disabled
                  id="Custom_Material"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center mb-2">
              <label className="text-xs font-semibold w-1/5">PO No</label>
              <div className="w-4/5">
                <input
                  disabled
                  id="Od_No_of_Custom"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Production Docu
              </label>
              <div className="w-3/5">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/5">
                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">
                  Setting
                </button>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Supplement_Docu
              </label>
              <div className="w-3/5">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/5">
                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">
                  Setting
                </button>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production_Received
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Received_Date"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production_Completed
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Complete_Date"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                QC_Completed
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="I_Completed_Date"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Shipment_Date
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Shipment_Date"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production_Calc_Date
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Calc_Date"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Calc_processing_Data
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Calc_Process_Date"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order_Modify_Date
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Od_Upd_Date"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="grid justify-between">
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Customer
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Customer_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                >
                  {Array.isArray(CustomerData) &&
                    CustomerData.length > 0 ? (
                    CustomerData.map((customer) => (
                      <option
                        key={customer.Customer_CD}
                        value={customer.Customer_CD}
                      >
                        {customer.Customer_CD}
                      </option>
                    ))
                  ) : (
                    <option value="">No Customers Available</option> // ข้อความเมื่อไม่มีข้อมูล
                  )}
                </select>
              </div>

              <div className="w-2/6">
                <input
                  disabled
                  id="Customer_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Long Name
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Category
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Supply_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Supply_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Destination
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Destination_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Destination_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Contract Document
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Contract_Docu_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Contract_Docu_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Unit Price
              </label>
              <div className="w-2/6">
                <select
                  id="Unit_Price"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6 flex gap-1">
                <div className="w-2/5">
                  <input
                    disabled
                    id="Unit_Price_Input"
                    type="text"
                    className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Unit_Price_Input2"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order No of Production Split
              </label>
              <div className="w-3/6">
                <input
                  disabled
                  id="Od_No_of_Pd_Split"
                  type="text"
                  className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/6">
                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center gap-2">
                  Quot <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Controller Person
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Od_Ctl_Person_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Od_Ctl_Person_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Register Person
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Od_Reg_Person_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Od_Reg_Person_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Update Person
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Od_Upd_Person_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Specific Item
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Specific_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Progress CAT
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Od_Progress_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Date CAT
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Delivery_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Schedule CAT
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Schedule_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Target CAT
              </label>
              <div className="w-2/6">
                <select
                  disabled
                  id="Target_CD"
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Target Qty
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Target_Qty"
                  value={pdTargetQty}
                  onChange={(e) => setPdTargetQty(e.target.value)}
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Pruduction Completed Qty
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Complete_Qty"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Inspection Completed Qty
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="I_Complete_Qty"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Qty
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Shipment_Qty"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Split Qty
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Split_Qty"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Calculation Qty
              </label>
              <div className="w-4/6">
                <input
                  disabled
                  id="Pd_Calc_Qty"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">NG Qty</label>
              <div className="w-4/6">
                <input
                  disabled
                  id="NG_Qty"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {/* Column of Buttons */}
            <button
              id="searchButton"
              onClick={handleF1Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              Search <br />
              検索 (F1)
            </button>
            <button
              id="editButton"
              onClick={handleF2Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              Edit <br />
              編集 (F2)
            </button>
            <button
              id="newAddButton"
              onClick={handleF3Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              New Add <br />
              追加 (F3)
            </button>
            <button
              onClick={handleF4Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              Order <br />
              受注 (F4)
            </button> 
            
            <button
              onClick={handleF5Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              Plan <br />
              計画 (F5)
            </button>
            <button
              onClick={handleF6Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              PS All <br />
              全頁 (F6)
            </button>
            <button
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              List <br />
              一 覽 (F7)
            </button>
            <button
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              NextParts <br />
              別部 (F8)
            </button>

            <button
              id="saveButton"
              onClick={handleF9Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              Save <br />
              登録 (F9)
            </button>
            <button
              onClick={handleF10Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              Delete <br />
              削除 (F10)
            </button>
            <button
              id="nextInputButton"
              onClick={handleF11Click}
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white"
            >
              NextInput <br />
              次へ (F11)
            </button>
            <button
              id="exitButton"
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
            >
              Exit <br />
              終了 (F12)
            </button>
        </div>
      </div>


    </div>
  );
}

const searchPermission = (status) => {
  document.getElementById("Search_Order_No").disabled = !status;
};

const editPermission = (status) => {
  // จัดการสิทธิ์การเข้าถึงของแต่ละฟิลด์โดยตรง
  document.getElementById("Order_No").disabled = !status;
  document.getElementById("Product_Grp_CD").disabled = !status;
  document.getElementById("Request_Delivery").disabled = !status;
  document.getElementById("Product_Delivery").disabled = !status;
  document.getElementById("Confirm_Delivery").disabled = !status;
  document.getElementById("NAV_Delivery").disabled = !status;
  document.getElementById("Od_Pending").disabled = !status;
  document.getElementById("Temp_Shipment").disabled = !status;
  document.getElementById("Unreceived").disabled = !status;
  document.getElementById("Od_CAT1").disabled = !status;
  document.getElementById("Od_CAT2").disabled = !status;
  document.getElementById("Od_CAT3").disabled = !status;
  document.getElementById("NAV_Name").disabled = !status;
  document.getElementById("Product_Name").disabled = !status;
  document.getElementById("NAV_Size").disabled = !status;
  document.getElementById("Product_Size").disabled = !status;
  document.getElementById("Customer_Draw").disabled = !status;
  document.getElementById("Company_Draw").disabled = !status;
  document.getElementById("Product_Draw").disabled = !status;
  document.getElementById("Quantity").disabled = !status;
  document.getElementById("Unit_CD").disabled = !status;
  document.getElementById("Sl_Instructions").disabled = !status;
  document.getElementById("Pd_Instructions").disabled = !status;
  document.getElementById("Pd_Remark").disabled = !status;
  document.getElementById("I_Remark").disabled = !status;
  document.getElementById("Sales_Grp_CD").disabled = !status;
  document.getElementById("Sales_Person_CD").disabled = !status;
  document.getElementById("Request1_CD").disabled = !status;
  document.getElementById("Request2_CD").disabled = !status;
  document.getElementById("Request3_CD").disabled = !status;
  document.getElementById("Material1").disabled = !status;
  document.getElementById("H_Treatment1").disabled = !status;
  document.getElementById("Material2").disabled = !status;
  document.getElementById("H_Treatment2").disabled = !status;
  document.getElementById("Material3").disabled = !status;
  document.getElementById("H_Treatment3").disabled = !status;
  document.getElementById("Material4").disabled = !status;
  document.getElementById("H_Treatment4").disabled = !status;
  document.getElementById("Material5").disabled = !status;
  document.getElementById("H_Treatment5").disabled = !status;
  document.getElementById("Tolerance").disabled = !status;
  document.getElementById("Coating_CD").disabled = !status;
  document.getElementById("Coating_Name").disabled = !status;
  document.getElementById("Coating").disabled = !status;
  document.getElementById("Quote_No").disabled = !status;
  document.getElementById("Quote_CD").disabled = !status;
  document.getElementById("Item1_CD").disabled = !status;
  document.getElementById("Custom_Material").disabled = !status;
  document.getElementById("Od_No_of_Custom").disabled = !status;
  document.getElementById("Pd_Received_Date").disabled = !status;
  document.getElementById("Pd_Complete_Date").disabled = !status;
  document.getElementById("Shipment_Date").disabled = !status;
  document.getElementById("Pd_Calc_Date").disabled = !status;
  document.getElementById("Calc_Process_Date").disabled = !status;
  document.getElementById("Od_Upd_Date").disabled = !status;
  document.getElementById("Customer_CD").disabled = !status;
  document.getElementById("Supply_CD").disabled = !status;
  document.getElementById("Destination_CD").disabled = !status;
  document.getElementById("Contract_Docu_CD").disabled = !status;
  document.getElementById("Unit_Price").disabled = !status;
  document.getElementById("Od_No_of_Pd_Split").disabled = !status;
  document.getElementById("Od_Ctl_Person_CD").disabled = !status;
  document.getElementById("Od_Reg_Person_CD").disabled = !status;
  document.getElementById("Od_Upd_Person_CD").disabled = !status;
  document.getElementById("Specific_CD").disabled = !status;
  document.getElementById("Od_Progress_CD").disabled = !status;
  document.getElementById("Delivery_CD").disabled = !status;
  document.getElementById("Schedule_CD").disabled = !status;
  document.getElementById("Target_CD").disabled = !status;
  document.getElementById("Pd_Target_Qty").disabled = !status;
  document.getElementById("Pd_Complete_Qty").disabled = !status;
  document.getElementById("I_Complete_Qty").disabled = !status;
  document.getElementById("Shipment_Qty").disabled = !status;
  document.getElementById("Pd_Split_Qty").disabled = !status;
  document.getElementById("Pd_Calc_Qty").disabled = !status;
  document.getElementById("NG_Qty").disabled = !status;
};

const toggleButtons = (f3, f9, f11, f12) => {
  console.log("Button F3:", f3);
  console.log("Button F9:", f9);
  console.log("Button F11:", f11);
  console.log("Button F12:", f12);

  // ปิดหรือเปิดการใช้งานปุ่มตามค่าที่ส่งมา
  document.getElementById("newAddButton").disabled = !f3;
  document.getElementById("saveButton").disabled = !f9;
  document.getElementById("nextInputButton").disabled = !f11;
  document.getElementById("exitButton").disabled = !f12;
}