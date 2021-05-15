const CONVERION_BASE = 16.666666666667;

export const convertToKM = (number) => {
  if (typeof number === 'number') {
    const km = number / 1000;
    return km.toFixed(2);
  } else {
    return 'undefined';
  }
};

export const convertMinutes = (number) => {
  if (typeof number === 'number') {
    number = CONVERION_BASE / number;
    const minutes = Math.floor(number);
    const seconds = pad(Math.round((number - minutes) * 60), 2);
    const mmss = seconds !== 0 ? minutes + ':' + seconds : minutes;
    return mmss;
  } else {
    return 'undefined';
  }
};

export const convertSecondsToMMSSS = (number) => {
  if (typeof number === 'number') {
    number = number / 60;
    const minutes = Math.floor(number);
    const seconds = pad(Math.round((number - minutes) * 60), 2);
    const mmss = seconds !== 0 ? minutes + ':' + seconds : minutes;
    return mmss;
  } else {
    return '';
  }
};

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = '0' + num;
  return num;
}
