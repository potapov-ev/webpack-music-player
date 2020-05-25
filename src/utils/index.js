export const formatTime = (time) => {
  if (time) {
    const show = (num, size) => ('0' + num).slice(size * -1);
    time = parseFloat(time);
    //const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = Math.floor(time - minutes * 60);

    return show(minutes, 2) + ':' + show(seconds, 2);
  }
};