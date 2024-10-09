import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3BottomRight, HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { 
  HiHome, HiClipboardCheck, HiOutlineUserGroup, HiOutlineCalendar, HiOutlineDocumentText, 
  HiOutlineClipboardList, HiOutlineLink, HiOutlineFolder, HiOutlinePrinter, HiOutlineCog, 
  HiOutlineCloudUpload, HiOutlineCloudDownload, HiSearch 
} from "react-icons/hi";

const menuItems = [
  { icon: HiHome, label: 'Main', to: '/main' },
  { icon: HiClipboardCheck, label: 'Sales', to: '/sales' },
  { icon: HiOutlineUserGroup, label: 'Sub-Con (手配)', to: '/sub-con' },
  { icon: HiOutlineCalendar, label: 'Plan', to: '/plan' },
  { icon: HiOutlineDocumentText, label: 'Process', to: '/process' },
  { icon: HiOutlineClipboardList, label: 'QC', to: '/qc' },
  { icon: HiOutlineLink, label: 'Link', to: '/link' },
  { icon: HiOutlineFolder, label: 'Finish', to: '/finish' },
  { icon: HiOutlinePrinter, label: 'Print', to: '/print' },
  { icon: HiOutlineCog, label: 'Master', to: '/master' },
  { icon: HiOutlineCloudUpload, label: 'Import', to: '/import' },
  { icon: HiOutlineCloudDownload, label: 'Export', to: '/export' },
];

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const renderMenuItems = () => menuItems.map((item, index) => (
    <li key={index} className='flex items-center p-3 pl-6 hover:bg-[#06695C] cursor-pointer rounded-md'>
      <Link to={item.to} className='flex items-center w-full'>
        <item.icon className='mr-4' /> {!isCollapsed && item.label}
      </Link>
    </li>
  ));

  return (
    <div className={`bg-[#16423C] ${isCollapsed ? 'w-[70px]' : 'w-[250px]'} h-[98vh] flex flex-col transition-width duration-300 rounded-xl mt-2 ml-2 mb-2`}>
      <div className='flex items-center justify-between py-5 font-medium text-xl text-white px-4'>
        {!isCollapsed && <p>Tenkei System</p>}
        <i className={`${isCollapsed ? 'mx-auto' : ''} cursor-pointer`} onClick={toggleSidebar}>
          <HiBars3BottomRight />
        </i>
      </div>

      <div className='relative flex items-center justify-center px-4'>
        {!isCollapsed && (
          <div className='relative w-full'>
            <input
              type="text"
              placeholder="Search..."
              className='w-full px-10 py-2 text-sm rounded-md bg-[#06695C] text-white placeholder-white'
            />
            <HiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white' />
          </div>
        )}
        {isCollapsed && <HiSearch className='text-white hover:bg-[#06695C] cursor-pointer' />}
      </div>

      <div className='mt-5'>
        <ul className='text-white space-y-2'>{renderMenuItems()}</ul>
      </div>

      <div className='mt-auto mb-2.5 mr-2 ml-2 py-2 bg-[#1D594F] rounded-lg'>
        <div className={`flex items-center justify-between px-6 text-white ${isCollapsed ? 'justify-center' : ''}`}>
          {!isCollapsed && <span className='-mt-2'>Nattakarn</span>}
          <HiMiniArrowLeftStartOnRectangle className='text-2xl mt-4 cursor-pointer hover:text-gray-300' />
        </div>
        {!isCollapsed && <div className='px-6 -mt-3 text-sm text-gray-400'>IT System</div>}
      </div>
    </div>
  );
}

export default Sidebar;
