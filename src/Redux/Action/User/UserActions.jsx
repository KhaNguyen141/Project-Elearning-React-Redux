import { LOGIN, REGISTER, UPDATE_USER, USER_ADD_COURSE, USER_CANCEL_COURSE, USER_CHECK_COURSE, USER_CHECK_COURSE_APPROVED } from "../type";
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
        //luu local
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
        localStorage.setItem(settings.token, res.data.accessToken);

        //lưu data lên store để render lại giao diện header

        dispatch(reduxAction(LOGIN, res.data));

        //bỏ token lên header của tất cả request
        restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken

        Swal.fire (
          'Login Successfully!',
          '',
          'success'
        )
      })
      .catch(error => {
          console.log(error.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Please check your ID and Password and try again'
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
        'Registration Completed Successfully!',
        'You can sign in now',
        'success'
      )
    }).catch(error => {
      console.log(error.response.data)
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed!',
        text: 'ID or Email already exists',
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
          'Update Account Successfully!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Account update failed',
          text: 'Please check the value and try again'
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
            'Enroll Succesfully!',
            '',
            'success'
          )
        } 

      }).catch(error => {
        if (localStorage.getItem("userLogin") === null) {
          Swal.fire({
            icon: 'error',
            title: 'Please sign in to complete this action',
            text: ''
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Course already exists',
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
          'Cancel Course Successfully!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Sorry, you are not in this course',
          text: ''
        })
      })
    

  }
}

export const userCheckCourse = (taiKhoan, matkhau) => {
  return dispatch => {
      userService
      .userCheckCourse(taiKhoan, matkhau)
      .then(res => {
        localStorage.setItem(settings.courseSignedUp, JSON.stringify(res.data));
        dispatch(reduxAction(USER_CHECK_COURSE, res.data));
        console.log(res.data);
      
      }).catch(error => {
        console.log(error.response.data)
       
      })
    

  }
}

export const userCheckCourseApproved = (taiKhoan) => {
  return dispatch => {
      userService
      .userCheckCourseApproved(taiKhoan)
      .then(res => {
        dispatch(reduxAction(USER_CHECK_COURSE_APPROVED, res.data));
        console.log(res.data);
      
      }).catch(error => {
        console.log(error.response.data)
       
      })
    

  }
}

