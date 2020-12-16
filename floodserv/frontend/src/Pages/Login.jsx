import React from 'react';
import login from '../images/im1.jpg';
import AdminForm from '../Component/AdminLogin';
function Login(){
    return(
        <>
            <div className="banner" style={{backgroundImage: `url(${login})`}}>
                <h1 className="title">Admin Login</h1>
            </div>
            <AdminForm/>
        </>
    )
}
export default Login;