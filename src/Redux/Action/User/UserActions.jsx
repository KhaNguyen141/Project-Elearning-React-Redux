import { type, LOGIN, REGISTER, UPDATE_USER } from "../type";
import reduxAction from "../action";

import { settings } from "../../../Config/settings";

import { restConnector } from "../../../Services";

import axios from 'axios';
import Swal from 'sweetalert2';

export const userLoginAction = userLogin => {
  return dispatch => {
    restConnector({
      method: "POST",
      url: "/api/quanlynguoidung/dangnhap",
      data: userLogin,
    //   headers: {
    //     Authorization:
    //       "Bearer" + JSON.parse(localStorage.getItem(settings.token))
    //   }
    })
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

export const userRegisterAction = userRegister => {
  return dispatch => {
    restConnector({
      method: "POST",
      url: "/api/QuanLyNguoiDung/DangKy",
      data: userRegister
      
    }).then(res => {
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

export const userProfileUpdate = userProfileUpdate => {
  return dispatch => {
    restConnector({
      method: "PUT",
      url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      header: { 
        'Authorization': "Bearer " + settings.token },
      data: userProfileUpdate,

    }).then(res => {
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
