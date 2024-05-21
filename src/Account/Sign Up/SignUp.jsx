import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png"

const SignUp = () => {
  const [error, setError] = useState(false); // State to track password visibility
  const navigate = useNavigate()
  const { createUser, updateUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords don't match");
    } else {
      createUser(data.email, data.password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          setError("")
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Account has been created",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/")
          updateUser(data.name, data.photo)
            .then(() => {
              console.log("User has been updated")
              reset()
            })

            .catch((error) => {
              console.log(error.message)
              setError("")
            });
        })
    }
  };
  return (
    <div>
      <Helmet>
        <title>Sign up || Bistro Boss Restaurant</title>{" "}
      </Helmet>
      <div className="hero min-h-screen pt-28">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit((onSubmit))}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="url" placeholder="photo" {...register('photo')} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register('name')} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register('email')} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">Minimum 6 characters</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Maximum 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Minimum one lowercase, one uppercase,<br />one number and one special character.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <span className="text-red-600">
                    Minimum 6 characters
                  </span>
                )}
                {errors.confirmPassword?.type === "maxLength" && (
                  <span className="text-red-600">
                    Maximum 20 characters
                  </span>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <span className="text-red-600">
                    Minimum one lowercase, one uppercase,<br />one number and one special character.
                  </span>
                )}
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">Already have an account? Please log in</a>
                </label>
              </div>
              <p className="text-red-600 text-center">{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-ghost border-amber-700 text-yellow-600" type="submit">Sign up</button>
              </div>

            </form>

          </div>
          <div className="text-center lg:text-left">
            <img className="" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
