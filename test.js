function getStringTime(time) {
  //get seconds
  const year = parseInt(time / (3600 * 24 * 365));
  time = time - year * 3600 * 24 * 365;
  const month = parseInt(time / (3600 * 24 * 30));
  time = time - month * 3600 * 24 * 30;
  const day = parseInt(time / (3600 * 24));
  time = time - day * 3600 * 24;
  const hour = parseInt(time / 3600);
  time = time - hour * 3600;
  const min = parseInt(time / 60);
  time = time - min * 60;
  const sec = time;
  return `${year}y ${month}m ${day}d ${hour}h ${min}m ${sec}s ago`;
}

console.log(getStringTime(3213531));
