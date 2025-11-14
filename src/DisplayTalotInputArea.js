import React, { useState } from 'react';
import Select from "react-select";
import { options, sevenSelect, gridColsList } from './Const.js';
import { rand, getOptionList } from './Util.js';
import { setCustomParam } from './VTubeWS.js';

function RadioNormalReverse({i, selections, setSelections}) {
  const handleChangeRadio = (e) => {
    setSelections((prev) => (
      { ...prev, rotations: Object.assign([], prev.rotations, { [i]: e.target.value }) }
    ));
  }
  return(
    <div className="grid grid-cols-2 gap-2 rounded-xl bg-gray-200 p-1">
      <div>
        <input type="radio"
          className="peer hidden"
          id={`normal${i}`}
          name={`rotation${i}`}
          value="n"
          checked={selections.rotations[i] === 'n'}
          onChange={handleChangeRadio} />
        <label htmlFor={`normal${i}`} className="radio-label">正位置</label>
      </div>
      <div>
        <input type="radio"
          className="peer hidden"
          id={`reverse${i}`}
          name={`rotation${i}`}
          value="r"
          checked={selections.rotations[i] === 'r'}
          onChange={handleChangeRadio} />
        <label htmlFor={`reverse${i}`} className="radio-label" >逆位置</label>
      </div>
    </div>
  );
}

function InputArea({cardNum, selections, setSelections, setDisplayImages, apiClient}) {
  const [okBtnDisplay, setOkBtnDisplay] = useState(false);

  // 表示ボタン押下
  const handleClick = (i) => () => {
    // VTSに送信
    if (apiClient.isConnected) {
      if (selections.options[i].value > 0) {
        const cardNo = i + 1;
        const digit2 = Math.floor(selections.options[i].value / 10);
        const digit1 = selections.options[i].value % 10;
        setCustomParam(apiClient, "Param_arcana_digit2", digit2);
        setCustomParam(apiClient, "Param_arcana_digit1", digit1);
        setCustomParam(apiClient, "Param_card_deg", selections.rotations[i] == "n" ? 0 : 1);
        apiClient.hotkeyTrigger({"hotkeyID" : cardNo + "_open"});
        apiClient.hotkeyTrigger({"hotkeyID" : "arcana_open"});
        setTimeout(() => {
          setCustomParam(apiClient, "Param_card_app", -1);
        }, 500);

        // OKボタン表示（表示ボタン非表示）
        setOkBtnDisplay(true);

      } else {
        // 未選択
        setCustomParam(apiClient, "Param_card_app", 1);
      }
    };

    // 表示
    setDisplayImages((prev) => ({ 
      ...prev,
      options: Object.assign([], prev.options, { [i]: selections.options[i] }),
      rotations: Object.assign([], prev.rotations, { [i]: selections.rotations[i] }),
      //visible: Object.assign([], prev.visible, { [i]: true })
    }));
  };

  // OKボタン押下
  const okClick = () => () => {
    if (apiClient.isConnected) {
      setCustomParam(apiClient, "Param_card_app", 1);
      apiClient.hotkeyTrigger({"hotkeyID" : "arcana_open"});

      setOkBtnDisplay(false);
    };
  };

  // シャッフルボタン押下
  const shuffleClick = () => () => {
    var optionList = getOptionList();
    var newSelections = JSON.parse(JSON.stringify(selections));
    for(var idx = 0 ;idx < cardNum ; idx++) {
      var randSelect = rand(1, 78);
      var randRotate = rand(1, 2);

      newSelections.options[idx] = optionList[randSelect];
      newSelections.rotations[idx] = randRotate == 1 ? 'n' : 'r';
    }
    setSelections((prev) => ({ 
      ...prev,
      options: Object.assign([], newSelections.options),
      rotations: Object.assign([], newSelections.rotations),
    }));

    if (apiClient.isConnected) {
      // シャッフルモーション
      apiClient.hotkeyTrigger({"hotkeyID" : "card_shuffle"});
    }
  };

  return(
    <div>

      <button onClick={shuffleClick()}
          className={`absolute top-12 right-1 mb-1 px-3 py-1 font-semibold text-sm 
          bg-blue-400 text-white rounded-full shadow-sm hover:bg-blue-200`}>
            Shuffle!
      </button>

      <div className={`mx-14 min-w-max grid ${gridColsList[cardNum]} grid-rows-1 gap-4 mt-5 justify-items-center`}>
        {Array.from({ length: cardNum }).map((_, i) => (
          <div key={i}>
            <p className="text-center mb-4">{sevenSelect[i].label}</p>
            <Select 
              options={options}
              className="select-box"
              classNamePrefix="react-select"
              value={selections.options[i]}
              onChange={(option) => setSelections((prev) => ({ ...prev, options: Object.assign([], prev.options, { [i]: option }) }))}
              isSearchable={true}
            />
            <RadioNormalReverse i={i} selections={selections} setSelections={setSelections} />
            <div className="text-center mt-2 mb-1">
              <button onClick={handleClick(i)} className={`btn-common ${okBtnDisplay ? 'invisible' : 'visible'}`}>表示</button>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-items-center text-center">
        <button onClick={okClick()}
          className={`ml-1 mb-1 px-3 py-1 font-semibold text-sm 
          bg-red-400 text-white rounded-full shadow-sm hover:bg-red-200 ${okBtnDisplay ? 'visible' : 'invisible'}`}>
            OK
        </button>
        
      </div>
    </div>
  );
}

export default InputArea;