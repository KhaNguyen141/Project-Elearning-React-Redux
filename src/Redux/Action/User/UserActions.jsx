import { type, LOGIN } from "../type";
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
