import React from 'react';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import fireworks from '../assets/fireworks.gif'; // Correct import path

function Closing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Greeting text */}
        <div className="w-[90%] max-w-[400px] relative z-10">
          <p className="text-white text-center text-sm   font-semibold px-4 drop-shadow-lg">
            Finish
          </p>

          {/* Button */}
          <div className="flex justify-center w-full mt-12">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
              onClick={() => navigate('/letter')}
            >
              <ArrowLeft /> Previous page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Closing;
