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

}
export default CourseService;
