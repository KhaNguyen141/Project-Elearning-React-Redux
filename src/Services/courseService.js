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
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09&`,
      method: "GET",
      
    });
  }

  fetchCoursesByID(maDanhMuc) {
    return restConnector({
      url:
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`,
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
}
export default CourseService;

