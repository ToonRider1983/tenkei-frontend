import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Button = ({ label, subLabel, to }) => (
    <Link 
        to={to} 
        className="bg-[#6A9C89] hover:bg-[#45695C] text-white font-medium h-24 w-full py-4 px-4 rounded-lg shadow-md flex justify-center items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105"
    >
        <div className="text-sm md:text-base lg:text-lg">
            {label} <br /> 
            {subLabel && <span className="text-xs md:text-sm lg:text-base">{subLabel}</span>}
        </div>
    </Link>
);

export default function DashboardPage() {
    const buttonsData = [
        { label: 'Order Info', subLabel: '(依頼書別受注処理)', to: '/order-info' },
        { label: 'Order List', subLabel: '(受注一覧)', to: '/order-list' },
        { label: 'NAV Order CSV Import', to: '/nav-order-csv-import' },
        { label: 'NAV Purchase CSV Import', to: '/nav-purchase-csv-import' },
        { label: 'Purchase Info', subLabel: '(依頼書別手配処理)', to: '/purchase-info' },
        { label: 'Purchase List', subLabel: '(手配一覧)', to: '/purchase-list' },
        { label: 'Go to Admin Menu', subLabel: '(管理者メニューへ)', to: '/admin-menu' },
        { label: 'Plan Info', subLabel: '(依頼書別計画処理)', to: '/plan-info' },
        { label: 'Plan List', subLabel: '(計画一覧)', to: '/plan-list' },
        { label: 'ProcessG Plan Cfm', subLabel: '(工程G別計画確認)', to: '/processg-plan-cfm' },
        { label: 'Calc Complete', subLabel: '(生産計上処理)', to: '/calc-complete' },
        { label: 'Result Info', subLabel: '(依頼書別実績処理)', to: '/result-info' },
        { label: 'Result List', subLabel: '(実績一覧)', to: '/result-list' },
        { label: 'ProcessG Plan List', subLabel: '(工程G別加工予定)', to: '/processg-plan-list' },
        { label: 'Cost Info', subLabel: '(依頼書別原価処理)', to: '/cost-info' },
        { label: 'Cost List', subLabel: '(原価一覧)', to: '/cost-list' },
        { label: 'Search', subLabel: '(検索)', to: '/search' },
    ];

    return (
        <div className="flex bg-[#E9EFEC] h-[100vh]">
            <Sidebar />
            <div className="flex flex-col w-screen mr-2 ml-2">
                <Navbar />
                <p className="font-bold text-2xl md:text-3xl mt-5 ml-10">TENKEI Client Menu</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-6 flex-1 overflow-y-auto">
                    {buttonsData.map((btn, index) => (
                        <Button key={index} label={btn.label} subLabel={btn.subLabel} to={btn.to} />
                    ))}
                </div>
            </div>
        </div>
    );
}