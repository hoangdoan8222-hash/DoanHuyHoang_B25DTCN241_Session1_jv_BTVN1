# Xây dựng Script Quyết toán Hóa đơn Đặt món Tuyến tính

## 1. Mục tiêu

Xây dựng chương trình JavaScript tính hóa đơn đặt món theo trình tự tuyến tính.

Chương trình sử dụng `Number()` và `parseFloat()` để chuyển dữ liệu chuỗi sang kiểu số trước khi tính toán.

## 2. Công thức

- Tiền món ăn:
  `(mainDishPrice + drinkPrice) * quantity`

- Tiền sau chiết khấu:
  `foodSubtotal - openingDiscount`

- VAT:
  `discountedTotal * vatRate`

- Cước vận chuyển:
  `15000 + distanceKm * 4000`

- Tổng thanh toán:
  `discountedTotal + vatAmount + shippingFee`

## 3. Kết quả ban đầu

Dữ liệu:

- Giá món chính: 120000 VND
- Giá đồ uống: 35000 VND
- Số lượng: 2
- Khoảng cách: 3.5 km
- Chiết khấu: 20000 VND
- VAT: 8%

Kết quả:

- Tiền món ăn: 310000 VND
- Chiết khấu: 20000 VND
- Sau chiết khấu: 290000 VND
- VAT: 23200 VND
- Cước vận chuyển: 29000 VND
- Tổng thanh toán: 342200 VND

## 4. Test Cases

| Test Case | Dữ liệu thay đổi | Kết quả mong đợi |
|---|---|---:|
| TC01 | rawDistanceKm = "5.0" | Tổng thanh toán = 348200 VND |
| TC02 | rawQuantity = "3" | Tổng thanh toán = 492200 VND |

### TC01

Khoảng cách thay đổi từ 3.5 km thành 5.0 km.

Cước vận chuyển:

`15000 + 5 * 4000 = 35000 VND`

Tổng thanh toán:

`290000 + 23200 + 35000 = 348200 VND`

### TC02

Số lượng thay đổi từ 2 thành 3.

Tiền món ăn:

`(120000 + 35000) * 3 = 465000 VND`

Sau chiết khấu:

`465000 - 20000 = 445000 VND`

VAT:

`445000 * 8% = 35600 VND`

Cước vận chuyển:

`29000 VND`

Tổng thanh toán:

`445000 + 35600 + 29000 = 509600 VND`

## 5. Kiểm thử

Mở file `index.html` bằng Google Chrome hoặc Microsoft Edge.

Nhấn `F12` → chọn tab `Console` để xem hóa đơn.

Không sử dụng Terminal để chạy chương trình.