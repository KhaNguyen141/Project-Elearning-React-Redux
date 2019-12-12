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
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
      method: "GET",
    });
  }

  fetchCoursesCategories(maDanhMuc) {
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

}
export default CourseService;
