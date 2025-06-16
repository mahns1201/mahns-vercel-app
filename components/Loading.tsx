import React from 'react';

const Loading: React.FC = () => (
  <div className="flex items-center justify-center min-h-[120px]">
    <div className="w-12 h-12 border-6 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

export default Loading;
