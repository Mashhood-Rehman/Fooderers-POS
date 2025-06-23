import React from "react";

const Modal = ({ openModal, handleCloseModal, title, children }) => {
    if (!openModal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ">
            <div className="bg-[#1a1a1a] w-full max-w-lg rounded-xl shadow-2xl border border-gray-700">
                <div className="bg-[#232323] flex px-6 py-4 items-center justify-between rounded-t-xl">
                    <h2 className="text-white text-2xl ">{title}</h2>
                    <button
                        onClick={handleCloseModal}
                        className="text-white text-2xl leading-none hover:text-gray-200 hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
                    >
                        &times;
                    </button>
                </div>
                <div className="text-white p-6 space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;