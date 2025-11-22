import React, { useState, useEffect } from 'react';
import { gridColsList } from './Const';

function ResultArea({cardNum, displayImages}){
  return(
    <div className="px-14 p-5 bg-green-500 min-h-[calc(100dvh-268px)] max-h-fit">
    <div className={`min-w-max grid ${gridColsList[cardNum]} text-center gap-4 mt-5`}>
      {Array.from({ length: cardNum }).map((_, i) => {
        const imageUrl = `asset/cards/${displayImages.options[i].file}`;
        const rotate = displayImages.rotations[i] === 'r' ? "rotate-180" : "rotate-0";
        const imageAlt = `${displayImages.options[i].label}_${displayImages.rotations[i] === 'r' ? '逆位置' : '正位置'}`;
        const [imgError, setImgError] = useState(false);
        useEffect(() => {
          setImgError(false);
        }, [imageUrl]);

        return (
          <div key={i} className="flex justify-center">
            <div className="border-0">
              {
                displayImages.options[i].file && !imgError ?
                  <img src={imageUrl} className={`w-40 h-[266px] rounded-lg border-0 ${rotate}`}
                    alt={imageAlt}
                    onError={() => {setImgError(true)}}
                  />
                : (
                  <div id={`fallback-${i}`} 
                    className={`flex w-40 h-[266px] rounded-lg justify-center items-center font-bold
                    ${displayImages.rotations[i] === 'r' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}
                  >
                    {imageAlt}
                  </div>
                )
              }

            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default ResultArea;