# Dò vết & Sửa lỗi Nối chuỗi trong Tính Tiền Hóa đơn

## 1. Phân tích lỗi

Dữ liệu `rawFoodPrice`, `rawToppingPrice` và `rawDeliveryFee` được tiếp nhận dưới dạng chuỗi ký tự.

Ở mã nguồn ban đầu:

`rawFoodPrice + rawToppingPrice`

tương đương:

`"55000" + "15000"`

JavaScript thực hiện nối chuỗi nên kết quả là:

`"5500015000"`

Sau đó:

`foodTotal + rawDeliveryFee`

tiếp tục nối chuỗi:

`"5500015000" + "20000"`

kết quả:

`"550001500020000"`

Vì vậy hóa đơn bị sai.

## 2. Nguyên nhân

Toán tử `+` trong JavaScript có thể thực hiện phép cộng số hoặc nối chuỗi.

Khi một trong các toán hạng là chuỗi, phép `+` có thể thực hiện nối chuỗi thay vì phép cộng số học.

## 3. Cách sửa

Sử dụng `Number()` để ép kiểu tường minh:

- `Number(rawFoodPrice)` → 55000
- `Number(rawToppingPrice)` → 15000
- `Number(rawDeliveryFee)` → 20000

Sau khi chuyển sang kiểu Number, các phép tính được thực hiện chính xác:

`55000 + 15000 = 70000`

`70000 + 20000 - 10000 = 80000`

## 4. Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 - Tổng tiền món ăn | rawFoodPrice = "55000", rawToppingPrice = "15000" | "5500015000" VND | 70000 VND |
| TC02 - Tổng thanh toán | Food = "55000", Topping = "15000", Delivery = "20000", Voucher = 10000 | "550001500020000" VND | 80000 VND |

## 5. Kết quả Console

Khách hàng: Nguyen Thi Mai

Món ăn: Com Tam Suon Bi Cha

Tổng tiền món ăn: 70000 VND

Số tiền thanh toán thực tế: 80000 VND

## 6. Kết luận

Lỗi xảy ra do dữ liệu giá tiền ban đầu là chuỗi ký tự. Việc sử dụng `Number()` giúp chuyển dữ liệu sang kiểu số trước khi thực hiện phép tính, đảm bảo kết quả hóa đơn chính xác.