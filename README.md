VTS Display Talot
====
情報体占い師VTuber『まどいあきゅら』のタロットカード占い機能用ローカルWebアプリケーションです。

## 概要
実際に手元で実施したタロットカード占いの結果を画面上で入力することで、VTubeStudioと連動してカードの配置や表示が変化します
- セレクトボックスからカードを選び、正位置/逆位置を選択します
  - 直接文字を入力して検索も可能
  - 右上の「Shuffle!」ボタンでカード・正/逆をランダム設定
<img src="https://github.com/yhaduki/VTSDisplayTalot/blob/doc_resources/images/front.png" width="100%">
- 「表示」ボタンを押すと、対応するカードと向きが下部にイメージイラストとして表示され、同時にVTubeStudioのAPIに対応するパラメータを送信します
  - VTubeStudio側で受け取ったパラメータに応じてタロットカードが描画されます
 <img src="https://github.com/yhaduki/VTSDisplayTalot/blob/doc_resources/images/animewepb-15fps-960x640.webp" width="100%">
- 上部ヘッダーから占いの種類を選択できます。ヘッダーを選択すると対応する枚数が画面に表示され、同時にVTubeStudioに対応するパラメータを送信します
  - VTubeStudio側で、受け取ったパラメータに対応するカードの並べ方・枚数が描画されます
<img src="https://github.com/yhaduki/VTSDisplayTalot/blob/doc_resources/images/spread.jpg" width="100%">

## 事前準備
- 動作にはasset/cardsに01.png〜78.pngが必要です
  - 対応アルカナはConst.jsに記載
  - 160×266pxのサイズで表示されます
  - 画像ファイルが存在しない場合は文字で表示されます

## ビルド/動作確認
- distフォルダ内index.htmlを開くことで開発環境を構築していない環境でも動作します
- Webpackでbundle化することでローカル環境で動作する形にビルドしています
  - Build: ```docker-compose run --rm app sh -c 'npm run build'```

## バージョン/ライブラリ
- React 18.2.0
- [VTubeStudioJS](https://github.com/Hawkbat/VTubeStudioJS)

## Special Thanks
- [まどいあきゅら 様](https://www.youtube.com/channel/UCg993QrYho4WlkmvtNLPvVQ)
- [刀　彼方 様](https://in-tegral.org/)
