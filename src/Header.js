import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageList, initSelection } from "./Const";
import { initApiClient, live2DParamList, setCustomParam, initParam} from './VTubeWS.js';

function Header({cardNum, talotType, setSelections, setDisplayImages, apiClient}) {
  const navigate = useNavigate();

  const handleNavigateMenu = (url, talotTypeKey) => {
    navigate(url);
    if (apiClient.isConnected) {
      resetBtn();

      // カードを並べる
      apiClient.hotkeyTrigger({
        "hotkeyID" : pageList[talotTypeKey]['talotHotkey']
      });
    }
  };

  const resetBtn = () => {
      setSelections(initSelection);
      setDisplayImages(initSelection);
      if (apiClient.isConnected) {
        
        // 表情リセット
        apiClient.hotkeyTrigger({"hotkeyID" : "reset_exp"});
        // 待機状態
        apiClient.hotkeyTrigger({"hotkeyID" : "default_idle"});

        // カード状態リセット
        setCustomParam(apiClient, "Param_card_app", 1);
        setCustomParam(apiClient, "Param_arcana_digit2", 0);
        setCustomParam(apiClient, "Param_arcana_digit1", 0);
      }
  };

  return(
    <header className="bg-violet-400 min-w-max">
      <div className="py-2 px-5 text-xl font-bold">
        <div className="flex flex-row text-white">
          {Object.entries(pageList).map(([key, option], pageIdx) => (
            <div key={pageIdx}>
              {pageIdx !== 0 && "|"}
              <button
                type="button"
                className={`px-3 ${talotType == key ? 'underline' : 'hover:underline decoration-dotted'}`}
                onClick={() => handleNavigateMenu(option.path, key)}>
                  {option.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex flex-row-reverse absolute top-1.5 right-3 min-h-fit`}>
          <button type="button"
            className="px-3 py-2 font-semibold text-sm bg-violet-500 text-white rounded-md shadow-sm hover:bg-violet-800"
            onClick={resetBtn}>
              Reset
          </button>
      </div>
    </header>
  );
}

export default Header;
