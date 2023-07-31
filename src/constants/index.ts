/* eslint-disable @typescript-eslint/no-explicit-any */
export const DEFAULT_SEARCH = "sonu nigam";

let timeId: any = 0;
export const debounceCell = (
  debFunction: any,
  time: number,
  value?: string
) => {
  if (timeId) {
    clearTimeout(timeId);
  }
  return new Promise(async (response) => {
    timeId = setTimeout(async () => {
      const res = await debFunction(value);
      response(res);
    }, time);
  });
};

export const throttle = (func: () => void, wait: number) => {
  let waiting = false;
  return function () {
    if (waiting) {
      return;
    }

    waiting = true;
    setTimeout(() => {
      func();
      waiting = false;
    }, wait);
  };
};
