// src/components/Layout.js
import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';


import ColumnButton from './ColumnButton';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';




const Layout = ({ children }) => {
    const [selectedContent, setSelectedContent] = useState('');

    const handleButtonClick = (content) => {
        setSelectedContent(content);
      };
      return (
        <div className="flex">
          {/* Left Side Column */}
          <div className="w-1/4 h-screen bg-gray-200 p-4 space-y-4">
            {/* Add your left-side content here */}
            <div className="grid space-y-4">
              <ColumnButton
                text="Forest"
                onClick={() => handleButtonClick(<LayoutOne />)}
              />
              <ColumnButton
                text="Character/Crafting"
                onClick={() => handleButtonClick(<LayoutTwo />)}
              />
              {/* Add more buttons as needed */}
            </div>
          </div>
          {/* Right Side Content */}
          <div className="w-3/4 p-4 h-screen">
            <div>{selectedContent}</div>
            {/* Display the selected content */}
            
          </div>
        </div>
      );
    };
    
    export default Layout;
    
    
    
    