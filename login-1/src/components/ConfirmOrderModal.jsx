import React from "react";
import error from "./error_outline.svg";

const ConfirmOrderModal = ({
  onClose,
  onConfirm,
  itemName,
  quantity,
  itemNumber,
}) => {
  return (
    <div className='fixed inset-0 flex rounded-[8px] bg-black bg-opacity-50 z-50 items-center justify-center'>
      <div className='px-6 pt-6 pb-8 bg-white rounded-[8px] w-full max-w-[553px] flex flex-col '>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-[#181B19] text-base font-semibold '>
            Confirm Order
          </p>
          <button onClick={onClose} className='text-[#79887B] text-sm'>
            X
          </button>
        </div>
        <div className='text-sm text-[#4B564D] font-medium'>
          Confirm that this{" "}
          <span className='font-bold text-[#2E332F]'>order is in stock</span> to
          proceed.
        </div>
        {/* Grey container for item information */}
        <div className='flex mt-2 mb-2 flex-col rounded-md px-2 py-3 bg-[#F6F7F6] border border-[#E1E6E1]'>
          <div className='flex gap-2 mb-2 text-sm text-[#79887B] font-semibold'>
            <p>Item Name:</p>
            <div
              className={`${
                itemName ? "w-fit" : "w-8 h-1"
              }bg-white border items-center border-[#E1E6E1] px-0.5 py-1 rounded-md`}
            >
              {" "}
              {itemName}
            </div>
          </div>
          {/* Quantity and Items in Stock */}
          <div className='flex justify-between'>
            <div className='flex gap-1 text-sm text-[#79887B] font-semibold'>
              <p>Quantity:</p>
              <div
                className={`${
                  quantity ? "w-fit" : "w-8 h-1"
                }bg-white border items-center border-[#E1E6E1] px-0.5 py-1 rounded-md`}
              >
                {quantity}
              </div>
            </div>
            {/* Items in stock */}
            <div className='flex rounded-[4px] gap-1 items-center font-semibold w-fit px-1 py-0.5 border border-[#C4CBC5] '>
              <img src={error} alt='error' />
              <p className='text-xs text-[#5F6D60]'>
                {itemNumber} Item(s) in stock
              </p>
            </div>
          </div>
        </div>
        {/* Once confirmed ..... */}
        <div className='text-sm font-medium mb-8 text-[#4B564D] '>
          Once confirmed, the order will be accepted and assigned to the <br />
          Customer Success team for delivery confirmation
        </div>

        {/* Buttons */}
        <div className='flex items-center justify-end gap-5 '>
          {/* Cancel Button */}
          <button className='px-5 py-2 text-[#5C715E]' onClick={onClose}>
            Cancel
          </button>
          <button
            className='px-5 py-2 rounded-[8px] bg-[#2B8C34] text-white'
            onClick={onConfirm}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderModal;
