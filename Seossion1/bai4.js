"use strict";

const partyHost = "Nguyen Van An";
const venueCost = 1500000;
const foodCostPerGuest = 180000;
const guestCount = 10;
const drinkCost = 800000;
const decorCost = 700000;
const targetBudget = 5000000;

const foodTotal = foodCostPerGuest * guestCount;
const totalPartyCost = venueCost + foodTotal + drinkCost + decorCost;
const costPerGuest = totalPartyCost / guestCount;
const budgetVariance = targetBudget - totalPartyCost;

console.log(`================ DỰ TOÁN TIỆC SINH NHẬT ================
Chủ nhân bữa tiệc       : ${partyHost}
Phí thuê địa điểm       : ${venueCost.toLocaleString()} VND
Tiền đồ ăn              : ${foodTotal.toLocaleString()} VND
Tiền đồ uống            : ${drinkCost.toLocaleString()} VND
Trang trí & bánh kem    : ${decorCost.toLocaleString()} VND
-----------------------------------------------------------
TỔNG CHI PHÍ            : ${totalPartyCost.toLocaleString()} VND
CHI PHÍ / KHÁCH         : ${costPerGuest.toLocaleString()} VND
CHÊNH LỆCH NGÂN SÁCH   : ${budgetVariance.toLocaleString()} VND
NGÂN SÁCH DỰ KIẾN      : ${targetBudget.toLocaleString()} VND
===========================================================`);