import { restConnector } from ".";

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
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08`,
      method: "GET",
      
    });
  }

  fetchCourseSearch(text) {
    return restConnector({
      url:
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08&tenKhoaHoc=${text}`,
      method: "GET",
      
    });
  }

  fetchCoursesByID(maDanhMuc) {
    return restConnector({
      url:
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP08`,
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

