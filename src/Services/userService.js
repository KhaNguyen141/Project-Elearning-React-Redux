import { restConnector } from ".";
import { settings } from "../Config/settings";

class UserService {
    userLoginAction(userLogin) {
        return restConnector({
            method: "POST",
            url: "/api/quanlynguoidung/dangnhap",
            data: userLogin,
        });
    }

    userRegisterAction(userRegister) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyNguoiDung/DangKy",
            data: userRegister
        });
    }

    userProfileUpdate(userProfileUpdate) {
        return restConnector({
            method: "PUT",
            url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            header: { 
              'Authorization': "Bearer " + settings.token },
            data: userProfileUpdate,
        });
    }

    userAddCourse(userAddCourse) {
        return restConnector({
            method: "PUT",
            url: "/api/QuanLyKhoaHoc/DangKyKhoaHoc",
            header: { 
              'Authorization': "Bearer " + settings.token },
            data: userAddCourse,
        });
    }
    
}

export default UserService;