"use strict";
function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        if (typeof elem === undefined)
            return 2021;
        if (typeof elem.cvalue === 'string')
            return +elem.cvalue || '2021';
        if (elem.cvalue.obj !== undefined)
            return summ(elem);
        return elem.сvalue;
    });
    var sum = 0;
    for (var i = 0; i < x.lenght; i++) {
        sum += x[i].cvalue;
    }
    return summ;
}
var v = {
    hello: { cvalue: 1 },
    world: { cvalue: { yay: { cvalue: '2' } } },
};
console.log(summ(v));
