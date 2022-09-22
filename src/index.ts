// eslint-disable-next-line no-console

//interface grapped from task 5
interface obj {
  [a: string]: { cvalue: number | string | undefined | obj } | undefined;
}

function summ(a: obj) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem === undefined) return 2021;
    if (typeof elem?.cvalue === 'string') return +elem.cvalue || '2021';
    if (typeof elem?.cvalue === 'object') return summ(elem.cvalue);
    return elem?.cvalue;
  });
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i] as number;
  }
  return sum;
}
const v = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

console.log(summ(v));

const b = {
  hello: { cvalue: 1 },
  world: {
    cvalue: {
      yay: { cvalue: '2' },
      grgr: { cvalue: 5 },
      grr: { cvalue: '1000' },
    },
  },
};

console.log(summ(b));
