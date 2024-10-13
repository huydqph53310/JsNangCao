const storedUser = localStorage.getItem('user'); // Đặt tên biến khác
const body = document.querySelector('body');

if (storedUser) {
    const user = JSON.parse(storedUser); // Khai báo một biến mới để chứa dữ liệu đã phân tích
    console.log(user.user);
    if (user.role.role !== "admin") {
        body.innerHTML = "Bạn không có quyền :)";
    }
} else {
    body.innerHTML = "Bạn không có quyền truy cập";
}
