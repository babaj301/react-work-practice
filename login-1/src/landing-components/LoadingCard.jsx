import React from 'react';

const LoadingCard = () => {
  return (
    <div className="animate-pulse flex flex-col items-center bg-gray-200 rounded-md p-4 h-64 w-full">
      <div className="h-32 w-32 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default LoadingCard;
