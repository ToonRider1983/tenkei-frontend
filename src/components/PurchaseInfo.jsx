import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrder } from "../hooks/use-order";
import { usePurchase} from "../hooks/use-purchase";
import Swal from "sweetalert2";

export default function PurchaseInfo() {
  const location = useLocation(); 
  const [searchOrderNo, setSearchOrderNo] = useState(location.state?.searchOrderNo || "");
  const {orderData,searchOrderData,setOrderData,} = useOrder();
  const {purchaseData,setPurchaseData,createPurchase,searchPurchaseData,searchProcureData,setSelectedPurchaseNo,selectedPurchaseNo,editProcure,deleteProcure} = usePurchase();
  const navigate = useNavigate();

  const handleInputChange = (event, isPurchase = false) => {
    const { id, value, type, checked } = event.target;

    // เลือกว่าจะอัปเดตข้อมูลใน orderData หรือ purchaseData ขึ้นอยู่กับค่า isPurchase
    if (isPurchase) {
        setPurchaseData((prevPurchaseData) => ({
            ...prevPurchaseData,
            [id]: type === "checkbox" ? checked : value === "" ? null : value,
        }));
    } else {
        setOrderData((prevOrderData) => ({
            ...prevOrderData,
            [id]: type === "checkbox" ? checked : value === "" ? null : value,
        }));
    }

    // ตรวจสอบและค้นหาข้อมูลทั้ง order และ purchase
    if (id === "Search_Order_No") {
        setSearchOrderNo(value);
        if (value) {
            searchOrderData(value); 
            searchPurchaseData(value); 
           
        }
    } 

};
const handlePurchaseInputChange = async (event) => {
  const { id, value, type, checked } = event.target;
  
  // อัปเดต purchaseData ตามค่าที่ผู้ใช้กรอก
  setPurchaseData((prevPurchaseData) => ({
      ...prevPurchaseData,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
  }));


  if (id === "Search_PcLn_No") {
   
      const OdPcLnNo = value; 
      await setSelectedPurchaseNo(selectedPurchaseNo);
      await searchProcureData(OdPcLnNo); 
  }
};





const handnewOrderNo = (newOrder_No) => {
  handlePurchaseInputChange({
    target: { id: "Order_No", value: newOrder_No },
  });
};

const handleSearch_Order_NoChange = async (newOrder_No) => {

  if (searchOrderNo) {
    await searchOrderData(searchOrderNo);
    await searchPurchaseData(searchOrderNo);
  }
  
};

useEffect(() => {
  handleSearch_Order_NoChange();
}, [searchOrderNo]);

const handleF2Click = () => {
  try {
    editPermission(true);
  } catch (error) {
    Swal.fire({
      title: "เกิดข้อผิดพลาด",
      text: "กรุณาลองอีกครั้ง",
      icon: "error",
      confirmButtonText: "ตกลง",
    });
    console.error("Error in F3_Click:", error); 
  }
};

const handleF3Click = () => {
  try {
    editPermission(true);
  } catch (error) {
    Swal.fire({
      title: "เกิดข้อผิดพลาด",
      text: "กรุณาลองอีกครั้ง",
      icon: "error",
      confirmButtonText: "ตกลง",
    });
    console.error("Error in F3_Click:", error); 
  }
};

const handleF4Click = async () => {
  try {
    const orderExists = await searchOrderData(searchOrderNo);
    if (orderExists) {
    navigate("/order-info", { state: { searchOrderNo } });
    } else {
      await Swal.fire({
        title: "ข้อมูลไม่ถูกต้อง",
        text: "ไม่มีพบหมายเลข order",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
    }
  } catch (error) {

    alert("Error occurs when F4_Click\nPlease contact system administrator.");
  }
};

const handleF9Click = async () => {
  try {
 
     const orderExists = await searchOrderData(searchOrderNo);

     if (orderExists) {
    
      const purchaseExists = await searchPurchaseData(purchaseData.OdPcLn_No);
      if (purchaseExists) {

        const result = await Swal.fire({
          title: "ต้องการบันทึกข้อมูลหรือไม่",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ใช่",
          cancelButtonText: "ไม่ใช่",
        });
    
        if (result.isConfirmed) {
          const now = new Date();
          const formattedDate = now.toISOString(); 
    
    
          document.getElementById("Pc_Arrival_Date").value = formattedDate;
          purchaseData.Pc_Arrival_Date = formattedDate;
         
          await editProcure();

        }
    
       } else {

        const result = await Swal.fire({
          title: "ต้องการบันทึกข้อมูลหรือไม่",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ใช่",
          cancelButtonText: "ไม่ใช่",
        });
    
        if (result.isConfirmed) {
    
    
          
          const now = new Date();
          const formattedDate = now.toISOString(); 
    
    
          document.getElementById("Pc_Reg_Date").value = formattedDate;
          purchaseData.Pc_Reg_Date = formattedDate;
          document.getElementById("Pc_Progress_CD").value = 1;
          purchaseData.Pc_Progress_CD = 1;
          purchaseData.OdPcLn_No= purchaseData.Order_No+purchaseData.Procure_No;
          await createPurchase();
    
        
        }

      }

    }   else { 

      await Swal.fire({
        title: "ข้อมูลไม่ถูกต้อง",
        text: "(Order) ไม่พบ",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
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
    // แสดงกล่องยืนยันการลบข้อมูล
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
      const response = await deleteProcure(purchaseData.OdPcLn_No); // เรียกใช้ฟังก์ชันลบคำสั่ง
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

const editPermission = (status) => {
  const fields = [
    "Order_No",
    "Procure_No",
    "Vendor_CAT",
    "Vendor_CD",
    "Pc_Person_CD",
    "Pc_Name",
    "Pc_Material",
    "Pc_Mate_Docu",
    "Pc_Qty",
    "Pc_Unit_CD",
    "Pc_Date",
    "Pc_Req_Delivery",
    "Pc_Req_Delivery_CD",
    "Pc_Ans_Delivery",
    "Pc_Ans_Delivery_CD",
    "Pc_Arrival_Date",
    "Pc_Arrival_Qty",
    "Price_CD",
    "Unit_Price",
    "Pc_Cancel_Date",
    "Pc_Remark",
    "Pc_Progress_CD",
  ];

  fields.forEach(field => {
    const element = document.getElementById(field);
    if (element) {
      element.disabled = !status;  // Enable or disable based on status
    }
  });
};

  return (
    <div className="flex-1 overflow-y-auto">
          <div className="flex justify-between items-center gap-2 mx-5 py-4">
            <div className="flex gap-2 items-center">
              <label className="font-medium text-xs">Search_Order_No</label>
              <div className="w-3/5">
              <input
              id="Search_Order_No"
              type="text"
              value={searchOrderNo || ""}
              onChange={handleInputChange}
              className="bg-[#cbfefe] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-medium text-xs">Search_Poln_No</label>
              <div className="w-3/5">
              <select
              id="Search_PcLn_No"
              value={selectedPurchaseNo || ""} 
              onChange={(e) => handlePurchaseInputChange(e)}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
          >
            <option value="">เลือกข้อมูล</option>
          {Array.isArray(selectedPurchaseNo) && selectedPurchaseNo.length > 0 ? (
         selectedPurchaseNo.map((item, index) => (
            <option key={index} value={item.OdPcLn_No}>
                {item.OdPcLn_No}
            </option>
             ))
          ) : (
        <option value="">ไม่มีข้อมูล</option>
        
          )}
          </select>
              </div>
              <div className="w-3/5">
                <input
                  id="Search_Pc_Name"
                  type="text"
                  className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-medium text-xs">Search_OdPoln_No</label>
              <div className="w-3/5">
                <input
                  disabled
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
                  {orderData ? (
                    <input
                      id="Product_Grp_CD"
                      disabled
                      value={orderData.Product_Grp_CD || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                    disabled
                    type="text"
                    className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                  )}
                  </div>
                  <div className="w-2/6">
                    <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-3 gap-2 grid grid-cols-3">
                  <div className="flex gap-2 items-center">
                  {orderData ? (
                    <input id="Od_Pending" value={!!orderData.Od_Pending || ""}  onChange={handleInputChange} disabled type="checkbox" className="h-6 w-6" />
                  ) : (
                    <input disabled type="checkbox" className="h-6 w-6" />
                  )}
                    <label className="font-medium text-xs">Od_Pending</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      Ctl_Person
                    </label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Od_Ctl_Person_CD"
                        value={orderData?.Od_Ctl_Person_CD || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">
                      Sales_Person
                    </label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Sales_Person_CD"
                        value={orderData.Sales_Person_CD || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Specific</label>
                  <div className="w-2/6">
                  {orderData ? (
                    <select id="Specific_CD" value={orderData.Specific_CD || ""} onChange={handleInputChange} disabled className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                      <option value={orderData.Specific_CD || ""}>{orderData.Specific_CD || ""}</option>
                    </select>
                      ) : (
                    <select disabled className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                     </select>
                      )}
                  </div>
                  <div className="w-2/6">
                    <input
                      disabled
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
                  {orderData ? (
                    <input
                      disabled
                      id="Pd_Received_Date"
                      value={orderData.Pd_Received_Date || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                    disabled
                    type="text"
                    className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
                  </div>
                </div>
                <div className="col-span-3 gap-2 grid grid-cols-3">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/6">
                      Customer
                    </label>
                    <div className="w-2/6">
                    {orderData ? (
                      <input
                        disabled
                        id="Customer_CD"
                        value={orderData.Customer_CD || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                    <div className="w-2/6">
                      <input
                        disabled
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/6">Qty</label>
                    <div className="w-2/6">
                    {orderData ? (
                      <input
                        disabled
                        id="Quantity"
                        value={orderData.Quantity || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                    <div className="w-2/6">
                      <input
                        disabled
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs">Price</label>
                    <div>
                    {orderData ? (
                      <input
                        disabled
                      
                        value={orderData.Unit_Price || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                    <div>
                      <input
                        disabled
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <label className="font-medium text-xs">Supply</label>
                    <div>
                      <input
                        disabled
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Progress</label>
                  <div className="w-2/6">
                  {orderData ? (
                    <select id="Od_Progress_CD"  value={orderData.Od_Progress_CD || ""} onChange={handleInputChange} disabled className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff00] w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                     ) : (
                      <select disabled className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff00] w-full">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                     )}
                  </div>
                  <div className="w-2/6">
                    <input
                      disabled
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
                  {orderData ? (
                    <input
                      disabled
                      id="Request_Delivery"
                      value={orderData.Request_Delivery || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                    disabled
                    type="text"
                    className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                  )}
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Product</label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Product_Name"
                        value={orderData.Product_Name || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs">Req3</label>
                    <div>
                    {orderData ? (
                      <input
                        disabled
                        id="Request3_CD"
                        value={orderData?.Request3_CD || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      id="Request3_CD"
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                    <label className="font-medium text-xs">Coating</label>
                    <div>
                      <input
                      disabled
                      type="text"
                      className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Detail</label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Coating"
                        value={orderData.Coating || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Delivery</label>
                  <div className="w-2/6">
                  {orderData ? (
                    <select id="Delivery_CD" value={orderData?.Delivery_CD || ""}  onChange={handleInputChange} disabled className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                  <option value={orderData.Delivery_CD || ""}>{orderData.Delivery_CD || ""}</option>
                    </select>
                      ) : (
                        <select disabled className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      )}
                  </div>
                  <div className="w-2/6">
                    <input
                      disabled
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
                  {orderData ? (
                    <input
                      disabled
                      id="Product_Delivery" 
                      value={orderData?.Product_Delivery || ""}  
                      onChange={handleInputChange}
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                    disabled
                    type="text"
                    className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                  )}
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Size</label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Product_Size"
                        value={orderData.Product_Size || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Mate1</label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Material1"
                        value={orderData.Material1 || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">P_Docu</label>
                    <div className="w-3/5">
                      <input
                        disabled
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Target</label>
                  <div className="w-2/6">
                  {orderData ? (
                    <select id="Target_CD" value={orderData.Target_CD || ""} onChange={handleInputChange} disabled className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                   <option value={orderData.Target_CD || ""}>{orderData.Target_CD || ""}</option>
                    </select>
                       ) : (
                        <select disabled className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      )}
                  </div>
                  <div className="w-2/6">
                    <input
                      disabled
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
                  {orderData ? (
                    <input
                      disabled
                      id="Confirm_Delivery"
                      value={orderData.Confirm_Delivery || ""} 
                      onChange={handleInputChange}
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                    disabled
                    type="text"
                    className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                  )}
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Draw</label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Product_Draw"
                        value={orderData.Product_Draw || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">Mate2</label>
                    <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Material2"
                        value={orderData.Material2 || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                      disabled
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="font-medium text-xs w-2/5">S_Docu</label>
                    <div className="w-3/5">
                      <input
                        disabled
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
                  {orderData ? (
                    <input
                      disabled
                      id="Pd_Complete_Date"
                      value={orderData?.Pd_Complete_Date || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                    disabled
                    type="text"
                    className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                  )}
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
                        disabled
                        id="OdPcLn_No"
                        value={purchaseData?.OdPcLn_No || ""}
                        onChange={handlePurchaseInputChange}
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
                        disabled
                        id="Pc_Reg_Date"
                        value={
                          purchaseData?.Pc_Reg_Date
                            ? purchaseData.Pc_Reg_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handlePurchaseInputChange(event)}
                        type="date"
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
                        disabled
                        id="Pc_Upd_Date"
                        value={
                          purchaseData?.Pc_Upd_Date
                            ? purchaseData.Pc_Upd_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handlePurchaseInputChange(event)}
                        type="date"
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
                    <select disabled id="Pc_Progress_CD" value={purchaseData?.Pc_Progress_CD || ""} onChange={handlePurchaseInputChange}  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                    <option value={purchaseData?.Pc_Progress_CD || ""}>{purchaseData?.Pc_Progress_CD || ""}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="w-2/6">
                    <input
                      disabled
                      id="Pc_Progress_Name"
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
                    disabled
                    id="Order_No"
                    value={purchaseData?.Order_No || ""}
                    onChange={handlePurchaseInputChange}
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
                        disabled
                        id="Procure_No"
                        value={purchaseData?.Procure_No || ""}
                        onChange={handlePurchaseInputChange}
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
                        disabled
                        id="Pc_Line_No"
                        value={purchaseData?.Pc_Line_No || ""}
                        onChange={handlePurchaseInputChange}
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
                      <select disabled id="Vendor_CAT" value={purchaseData?.Vendor_CAT || ""}  onChange={handlePurchaseInputChange} className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                        <option value={purchaseData?.Vendor_CAT || ""}>{purchaseData?.Vendor_CAT || ""}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <input
                        disabled
                        id="Vendor_CAT_Name" 
                        type="text"
                        className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/6">Vendor</label>
                  <div className="flex gap-2 items-center w-4/6">
                    <select disabled id="Vendor_CD" value={purchaseData?.Vendor_CD || ""}  onChange={handlePurchaseInputChange} className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                      <option value={purchaseData?.Vendor_CD || ""}>{purchaseData?.Vendor_CD || ""}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      disabled
                      id="Vendor_Name"
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
                    <select disabled id="Pc_Person_CD" value={purchaseData?.Pc_Person_CD || ""}  onChange={handlePurchaseInputChange} className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                      <option value={purchaseData?.Pc_Person_CD || ""}>{purchaseData?.Pc_Person_CD || ""}</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      disabled
                      id="Pc_Person_Name"
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
                        disabled
                        id="Pc_Name"
                        value={purchaseData?.Pc_Name || ""}  
                        onChange={handlePurchaseInputChange}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="font-medium text-xs">PO_Mate</label>
                    <div>
                      <input
                        disabled
                        id="Pc_Material"
                        value={purchaseData?.Pc_Material || ""}
                        onChange={handlePurchaseInputChange}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                    <div className="flex items-center">
                      <input disabled id="Pc_Mate_Docu" type="checkbox" className="h-6 w-6" />
                    </div>
                    <label className="font-medium text-xs">Mate_Docu</label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <label className="font-medium text-xs w-2/6">PO_Qty</label>
                  <div className="w-4/6 flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <input
                        disabled
                        id="Pc_Qty"
                        value={purchaseData?.Pc_Qty || ""}
                        onChange={handlePurchaseInputChange}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-1/2"
                      />
                      <select disabled id="Pc_Unit_CD"  value={purchaseData?.Pc_Unit_CD || ""} onChange={handlePurchaseInputChange} className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                        <option value={purchaseData?.Pc_Unit_CD || ""}>{purchaseData?.Pc_Unit_CD || ""}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <input
                        disabled
                        id="Pc_Unit_Name"
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
                      disabled
                      value={purchaseData?.Pc_Date || ""} 
                      onChange={handlePurchaseInputChange}
                      id="Pc_Date"
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 gap-2 flex items-center">
                  <label className="font-medium text-xs">Req_Date</label>
                  <div className="flex gap-2 items-center">
                    <input
                      disabled
                      id="Pc_Req_Delivery"
                      value={purchaseData?.Pc_Req_Delivery || ""} 
                      onChange={handlePurchaseInputChange}
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    <select disabled id="Pc_Req_Delivery_CD" value={purchaseData?.Pc_Req_Delivery_CD || ""}  onChange={handlePurchaseInputChange} className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                      <option value={purchaseData?.Pc_Req_Delivery_CD || ""}>{purchaseData?.Pc_Req_Delivery_CD || ""}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      disabled
                      id="Pc_Req_Delivery_Name"
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Cont_Date</label>
                  <div className="flex gap-2 items-center">
                    <input
                      disabled
                      id="Pc_Ans_Delivery"
                      value={purchaseData?.Pc_Ans_Delivery || ""} 
                      onChange={handlePurchaseInputChange}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                    <select disabled id="Pc_Ans_Delivery_CD" value={purchaseData?.Pc_Ans_Delivery_CD || ""} onChange={handlePurchaseInputChange}  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                      <option value={purchaseData?.Pc_Ans_Delivery_CD || ""}>{purchaseData?.Pc_Ans_Delivery_CD || ""}</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      disabled
                      id="Pc_Ans_Delivery_Name"
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 gap-2 flex items-center">
                  <label className="font-medium text-xs">Rec_Date</label>
                  <div>
                    <input
                      disabled
                      id="Pc_Arrival_Date"
                      value={purchaseData?.Pc_Arrival_Date || ""} 
                      onChange={handlePurchaseInputChange}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Rec_Qty </label>
                  <div>
                    <input
                      disabled
                      id="Pc_Arrival_Qty"
                      value={purchaseData?.Pc_Arrival_Qty || ""} 
                      onChange={handlePurchaseInputChange}
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Re_Qty</label>
                  <div>
                    <input
                      disabled
                      id="Re_Qty"
                      value={purchaseData?.Re_Qty || ""} 
                      onChange={handlePurchaseInputChange}
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
                    <select disabled id="Price_CD" value={purchaseData?.Price_CD || ""} onChange={handlePurchaseInputChange}  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/2">
                      <option value={purchaseData?.Price_CD || ""}>{purchaseData?.Price_CD || ""}</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      disabled
                      id="Price_Name"
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-1/2"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <label className="font-medium text-xs">Price</label>
                  <div className="w-full">
                    <input
                      disabled
                      id="Unit_Price"
                      value={purchaseData?.Unit_Price || ""} 
                      onChange={handlePurchaseInputChange}
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Cancel_Date</label>
                  <div className="w-full">
                    <input
                      disabled
                      id="Pc_Cancel_Date"
                      value={purchaseData?.Pc_Cancel_Date || ""} 
                      onChange={handlePurchaseInputChange}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <label className="font-medium text-xs">PO_Remark</label>
                  <div className="w-full">
                    <input
                      disabled
                      id="Pc_Remark"
                      value={purchaseData?.Pc_Remark || ""} 
                      onChange={handlePurchaseInputChange}
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
                      id="Now_Ctl"
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
                <button id="F1"  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Search <br />
                  検索 (F1)
                </button>
                <button id="F2" onClick={handleF2Click} className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Edit <br />
                  編集 (F2)
                </button>
                <button id="F3"  onClick={handleF3Click}    className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  New Add <br />
                  追加 (F3)
                </button>
                <button id="F4" onClick={handleF4Click}  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Order <br />
                  受注 (F4)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button id="F5" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Plan <br />
                  計画 (F5)
                </button>
                <button id="F6" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  PS All <br />
                  全頁 (F6)
                </button>
                <button id="F7" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  List <br />一 覽 (F7)
                </button>
                <button id="F8" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  NextParts <br />
                  別部 (F8)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button id="F9" onClick={handleF9Click} className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Save <br />
                  登録 (F9)
                </button>
                <button id="F10" onClick={handleF10Click} className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Delete <br />
                  削除 (F10)
                </button>
                <button id="F11" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                  NextInput <br />
                  次へ (F11)
                </button>
                <button  id="F12" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Exit <br />
                  終了 (F12)
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}
