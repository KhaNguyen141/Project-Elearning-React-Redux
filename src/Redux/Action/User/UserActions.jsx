import { LOGIN, REGISTER, UPDATE_USER, USER_ADD_COURSE, USER_CANCEL_COURSE, USER_CHECK_COURSE } from "../type";
import reduxAction from "../action";

import { settings } from "../../../Config/settings";
import { restConnector } from "../../../Services";

import Swal from 'sweetalert2';
import UserService from "../../../Services/userService";

const userService = new UserService();

// Async Action User

export const userLoginAction = (userLogin) => {
  return dispatch => {
      userService
      .userLoginAction(userLogin)
      .then(res => {
        //1.luu local
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
        localStorage.setItem(settings.token, res.data.accessToken);

        //lưu data lên store để render lại giao diện header

        dispatch(reduxAction(LOGIN, res.data));

        //bỏ token lên header của tất cả request
        restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken

        Swal.fire (
          'Đăng nhập thành công!',
          '',
          'success'
        ).then(() => {
          window.location.reload();
      })

      })
      .catch(error => {
          console.log(error.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Đăng nhập thất bại',
            text: 'Vui lòng thử lại'
        })
      });
  };
};

export const userRegisterAction = (userRegister) => {
  return dispatch => {
      userService
      .userRegisterAction(userRegister)
      .then(res => {
      dispatch(reduxAction(REGISTER, res.data));
      console.log(res.data);
      Swal.fire(
        'Đăng ký thành công!',
        '',
        'success'
    ).then(() => {
        window.location.reload();
    })
    }).catch(error => {
      console.log(error.response.data)
      Swal.fire({
        icon: 'error',
        title: 'Đăng ký thất bại',
        text: 'Tài khoản hoặc email đã tồn tại!',
      })
    });
  }
}

export const userProfileUpdate = (userProfileUpdate) => {
  return dispatch => {
      userService
      .userProfileUpdate(userProfileUpdate)
      .then(res => {
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
        dispatch(reduxAction(UPDATE_USER, res.data));
        console.log(res.data);
        Swal.fire(
          'Cập nhật thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Cập nhật thất bại',
          text: 'Vui lòng thử lại!'
        })
      })


  }
}

export const userAddCourse = (taiKhoan, maKhoaHoc) => {
  return dispatch => {
      userService
      .userAddCourse(taiKhoan, maKhoaHoc)
      .then(res => {
        if (localStorage.getItem("userLogin") !== null) {
          dispatch(reduxAction(USER_ADD_COURSE, res.data));
          console.log(res.data);
          Swal.fire(
            'Đăng ký khoá học thành công!',
            '',
            'success'
          )
        } 

      }).catch(error => {
        if (localStorage.getItem("userLogin") === null) {
          Swal.fire({
            icon: 'error',
            title: 'Vui lòng đăng nhập để thực hiện chức năng này',
            text: ''
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Khoá học đã đăng ký rồi',
            text: ''
          })
        }
        console.log(error.response.data)
        
      })
    

  }
}

export const userCancelCourse = (taiKhoan, maKhoaHoc) => {
  return dispatch => {
      userService
      .userCancelCourse(taiKhoan, maKhoaHoc)
      .then(res => {
        dispatch(reduxAction(USER_CANCEL_COURSE, res.data));
        console.log(res.data);
        Swal.fire(
          'Huỷ đăng ký khoá học thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Khoá học chưa đăng ký',
          text: ''
        })
      })
    

  }
}

export const userCheckCourse = (taiKhoan, maKhoaHoc) => {
  return dispatch => {
      userService
      .userCheckCourse(taiKhoan, maKhoaHoc)
      .then(res => {
        localStorage.setItem(settings.courseSignedUp, JSON.stringify(res.data));
        dispatch(reduxAction(USER_CHECK_COURSE, res.data));
        // console.log(res.data);
      
      }).catch(error => {
        console.log(error.response.data)
       
      })
    

  }
}

