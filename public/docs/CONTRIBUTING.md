# Contributing Guide

## Cách đóng góp vào dự án

### Quy trình phát triển

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/trip-timeline.git
   cd trip-timeline
   ```

2. **Tạo branch mới**
   ```bash
   git checkout -b feature/ten-tinh-nang
   # hoặc
   git checkout -b fix/ten-bug
   ```

3. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: mô tả tính năng"
   ```

4. **Push & Create PR**
   ```bash
   git push origin feature/ten-tinh-nang
   ```

### Commit Convention

Sử dụng [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Mô tả |
|------|-------|
| `feat` | Tính năng mới |
| `fix` | Sửa bug |
| `docs` | Cập nhật documentation |
| `style` | Format code (không thay đổi logic) |
| `refactor` | Refactor code |
| `test` | Thêm/sửa tests |
| `chore` | Công việc maintenance |

**Ví dụ:**
```
feat(timeline): add event duration display
fix(image): resolve zoom not working on mobile
docs: update README with setup instructions
```

### Code Style

#### HTML
- Indent: 4 spaces
- Sử dụng semantic HTML5 tags
- Class names theo Tailwind conventions

#### JavaScript
- ES6+ syntax
- Camel case cho functions và variables
- Async/await thay vì callbacks
- Comments cho logic phức tạp

#### CSS (Tailwind)
- Mobile-first approach
- Sử dụng Tailwind utilities
- Custom CSS chỉ khi cần thiết
- Group related classes theo thứ tự: layout → spacing → typography → colors → effects

### Testing

Trước khi submit PR, kiểm tra:

- [ ] Hoạt động trên Chrome, Safari, Firefox
- [ ] Responsive trên mobile (iPhone SE, iPhone 12, Android)
- [ ] Không có console errors
- [ ] Các tính năng hiện tại vẫn hoạt động

### Pull Request Checklist

- [ ] Branch được tạo từ `main` mới nhất
- [ ] Commit messages tuân theo convention
- [ ] Code đã được test
- [ ] Cập nhật documentation nếu cần
- [ ] Screenshots cho UI changes

### Reporting Issues

Khi tạo issue, bao gồm:

1. **Mô tả rõ ràng** - Bug là gì hoặc tính năng muốn thêm
2. **Steps to reproduce** (cho bugs)
3. **Expected vs Actual behavior**
4. **Screenshots/Videos** nếu có
5. **Device & Browser info**

### Development Setup

#### Chạy local
1. Mở file `dalat.html` trực tiếp trong browser
2. Hoặc dùng local server:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve .
   ```

#### Firebase Emulator (tùy chọn)
```bash
npm install -g firebase-tools
firebase init emulators
firebase emulators:start
```

### Liên hệ

- **Email**: nguyenbavinhcntt@gmail.com
- **GitHub Issues**: Tạo issue mới

Cảm ơn bạn đã đóng góp! 🙏
