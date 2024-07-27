import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

export default function Login() {
    const { LoginWithPassword, LoginWithGoogle, LoginWithGitHub } = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;
    console.log(email, password);

    LoginWithPassword(email,password)
    .then(result=>{
        console.log(result.user);
        console.log("Login Successful");
    })
    .catch(error=>{
        console.log("Error:", error);
    })

  };

  const handleGoogle= ()=>{
    LoginWithGoogle()
    .then(result=>{
      console.log(result.user);
      console.log("Login successful");
    })
    .catch(error=>{
      console.log("Error: ", error);
    })
  }

  const handleGitHub = ()=>{
    LoginWithGitHub()
    .then(result=>{
      console.log(result.user);
      console.log("Login successful");
    })
    .catch(error=>{
      console.log("Error: ", error);
    })
  }


  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="mt-6">
          <button onClick={handleGoogle} className="btn btn-secondary w-full">Google</button>
        </div>
        <div className="mt-1">
          <button onClick={handleGitHub} className="btn btn-secondary w-full">GitHub</button>
        </div>
      </div>
    </div>
  );
}
