const wuhu = "aaaa";
console.log(wuhu);

type IFn = (num: number) => string;

const fun: IFn = (num) => num.toString();

fun(11);

module.exports = wuhu;
