import { type, LOGIN, REGISTER } from "../type";
import reduxAction from "../action";

import { settings } from "../../../Config/settings";

import { restConnector } from "../../../Services";

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

      })
      .catch(error => {
        console.log(error.response.data);
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
    }).catch(error => {
      console.log(error.response.data)
    });
  }
}