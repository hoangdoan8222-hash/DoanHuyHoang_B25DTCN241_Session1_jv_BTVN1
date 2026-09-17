"use strict";

const values = ["150000", "3.75", "", "100k", null, undefined];

console.log(`================ KẾT QUẢ ÉP KIỂU ================
Giá trị        | Number() | +value   | Kiểu Number | Kiểu +value
---------------------------------------------------------------`);

values.forEach(value => {
    const numberValue = Number(value);
    const unaryValue = +value;

    console.log(`${String(value)} | ${numberValue} | ${unaryValue} | ${typeof numberValue} | ${typeof unaryValue}`);
});

console.log(`===================================================`);