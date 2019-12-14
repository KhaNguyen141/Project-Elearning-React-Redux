import { restConnector } from ".";
import { settings } from "../Config/settings";

class CourseService {
  fetchCourseDetail(courseid) {
    return restConnector({
      url:
        `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseid}`,
      method: "GET"
    });
  }

  fetchCourses() {
    return restConnector({
      url:
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
      method: "GET",
    });
  }

  fetchCoursesByID(maDanhMuc) {
    return restConnector({
      url:
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}`,
      method: "GET",
    });
  }

  fetchListCategory() {
    return restConnector({
      url:
        `/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      method: "GET",
    });
  }

  fetchCoursePending(coursePending) {
    return restConnector({
      url:
        `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      method: "POST",
      header: { 
        'Authorization': "Bearer " + settings.token },
      data: coursePending,
    });
  }
}
export default CourseService;

