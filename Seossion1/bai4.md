# Thiết kế Bảng Dự toán Ngân sách Tiệc Sinh nhật Cá nhân

## 1. Danh mục biến số

| Biến | Kiểu dữ liệu | Đơn vị | Giá trị mẫu |
|---|---|---|---:|
| partyHost | String | Người | Nguyen Van An |
| venueCost | Number | VND | 1,500,000 |
| foodCostPerGuest | Number | VND/người | 180,000 |
| guestCount | Number | Người | 10 |
| drinkCost | Number | VND | 800,000 |
| decorCost | Number | VND | 700,000 |
| targetBudget | Number | VND | 5,000,000 |

## 2. Công thức

### Tổng tiền đồ ăn

`foodTotal = foodCostPerGuest * guestCount`

`180000 * 10 = 1800000 VND`

### Tổng chi phí

`totalPartyCost = venueCost + foodTotal + drinkCost + decorCost`

`1500000 + 1800000 + 800000 + 700000 = 4800000 VND`

### Chi phí bình quân

`costPerGuest = totalPartyCost / guestCount`

`4800000 / 10 = 480000 VND/người`

### Chênh lệch ngân sách

`budgetVariance = targetBudget - totalPartyCost`

`5000000 - 4800000 = 200000 VND`

## 3. Test Cases

### TC01 - Thay đổi số lượng khách

Số khách thay đổi từ 10 lên 12.

- Tiền đồ ăn: `180000 * 12 = 2160000 VND`
- Tổng chi phí: `5160000 VND`
- Chi phí/người: `430000 VND`
- Chênh lệch ngân sách: `-160000 VND`

### TC02 - Thay đổi ngân sách

Giữ nguyên 10 khách và thay ngân sách từ 5,000,000 lên 6,000,000 VND.

- Tổng chi phí: `4800000 VND`
- Chi phí/người: `480000 VND`
- Chênh lệch ngân sách: `1200000 VND`

## 4. Kết quả ban đầu

Với 10 khách và ngân sách 5,000,000 VND:

- Tổng chi phí: 4,800,000 VND
- Chi phí bình quân: 480,000 VND/người
- Chênh lệch ngân sách: 200,000 VND

## 5. Kiểm thử

Mở `index.html` bằng Google Chrome hoặc Microsoft Edge.

Nhấn `F12` → `Console` để xem bảng dự toán.

Không sử dụng Terminal.