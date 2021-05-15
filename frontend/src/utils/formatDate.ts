import { format, parseISO, subHours } from 'date-fns';
import formatDuration from 'date-fns/formatDuration';
import addSeconds from 'date-fns/addSeconds';

const DATE_FORMAT = 'dd. MM. yyyy';
const DATETIME_FORMAT = 'dd. MM. yyyy HH:mm';
const TIME_FORMAT = 'HH:mm:ss';
const HHMM_FORMAT = 'HH:mm';

const SECONDS_PER_DAY = 86400;
const HOURS_PER_DAY = 24;

export const formatDate = (dateOrStringDate) => {
  let parsedDate = dateOrStringDate;

  if (typeof dateOrStringDate === 'string') {
    parsedDate = parseISO(dateOrStringDate);
  }
  return format(parsedDate, DATE_FORMAT);
};

export const formatDateTime = (dateOrStringDate) => {
  let parsedDate = dateOrStringDate;
  if (
    typeof dateOrStringDate === 'string' &&
    dateOrStringDate !== 'undefined'
  ) {
    parsedDate = parseISO(dateOrStringDate);
    return format(parsedDate, DATETIME_FORMAT);
  } else {
    return 'undefined';
  }
};

export const formatDurationTime = (duration) => {
  let parsedTime = duration;
  if (
    (typeof duration === 'number' || typeof duration === 'string') &&
    duration !== 'undefined'
  ) {
    return formatDuration(
      { seconds: parsedTime },
      { format: ['hours', 'weekminutes', 'seconds'] },
    );
  } else {
    return 'undefined';
  }
};

export const formatSecondsToTime = (seconds) => {
  if (typeof seconds === 'number') {
    return format(subHours(addSeconds(new Date(0), seconds), 1), TIME_FORMAT);
  } else {
    return 'undefined';
  }
};

export const formatSecondsToHhMm = (seconds) => {
  if (typeof seconds === 'number') {
    return format(subHours(addSeconds(new Date(0), seconds), 1), HHMM_FORMAT);
  } else {
    return '';
  }
};

export const secondsToHms = (seconds, format) => {
  const days = Math.floor(seconds / SECONDS_PER_DAY);
  const remainderSeconds = seconds % SECONDS_PER_DAY;
  let hms;
  if (typeof format === 'undefined' || !format || format === 'hms') {
    hms = new Date(remainderSeconds * 1000).toISOString().substring(11, 19);
  } else if (format === 'hm') {
    hms = new Date(remainderSeconds * 1000).toISOString().substring(11, 16);
  }
  return hms.replace(/^(\d+)/, (h) =>
    `${Number(h) + days * HOURS_PER_DAY}`.padStart(2, '0'),
  );
};
