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

    userAddCourse(taiKhoan, maKhoaHoc) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyKhoaHoc/DangKyKhoaHoc",
            data: {
                taiKhoan: taiKhoan,
                maKhoaHoc: maKhoaHoc,
                header: settings.token,
            },
                
        });
    }

    userCancelCourse(taiKhoan, maKhoaHoc) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyKhoaHoc/HuyGhiDanh",
            data: {
                taiKhoan: taiKhoan,
                maKhoaHoc: maKhoaHoc,
                header: settings.token,
            },
                
        });
    }
    
    userCheckCourse(taiKhoan, matKhau) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            data: {
                taiKhoan: taiKhoan,
                matKhau: matKhau,
                header: settings.token,
            },
                
        });
    }

    userCheckCourseApproved(taiKhoan) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
            data: {
                taiKhoan: taiKhoan,
                header: settings.token,
            },
                
        });
    }
    
    
}

export default UserService;