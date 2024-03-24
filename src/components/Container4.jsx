import React, { useState } from 'react';
import data from '../data/data.json';

function Container4() {
  const [hovered, setHovered] = useState([false, false, false, false]);

  const handleMouseEnter = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = true;
    setHovered(newHovered);
  };

  const handleMouseLeave = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = false;
    setHovered(newHovered);
  };

  return (
    <div className="container mt-3">
      {/* Header */}
      <div className="bg-opacity-0 p-4 mb-14">
        <h2 className="text-3xl font-bodoni text-white">{data.container4.headerText}</h2>
      </div>

      <div className="flex justify-between">
        {/* Square box 1 */}
        <div
          className={`bg-gray-300 w-52 h-52 flex items-center justify-center mr-2 box relative ${hovered[0] ? 'border-blue-500 border-2' : ''}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          style={{ backgroundColor: hovered[0] ? "#262A32" : "#262A32" }}
        >
          <img
            src={hovered[0] ? "https://assets-global.website-files.com/62d949dfc2def403206d5909/62d949dfc2def40baf6d5986_logo3.webp" : "https://www.ustrucks.co.za/wp-content/uploads/2022/05/logo-1d.png"}
            alt={hovered[0] ? "Logo 2" : "Logo 1"}
            className="logo"
            style={{ width: "100%", height: "100%", objectFit:"contain" }}
          />
        </div>
        {/* Square box 2 */}
        <div
          className={`bg-gray-300 w-52 h-52 flex items-center justify-center mr-2 mt-16 box relative ${hovered[1] ? 'border-blue-500 border-2' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          style={{ backgroundColor: hovered[1] ? "#262A32" : "#262A32" }}
        >
          <img
            src={hovered[1] ? "https://assets-global.website-files.com/62d949dfc2def403206d5909/62d949dfc2def40baf6d5986_logo3.webp" : "https://www.ustrucks.co.za/wp-content/uploads/2022/05/logo-1d.png"}
            alt={hovered[1] ? "Logo 2" : "Logo 1"}
            className="logo"
            style={{ width: "100%", height: "100%", objectFit:"contain" }}
          />
        </div>
        {/* Square box 3 */}
        <div
          className={`bg-gray-300 w-52 h-52 flex items-center justify-center mr-2 box relative ${hovered[2] ? 'border-blue-500 border-2' : ''}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          style={{ backgroundColor: hovered[2] ? "#262A32" : "#262A32" }}
        >
          <img
            src={hovered[2] ? "https://assets-global.website-files.com/62d949dfc2def403206d5909/62d949dfc2def40baf6d5986_logo3.webp" : "https://www.ustrucks.co.za/wp-content/uploads/2022/05/logo-1d.png"}
            alt={hovered[2] ? "Logo 2" : "Logo 1"}
            className="logo"
            style={{ width: "100%", height: "100%", objectFit:"contain"}}
          />
        </div>
        {/* Square box 4 */}
        <div
          className={`bg-gray-300 w-52 h-52 flex items-center justify-center mr-2 mt-16 box relative ${hovered[3] ? 'border-blue-500 border-2' : ''}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          style={{ backgroundColor: hovered[3] ? "#262A32" : "#262A32" }}
        >
          <img
            src={hovered[3] ? "https://assets-global.website-files.com/62d949dfc2def403206d5909/62d949dfc2def40baf6d5986_logo3.webp" : "https://www.ustrucks.co.za/wp-content/uploads/2022/05/logo-1d.png"}
            alt={hovered[3] ? "Logo 2" : "Logo 1"}
            className="logo"
            style={{ width: "100%", height: "100%", objectFit:"contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Container4;
