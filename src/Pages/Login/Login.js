import React from "react";
import auth from "./../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation()

  let from = location.state?.from?.pathname || '/appointment';
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let singnInError; 

  useEffect(() => {
    if (guser || user) {
      navigate(from,{replace:true})
    }
  }, [guser,user,navigate,from]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (gerror || error) {
    singnInError = <p className="text-red-600 p-3">{error?.message || gerror?.message}</p>
  }

  if (gloading || loading) {
    return <Loading></Loading>
  }
  
  const onSubmit = (data) => {
    console.log(data)
     signInWithEmailAndPassword(data.email,data.password)
     navigate('/appointment')
  };
 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-medium">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provied a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="label-text-alt text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </label>

              <label className="label">
                  <span className="label-text">Password</span>
                </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: 'Password must be 6 characters or longer' }
              })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="label-text-alt text-red-600">
                    {errors.password?.message}
                  </p>
                )}
              </label>
              {singnInError}
            </div>

            <input
              className="btn  btn-neutral text-white w-full max-w-xs"
              type="submit"
              value="LOGIN"
            />
          </form>
          <p><small>New to Doctors Portal? <Link className="text-primary" to="/signup">Create new account</Link></small></p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn ">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
