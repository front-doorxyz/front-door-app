import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convert(val: number, threshoold = 9999) {
  if (val <= threshoold) {
    return val;
  }
  // Thousands, millions, billions etc..
  let s = ['', 'k', 'm', 'b', 't'];

  // Dividing the value by 3.
  let sNum = Math.floor(('' + val).length / 3);

  // Calculating the precised value.
  let sVal: string | number = parseFloat(
    (sNum != 0 ? val / Math.pow(1000, sNum) : val).toPrecision(2)
  );

  if (sVal % 1 != 0) {
    sVal = sVal.toFixed(1);
  }

  // Appending the letter to precised val.
  return sVal + s[sNum];
}

export function formatDaysAgo(value: string, locale?: string) {
  const [day, month, year] = value.split('/');

  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
  const formatter = new Intl.RelativeTimeFormat(locale);
  return formatter.format(Math.round(deltaDays), 'days');
}
