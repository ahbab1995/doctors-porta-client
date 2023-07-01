import React from "react";
import auth from "./../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  if (user) {
    console.log(user);
  }
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
                  pattern: /[A-Za-z]{3}/,
                  message:'error message',
                })}
              />
              <label className="label">
                <span className="label-text-alt">Bottom Left label</span>
              </label>
            </div>

          

            <input className="btn  btn-neutral text-white w-full max-w-xs" type="submit" value='LOGIN' />
          </form>
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
