import React, {useState} from 'react';
import {connect} from 'react-redux';
import {userLoginAction} from '../../Redux/Action/User/UserActions';

//Component không có lifecycle 
function Login(props) { //<= function

    let [state,setState] = useState({
        userLogin: {
            taiKhoan:'',
            matKhau:''
        },
        errors: {
            taiKhoan:'',
            matKhau:''
        }
    }) //tham số của hàm useState là state mặc định kết quả trả về là 1 tuple chứa 2 phần tử state và phương thức setState


    let handleChange = (e) => { //<= biến của hàm => không có con trỏ this
        let {name,value} = e.target;
        let errorMessage = '';
        if(value === "") //Kiểm tra rổng
        {
            errorMessage = name + ' is required!';       
        }
        //Kiểm tra lỗi 
        let userLoginUpdate = {...state.userLogin,[name]:value} ;
        let errorsUpdate = {...state.errors,[name]:errorMessage};
        setState({
            userLogin: userLoginUpdate,
            errors : errorsUpdate      
        });
        
    }
    let handleSubmit = (e) => {
        e.preventDefault(); //Ngăn không cho browser reload lại trang
        //Nếu form còn lỗi không cho submit 
        let valid = true
        for(var errorName in state.errors){
            if(state.errors[errorName] != '') //1 trong các thuộc tính state.errors ! rổng => lỗi không cho submit api
            {
                valid = false;
                
            }
        }
        if(valid)
        {
            props.dispatch(userLoginAction(state.userLogin)); //khi submit gọi action (ajax) truyền vào data là userLogin từ người dùng
              
        } else {
            alert('Dữ liệu không hợp lệ!');
        }
        
    }

    return (
        <form className="formSearch" onSubmit={handleSubmit}>
            <div className="modal fade" id="modalLogin" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title pt-2">Đăng nhập</h4>
                            
                            <button type="button" className="close modalClose" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>

                        </div>

                        <div class="modal-body">
                                <div className="form-group">
                                    <input name="taiKhoan" type="text" className="form-control taiKhoan" placeholder="Tài khoản" onChange={handleChange}/>
                                    <span className="text text-danger">{state.errors.taiKhoan}</span>
                                </div>

                                <div className="form-group">
                                    <input name="matKhau" type="password" className="form-control matKhau" placeholder="Mật khẩu" onChange={handleChange}/>
                                    <span className="text text-danger">{state.errors.matKhau}</span>
                                </div>

                                <button type="submit" className="btn btn-udi-yellow">Đăng nhập</button>
                                
                                <p className="mt-4">Bạn chưa có tài khoản? <a href="#modalRegister" data-toggle="modal" data-target="#modalRegister" data-dismiss="modal">Đăng ký</a></p>
                                
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default connect(null)(Login);