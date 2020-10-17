import React from 'react'
import Login from '../Features/Login'
import Register from '../Features/Register'

function AuthPage() {
    return (
        <div className="row justify-content-between">
            <div className="col-md-5">
                <Login />
            </div>
            <div style={{border:'1px solid #ababab'}}></div>
            <div className="col-md-6">
                <Register />
            </div>
        </div>
    )
}

export default AuthPage
