const first = () => console.log('first');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third');

first();
setTimeout(second, 1000);
third();
