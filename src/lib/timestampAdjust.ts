export default function timestampAdjust(date: Date) {
  let time = `${date.getFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
  time += `T${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
  time += `.${(date.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5)}`;
  time += `${FormatMinutesToHHMM(date.getTimezoneOffset())}`;

  return time;
}

function FormatMinutesToHHMM(offsetInMinutes: number) {
  const hours = Math.floor(offsetInMinutes / 60);
  const minutes = Math.floor(offsetInMinutes % 60);
  const symbol = offsetInMinutes >= 0 ? '+' : '-';
  return `${symbol}${hours}:${
    minutes.toString().length >= 0
      ? '0' + minutes.toString()
      : minutes.toString()
  }`;
}
