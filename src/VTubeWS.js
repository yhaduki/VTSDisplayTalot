/* 
 * 仕様
 * リセットボタン：デフォルトの待機状態（LControl+D）＋全ての表情をリセット（LShift+R）
 * ヘッダ部の画面切り替え：リセット＋対応するカードの並びを出す（LControl+1,2,M,...）
 * 表示ボタン：
 *   Param_arcana_digit1,2,Param_card_deg→画面で設定した値
 *   Param_card_app→-1
 *   指定カード消失モーション（LShift+1〜7）
 *   アルカナを表示専用カード出現モーション（LShift+A）
 * OKボタン（表示ボタンを押すと表示）
 *   アルカナを表示専用カード出現モーション（LShift+A）※状態解除のため
 *   Param_card_app→1
 * 
 */

import { ApiClient } from "vtubestudio";

export const live2DParamList = {
  "Param_card_X" : {
    "explanation" : "カード座標X",
    "min" : "-1.0",
    "max" : "1.0",
    "defaultValue" : "0.0",
  },
  "Param_card_Y" : {
    "explanation" : "カード座標X",
    "min" : "-1.0",
    "max" : "1.0",
    "defaultValue" : "0.0",
  },
  "Param_arcana_digit2" : {
    "explanation" : "カード番号2桁目",
    "min" : "0.0",
    "max" : "7.0",
    "defaultValue" : "0.0",
  },
  "Param_arcana_digit1" : {
    "explanation" : "カード番号1桁目",
    "min" : "0.0",
    "max" : "9.0",
    "defaultValue" : "0.0",
  },
  "Param_card_deg" : {
    "explanation" : "XY平面回転",
    "min" : "-1.0",
    "max" : "1.0",
    "defaultValue" : "0.0",
  },
  "Param_card_turnX" : {
    "explanation" : "カード回転X",
    "min" : "-1.0",
    "max" : "1.0",
    "defaultValue" : "0.0",
  },
  "Param_card_turnY" : {
    "explanation" : "カード回転Y",
    "min" : "-1.0",
    "max" : "1.0",
    "defaultValue" : "0.0",
  },
  "Param_card_app" : {
    "explanation" : "-1アルカナ・1裏",
    "min" : "-1.0",
    "max" : "1.0",
    "defaultValue" : "1.0",
  },
};

export const initApiClient = () => new ApiClient({
  authTokenGetter: () => localStorage.getItem('VTS.JS_TEST_AUTH_TOKEN'),
  authTokenSetter: (authenticationToken) => localStorage.setItem('VTS.JS_TEST_AUTH_TOKEN', authenticationToken),
  pluginDeveloper: 'mako',
  pluginName: 'DisplayTalotApp',
});

// カスタムパラメーターの登録・更新　恒久的な値の変更にはdefaultValueを更新する
// ※injectParameterDataは1秒に1回再送信しないとデフォルト値に戻る
export function setCustomParam(apiClient, key, val) {
  if (apiClient.isConnected) {
    apiClient.parameterCreation({
      "parameterName": key,
      "explanation": live2DParamList[key]['explanation'],
      "min": live2DParamList[key]['min'],
      "max": live2DParamList[key]['max'],
      "defaultValue": val
    }).then((res) => {
      console.log(`success ${res.parameterName}`);
    });
  }
}

// カスタムパラメーター初期投入
export function initParam(apiClient) {
  Object.entries(live2DParamList).map(([key, val]) => {
    setCustomParam(apiClient, key, val.defaultValue);
  });
}