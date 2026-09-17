# Dò vết Thứ tự Ưu tiên Toán tử trong Tính Cước Combo

## 1. Phân tích lỗi

Biểu thức ban đầu:

`rawBaseDeliveryFee + rawDeliveryDistance * 4000`

Trong JavaScript, toán tử `*` có độ ưu tiên cao hơn `+`.

Vì vậy biểu thức được thực hiện theo thứ tự:

`"16000" + ("3.2" * 4000)`

Phép nhân chuyển `"3.2"` thành số:

`3.2 * 4000 = 12800`

Sau đó thực hiện:

`"16000" + 12800`

Do `"16000"` vẫn là chuỗi nên toán tử `+` thực hiện nối chuỗi:

`"1600012800"`

Đây là nguyên nhân làm phí giao hàng và tổng thanh toán bị sai.

## 2. Cách sửa

Chuyển dữ liệu chuỗi sang kiểu Number trước khi tính:

`Number(rawBaseDeliveryFee)`

`Number(rawDeliveryDistance)`

Khi đó:

`16000 + 3.2 * 4000`

`= 16000 + 12800`

`= 28800 VND`

## 3. Tính toán kết quả đúng

Tiền món:

`45000 * 2 = 90000 VND`

Chiết khấu:

`90000 * 10 / 100 = 9000 VND`

Tiền món sau giảm:

`90000 - 9000 = 81000 VND`

Phí giao hàng:

`16000 + 3.2 * 4000 = 28800 VND`

Tổng thanh toán:

`81000 + 28800 = 109800 VND`

## 4. Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 - Combo 2 món | 45000, 2, 3.2 km, giảm 10% | Phí giao hàng: 1600012800 VND; Tổng: 1600093800 VND | Phí giao hàng: 28800 VND; Tổng: 109800 VND |
| TC02 - Thay đổi khoảng cách | 45000, 2, 5 km, giảm 10% | Phí giao hàng: 1600020000 VND; Tổng: 1600101000 VND | Phí giao hàng: 36000 VND; Tổng: 117000 VND |

## 5. Kết quả Console

Tiền món sau giảm: 81000 VND

Phí giao hàng: 28800 VND

Tổng thanh toán: 109800 VND

## 6. Kết luận

Lỗi xuất phát từ việc dữ liệu phí cơ bản vẫn là chuỗi ký tự. Mặc dù phép nhân được thực hiện trước do thứ tự ưu tiên toán tử, kết quả sau đó bị nối với chuỗi bởi toán tử `+`.

Sử dụng `Number()` trước khi tính toán giúp đảm bảo tất cả dữ liệu tài chính được xử lý dưới dạng số.