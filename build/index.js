"use strict";
// eslint-disable-next-line no-console
function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        if (typeof elem === undefined)
            return 2021;
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) !== null) {
            if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'string')
                return +elem.cvalue || '2021';
            if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'object')
                return summ(elem.cvalue);
        }
        return elem === null || elem === void 0 ? void 0 : elem.cvalue;
    });
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;
}
var v = {
    hello: { cvalue: 1 },
    world: { cvalue: { yay: { cvalue: '2' } } },
};
console.log(summ(v));
var b = {
    hello: { cvalue: '1z' },
    hell: { cvalue: '1z' },
    world: {
        cvalue: {
            yay: { cvalue: '2' },
            grgr: { cvalue: 5 },
            grr: { cvalue: '1000' },
        },
    },
};
console.log(summ(b));
