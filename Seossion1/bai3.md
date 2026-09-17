# Phân tích Trade-off: Number() vs Unary Plus (+value)

## 1. Mục tiêu

So sánh hai phương pháp chuyển chuỗi sang số trong JavaScript:

- `Number(value)`
- `+value`

Thử nghiệm với dữ liệu số nguyên, số thực, chuỗi rỗng, chuỗi chứa chữ cái, `null` và `undefined`.

## 2. Kết quả thực nghiệm

| Dữ liệu | Number() | +value |
|---|---:|---:|
| "150000" | 150000 | 150000 |
| "3.75" | 3.75 | 3.75 |
| "" | 0 | 0 |
| "100k" | NaN | NaN |
| null | 0 | 0 |
| undefined | NaN | NaN |

Cả hai phương pháp đều trả về kiểu `number`.

## 3. Phân tích Trade-off

| Tiêu chí | Number() | +value |
|---|---|---|
| Dễ đọc & rõ ý định | Cao, thể hiện rõ đang ép kiểu | Ngắn gọn nhưng dễ gây nhầm |
| Nguy cơ nhầm lẫn cú pháp | Thấp | Cao hơn, đặc biệt khi viết `subtotal + +fee` |
| Chuỗi kèm đơn vị | Không bóc tách `"100k"` | Không bóc tách `"100k"` |
| Độ ngắn gọn | Trung bình | Cao |

## 4. Lưu ý về chuỗi có đơn vị

`Number("100k")` và `+"100k"` đều trả về `NaN`.

Nếu cần lấy phần số từ chuỗi thì có thể dùng:

`parseInt("100k", 10)` → `100`

Tuy nhiên, `parseInt()` có hành vi khác với `Number()` và `+value`, vì nó có thể đọc phần số ở đầu chuỗi.

## 5. Kết luận

Đề xuất sử dụng `Number()` làm quy chuẩn chung cho dự án.

Lý do:

- Dễ đọc.
- Rõ ràng với lập trình viên mới.
- Thể hiện trực tiếp mục đích chuyển đổi kiểu dữ liệu.
- Giảm nguy cơ nhầm lẫn với toán tử cộng.
- Phù hợp với mã nguồn cần bảo trì lâu dài.

Toán tử `+value` vẫn có thể sử dụng khi cần viết ngắn và ngữ cảnh rõ ràng.

## 6. Kiểm thử

Mở `index.html` bằng Chrome hoặc Microsoft Edge.

Nhấn `F12` → `Console` để xem bảng kết quả.

Không sử dụng Terminal.