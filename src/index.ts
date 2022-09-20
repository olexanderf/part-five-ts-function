// eslint-disable-next-line no-console
interface obj {
  [a: string]: { cvalue: number | string | undefined | obj } | undefined;
}

function summ(a: obj) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem === undefined) return 2021;
    if (typeof elem?.cvalue === 'string') return +elem.cvalue || '2021';
    if (typeof elem?.cvalue !== undefined) return summ(elem);
    return elem.сvalue;
  });

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i].cvalue;
  }
  return sum;
}

const v = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

console.log(summ(v));
