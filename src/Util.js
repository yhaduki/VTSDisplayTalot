
import { options } from './Const.js';

// ランダム値
export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// valueをキー、セレクトボックスで設定するoptionを値にしたマップを返す
export function getOptionList() {
  return options
    .filter(option => option.options)
    .flatMap(option => option.options)
    .reduce((acc, option) => {
      acc[option.value] = option;
      return acc;
    }, {});
}