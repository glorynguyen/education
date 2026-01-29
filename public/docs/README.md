# 🗺️ Trip Timeline - Ứng dụng Lịch Trình Du Lịch

## Giới thiệu

Trip Timeline là ứng dụng web giúp nhóm bạn bè/gia đình lên kế hoạch và theo dõi lịch trình chuyến đi. Ứng dụng hỗ trợ real-time sync, quản lý hình ảnh, và giao diện thân thiện trên mobile.

### Demo hiện tại
- **Dalat Trip 2026** - Chuyến đi Đà Lạt của Team Vinh

## Tính năng chính

### ✅ Đã hoàn thành
| Tính năng | Mô tả |
|-----------|-------|
| Timeline theo ngày | Hiển thị lịch trình theo từng ngày với tabs |
| Nhóm theo thời gian | Các hoạt động cùng giờ được gom lại, scroll ngang |
| Real-time sync | Dữ liệu đồng bộ tức thì qua Firebase |
| Quản lý hình ảnh | Upload, xem carousel, zoom, xóa ảnh |
| Nén ảnh tự động | Giảm dung lượng ảnh trước khi lưu DB |
| Admin mode | Chế độ chỉnh sửa cho người quản trị |
| Google Login | Đăng nhập bằng tài khoản Google |
| Link bản đồ | Tự động detect URL và tạo nút xem bản đồ |
| Responsive | Giao diện tối ưu cho mobile |
| **Offline Support** | Xem lịch trình khi mất mạng (Service Worker + localStorage) |
| **Pull to Refresh** | Kéo xuống để làm mới dữ liệu trên mobile |
| **PWA Ready** | Có thể cài đặt như ứng dụng trên điện thoại |

### 🚧 Đang phát triển
- Xem [ROADMAP.md](./ROADMAP.md) để biết các tính năng sắp tới

## Cài đặt & Triển khai

### Yêu cầu
- Firebase project với Realtime Database
- Firebase Authentication (Google provider)

### Cấu hình Firebase
1. Tạo project tại [Firebase Console](https://console.firebase.google.com)
2. Enable Realtime Database
3. Enable Authentication > Google provider
4. Copy config vào file HTML:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### Database Rules
```json
{
  "rules": {
    "trips": {
      "$tripId": {
        ".read": true,
        ".write": "auth != null && auth.token.email == 'YOUR_ADMIN_EMAIL@gmail.com'"
      }
    }
  }
}
```

### Triển khai
Có thể deploy lên:
- GitHub Pages
- Firebase Hosting
- Netlify
- Vercel

## Sử dụng

### Người dùng thường
1. Mở trang web
2. Chọn tab ngày muốn xem
3. Click vào hoạt động để xem chi tiết và hình ảnh
4. Click vào ảnh để zoom

### Admin
1. Click "Vinh Login" để đăng nhập
2. Click "Edit Mode" để bật chế độ chỉnh sửa
3. Sử dụng nút "+" để thêm hoạt động mới
4. Click "SỬA" hoặc "XÓA" trên mỗi hoạt động
5. Trong popup chi tiết, có thể upload/xóa ảnh

## Cấu trúc dữ liệu

```
trips/
└── dalat/
    └── timeline/
        └── {eventId}/
            ├── day: "Sat" | "Sun" | "Mon"
            ├── time: "HH:MM"
            ├── title: "Tên hoạt động"
            ├── desc: "Mô tả (có thể chứa URL)"
            └── images: ["base64...", "base64..."]
```

## Đóng góp

Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết cách đóng góp vào dự án.

## License

MIT License - Tự do sử dụng và chỉnh sửa.
