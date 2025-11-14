import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DisplayTalot from "./DisplayTalot";
import { initApiClient, initParam } from './VTubeWS.js';

function App() {
  const [apiClient, setApiClient] = useState(null);
  useEffect(() => {
    // VTS初期化
    const apiClient = initApiClient();
    setApiClient(apiClient);
    apiClient.on("connect", async () => {
      initParam(apiClient);
    });

    return () => {
      apiClient.disconnect();
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DisplayTalot apiClient={apiClient} cardNum={3} talotType={30} key="0" />} />
        <Route path="/one" element={<DisplayTalot apiClient={apiClient} cardNum={1} talotType={10}  key="1" />} />
        <Route path="/twooracle" element={<DisplayTalot apiClient={apiClient} cardNum={2} talotType={20} key="2" />} />
        <Route path="/twomind" element={<DisplayTalot apiClient={apiClient} cardNum={2} talotType={21} key="3" />} />
        <Route path="/twocross" element={<DisplayTalot apiClient={apiClient} cardNum={2} talotType={22} key="4" />} />
        <Route path="/three" element={<DisplayTalot apiClient={apiClient} cardNum={3} talotType={30} key="5" />} />
        <Route path="/four"  element={<DisplayTalot apiClient={apiClient} cardNum={4} talotType={40} key="6" />} />
        <Route path="/five"  element={<DisplayTalot apiClient={apiClient} cardNum={5} talotType={50} key="7" />} />
        <Route path="/hexagram" element={<DisplayTalot apiClient={apiClient} cardNum={7} talotType={70} key="8" />} />
        <Route path="/horse" element={<DisplayTalot apiClient={apiClient} cardNum={7} talotType={71} key="9" />} />
        <Route path="/temochi" element={<DisplayTalot apiClient={apiClient} cardNum={7} talotType={72} key="10" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

