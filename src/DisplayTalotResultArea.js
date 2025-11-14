import React, { useState } from 'react';
import { gridColsList } from './Const';

function ResultArea({cardNum, displayImages}){
  return(
    <div className="px-14 p-5 bg-green-500 h-screen max-h-fit">
    <div className={`min-w-max grid ${gridColsList[cardNum]} text-center gap-4 mt-5`}>
      {Array.from({ length: cardNum }).map((_, i) => {
        const imageUrl = `asset/cards/${displayImages.options[i].file}`;
        const rotate = displayImages.rotations[i] === 'r' ? "rotate-180" : "rotate-0";
        //const visible = displayImages.visible[i] ? 'visible' : 'invisible';
        const imageAlt = `${displayImages.options[i].label}_${displayImages.rotations[i] === 'r' ? '逆位置' : '正位置'}`;

        return (
          <div key={i} className="flex justify-center">
            <div className="border-0">
              {
                displayImages.options[i].file ?
                <img src={imageUrl} className={`w-40 h-56 rounded-lg border-0 ${rotate}`}
                  alt={imageAlt}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = "none";
                    const fallback = document.getElementById(`fallback-${i}`);
                    fallback.style.display = "flex";
                  }}
                />
                : null
              }

              <div id={`fallback-${i}`} 
                className={`w-40 h-56 rounded-lg justify-center items-center font-bold
                ${displayImages.rotations[i] === 'r' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}
                style={{ display: "none" }}
              >
                {imageAlt}
              </div>

            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default ResultArea;