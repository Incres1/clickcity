// src/components/Layout.js
import React from 'react';
import ColumnButton from './ColumnButton';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Side Column */}
      <div className="w-1/4 h-screen bg-gray-200 p-4 space-y-4 ">
        {/* Add your left-side content here */}
        <div className="grid space-y-4">

        <ColumnButton text="First Button"></ColumnButton>
        <ColumnButton text="Second Button"></ColumnButton>

        </div>
        
      </div>
      {/* Right Side Content */}
      <div className="w-3/4 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
