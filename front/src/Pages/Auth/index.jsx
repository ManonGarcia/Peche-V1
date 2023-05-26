import React from "react";

function AuthForm() {
    return (
        <div className="d-flex justify-content-center">
            <form className="form-width d-flex justify-content-center flex-column" style={{width: '20rem'}}>
                <div className="form-outline mb-4">
                    <input type="text" id="form1Example1" className="form-control" />
                    <label className="form-label" for="form1Example1">Username</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="password" id="form1Example2" className="form-control" />
                    <label className="form-label" for="form1Example2">Password</label>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block" style={{width: '6rem'}}>Sign in</button>
                </div>

            </form>
        </div>
    )
};

export default AuthForm;