// セレクトボックスの選択肢と対応するカード　fileを空欄にすれば何も表示しない
export const options = [
  { value: '0',  label: '(選択)', file: 'card_back.png' },
  {
    label : '大アルカナ',
    options : [
      { value: 1,  label: '魔術師', file: '01.png' },
      { value: 2,  label: '女教皇', file: '02.png' },
      { value: 3,  label: '女帝', file: '03.png' },
      { value: 4,  label: '皇帝', file: '04.png' },
      { value: 5,  label: '法王', file: '05.png' },
      { value: 6,  label: '恋人', file: '06.png' },
      { value: 7,  label: '戦車', file: '07.png' },
      { value: 8,  label: '力', file: '08.png' },
      { value: 9,  label: '隠者', file: '09.png' },
      { value: 10, label: '運命の輪', file: '10.png' },
      { value: 11, label: '正義', file: '11.png' },
      { value: 12, label: '刑死者', file: '12.png' },
      { value: 13, label: '死', file: '13.png' },
      { value: 14, label: '節制', file: '14.png' },
      { value: 15, label: '悪魔', file: '15.png' },
      { value: 16, label: '塔', file: '16.png' },
      { value: 17, label: '星', file: '17.png' },
      { value: 18, label: '月', file: '18.png' },
      { value: 19, label: '太陽', file: '19.png' },
      { value: 20, label: '審判', file: '20.png' },
      { value: 21, label: '世界', file: '21.png' },
      { value: 22, label: '愚者', file: '22.png' },
    ]
  },
  {
    label : '小アルカナ',
    options : [
      { value: 23, label: 'ワンドのA', file: '23.png' },
      { value: 24, label: 'ワンドの2', file: '24.png' },
      { value: 25, label: 'ワンドの3', file: '25.png' },
      { value: 26, label: 'ワンドの4', file: '26.png' },
      { value: 27, label: 'ワンドの5', file: '27.png' },
      { value: 28, label: 'ワンドの6', file: '28.png' },
      { value: 29, label: 'ワンドの7', file: '29.png' },
      { value: 30, label: 'ワンドの8', file: '30.png' },
      { value: 31, label: 'ワンドの9', file: '31.png' },
      { value: 32, label: 'ワンドの10', file: '32.png' },
      { value: 33, label: 'ワンドのペイジ', file: '33.png' },
      { value: 34, label: 'ワンドのナイト', file: '34.png' },
      { value: 35, label: 'ワンドのクイーン', file: '35.png' },
      { value: 36, label: 'ワンドのキング', file: '36.png' },
      { value: 37, label: 'ペンタクルのA', file: '37.png' },
      { value: 38, label: 'ペンタクルの2', file: '38.png' },
      { value: 39, label: 'ペンタクルの3', file: '39.png' },
      { value: 40, label: 'ペンタクルの4', file: '40.png' },
      { value: 41, label: 'ペンタクルの5', file: '41.png' },
      { value: 42, label: 'ペンタクルの6', file: '42.png' },
      { value: 43, label: 'ペンタクルの7', file: '43.png' },
      { value: 44, label: 'ペンタクルの8', file: '44.png' },
      { value: 45, label: 'ペンタクルの9', file: '45.png' },
      { value: 46, label: 'ペンタクルの10', file: '46.png' },
      { value: 47, label: 'ペンタクルのペイジ', file: '47.png' },
      { value: 48, label: 'ペンタクルのナイト', file: '48.png' },
      { value: 49, label: 'ペンタクルのクイーン', file: '49.png' },
      { value: 50, label: 'ペンタクルのキング', file: '50.png' },
      { value: 51, label: 'ソードのA', file: '51.png' },
      { value: 52, label: 'ソードの2', file: '52.png' },
      { value: 53, label: 'ソードの3', file: '53.png' },
      { value: 54, label: 'ソードの4', file: '54.png' },
      { value: 55, label: 'ソードの5', file: '55.png' },
      { value: 56, label: 'ソードの6', file: '56.png' },
      { value: 57, label: 'ソードの7', file: '57.png' },
      { value: 58, label: 'ソードの8', file: '58.png' },
      { value: 59, label: 'ソードの9', file: '59.png' },
      { value: 60, label: 'ソードの10', file: '60.png' },
      { value: 61, label: 'ソードのペイジ', file: '61.png' },
      { value: 62, label: 'ソードのナイト', file: '62.png' },
      { value: 63, label: 'ソードのクイーン', file: '63.png' },
      { value: 64, label: 'ソードのキング', file: '64.png' },
      { value: 65, label: 'カップのA', file: '65.png' },
      { value: 66, label: 'カップの2', file: '66.png' },
      { value: 67, label: 'カップの3', file: '67.png' },
      { value: 68, label: 'カップの4', file: '68.png' },
      { value: 69, label: 'カップの5', file: '69.png' },
      { value: 70, label: 'カップの6', file: '70.png' },
      { value: 71, label: 'カップの7', file: '71.png' },
      { value: 72, label: 'カップの8', file: '72.png' },
      { value: 73, label: 'カップの9', file: '73.png' },
      { value: 74, label: 'カップの10', file: '74.png' },
      { value: 75, label: 'カップのペイジ', file: '75.png' },
      { value: 76, label: 'カップのナイト', file: '76.png' },
      { value: 77, label: 'カップのクイーン', file: '77.png' },
      { value: 78, label: 'カップのキング', file: '78.png' },
    ] 
  }
];

// 各カード上部の説明書き
export const sevenSelect = [
    { 'idx' : '1', 'label' : '1'},
    { 'idx' : '2', 'label' : '2'},
    { 'idx' : '3', 'label' : '3'},
    { 'idx' : '4', 'label' : '4'},
    { 'idx' : '5', 'label' : '5'},
    { 'idx' : '6', 'label' : '6'},
    { 'idx' : '7', 'label' : '7'},
];

// ページリスト
export const pageList = {
  10: { 'path' : '/one', 'name' : '1: One', 'talotHotkey' : 'one_oracle'},
  20: { 'path' : '/twooracle', 'name' : '2: TwoOracle', 'talotHotkey' : 'two_ocale'},
  21: { 'path' : '/twomind', 'name' : '2: TwoMind', 'talotHotkey' : 'two_mind'},
  22: { 'path' : '/twoCross', 'name' : '2: SimpleCross', 'talotHotkey' : 'simple_cross'},
  30: { 'path' : '/three', 'name' : '3: Three', 'talotHotkey' : 'three_card'},
  40: { 'path' : '/four', 'name' : '4: Four', 'talotHotkey' : 'four_elements'},
  70: { 'path' : '/hexagram', 'name' : '7: Hexagram', 'talotHotkey' : 'hexagram'},
  71: { 'path' : '/horse', 'name' : '7: Horseshoe', 'talotHotkey' : 'horseshoe'},
  72: { 'path' : '/temochi', 'name' : 'Temochi', 'talotHotkey' : 'card_having'},
};

// セレクト状態のデフォルト値
export const initSelection = {
  options: [options[0], options[0], options[0], options[0], options[0], options[0], options[0]],
  rotations: ['n', 'n', 'n', 'n', 'n', 'n', 'n'],
};

// 動的に変化するクラスを読み込ませる
export const gridColsList = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
};