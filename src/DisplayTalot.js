import React, { useState } from 'react';
import { initSelection } from './Const';
import Header from "./Header";
import InputArea from "./DisplayTalotInputArea";
import ResultArea from "./DisplayTalotResultArea";

function DisplayTalot({apiClient, cardNum, talotType}) {
  const [selections, setSelections] = useState(initSelection);
  const [displayImages, setDisplayImages] = useState(initSelection);

  return(
    <div className="flex-auto w-full flex-col items-center">
      <Header
        cardNum={cardNum}
        talotType={talotType}
        setSelections={setSelections}
        setDisplayImages={setDisplayImages}
        apiClient={apiClient}/>
      <InputArea
        cardNum={cardNum}
        selections={selections}
        setSelections={setSelections}
        setDisplayImages={setDisplayImages}
        apiClient={apiClient}/>
      <ResultArea
        cardNum={cardNum}
        displayImages={displayImages}/>
    </div>
  );
}

export default DisplayTalot;
