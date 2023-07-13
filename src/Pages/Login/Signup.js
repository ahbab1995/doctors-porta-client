import React from 'react';
import auth from "./../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    let singnInError; 
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    const [token] = useToken(guser || user)

  
    if (gerror || error || updateerror) {
      singnInError = <p className="text-red-600 p-3">{error?.message || gerror?.message}</p>
    }
  
    if (gloading || loading || updating) {
      return <Loading></Loading>
    }
    const onSubmit = async(data) => {
      // console.log(data)
      await createUserWithEmailAndPassword(data.email,data.password)
        const success = await updateProfile({ displayName:data.name });
        if (success) {
          console.log('User update')
        }
        // navigate('/appointment')
    };
    if (token) {
      navigate('/appointment')
    }
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-medium">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">

              <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                   
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <p className="label-text-alt text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </label>

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
                value="Sign Up"
              />
            </form>
            <p><small>New to Doctors Portal? <Link className="text-primary" to="/login">Log In</Link></small></p>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn ">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;