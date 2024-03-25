import React from 'react';
import data from '../data/data.json';

function Container1() {
  return (
    <div className="container">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Left section with header text, paragraph, and "Hire Me" button */}
          <div className="flex flex-col">
            {/* Header text */}
            <div>
              <h2 className="text-3xl text-white font-bodoni">{data.container1.headerText1}</h2>
            </div>
            <div>
              <h2 className="text-3xl mt-3 text-white font-bodoni">{data.container1.headerText2}</h2>
            </div>
            {/* Paragraph */}
            <p className="mb-4 mt-3 text-white">{data.container1.paragraphText}</p>
            {/* Hire Me button */}
            <button className="bg-white hover:bg-gray-200 text-black font-bold py-1 px-2 rounded-tr-lg rounded-bl-lg text-sm inline-block w-28 h-11" style={{ border: '3px double black' }}>Hire Me</button>
          </div>
          {/* Right section with human cartoon image */}
          <div className="flex justify-center items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/024/346/383/original/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png" alt="Human Cartoon" style={{ width: '320px', height: 'auto' }} />
          </div>
        </div>
        {/* Logos at the bottom */}
        <div className="flex justify-between mt-4">
          <img src="https://assets-global.website-files.com/62d949dfc2def403206d5909/62d949dfc2def40baf6d5986_logo3.webp" alt="Logo 1" className="w-40 h-auto" />
          <img src="https://viprabusiness.com/wp-content/uploads/2022/01/LOGOIPSUM-06.png" alt="Logo 2" className="w-40 h-auto" />
          <img src="https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png" alt="Logo 3" className="w-40 h-auto" />
          <img src="https://viprabusiness.com/wp-content/uploads/2022/01/LOGOIPSUM-05.png" alt="Logo 4" className="w-40 h-auto" />
          <img src="https://viprabusiness.com/wp-content/uploads/2022/01/LOGOIPSUM-06.png" alt="Logo 5" className="w-40 h-auto" />
          <img src="https://assets-global.website-files.com/62d949dfc2def403206d5909/62d949dfc2def40baf6d5986_logo3.webp" alt="Logo 6" className="w-40 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Container1;
