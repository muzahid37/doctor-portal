import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile }from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import useToken from '../../Hooks/useToken';

const SingUp = () => {
    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
    

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token]=useToken(gUser||user)
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    let signInError;

    const navigate=useNavigate();
  
    if(gloading ||loading||updating ){
        return <button className="btn loading"> loading</button>
    }
    if (gError||error||updateError) {
      signInError=<p className="text-red">{error?.message||gError.message}</p>
    }
    if (gUser||user) {
      return console.log(gUser||user);
    }
    const onSubmit = async(data) => {
       await createUserWithEmailAndPassword(data.email , data.password);
        await updateProfile({displayName:data.name});
        navigate('/appoinment');
  
    };
    return (
        <div className="flex  justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    }
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                 
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
  
              {signInError}
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p className=""><small>Alraedy have an account? <Link to="/login" className="text-primary">Please login</Link></small> </p>
  
            
  
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider">OR</div>
            </div>
            <button
              onClick={() => signInWithGoogle()}
              class="btn btn-outline btn-accent w-full"
            >
              LOG IN WIHTH GOOGLE
            </button>
          </div>
        </div>
      </div>
    );
    
};

export default SingUp;