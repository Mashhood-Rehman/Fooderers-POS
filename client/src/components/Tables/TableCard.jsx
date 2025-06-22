import React from 'react';
import { tables } from '../../constants/data';

const TableCard = ({ activeTab }) => {
    const filteredData =
        activeTab === 'All'
            ? tables
            : tables.filter((table) => table.status === activeTab);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredData.map((table) => (
                <div
                    key={table.id}
                    className="bg-[#2e2e2e] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                    <div className='flex items-start justify-between'>

                        {/* Top: Avatar and Info */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold rounded-full w-14 h-14 flex items-center justify-center text-lg shadow-sm">
                                {table.initial}
                            </div>
                            <div className="text-white">
                                <p className="font-semibold text-base">{table.name}</p>
                                <p className="text-sm text-gray-400">{table.seats} seats</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span
                                className={`text-xs px-3 py-1 rounded-full font-medium 
                ${table.status === 'Booked'
                                        ? 'bg-red-500/20 text-red-400 border border-red-400/40'
                                        : 'bg-green-500/20 text-green-400 border border-green-400/40'
                                    }`}
                            >
                                {table.status}
                            </span>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default TableCard;
