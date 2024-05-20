import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import img from "../../assets/others/authentication2.png"
import "./Login.css"

const Login = () => {
  const [error, setError] = useState("")
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/"

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset()
        setError("")
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            icon: 'swal2-icon-success-custom'
          }
        });
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log(error)
        setError("Try Again")
      })


  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
      })
  }
  return (
    <div>
      <Helmet>
        <title>Login || Bistro Boss Restaurant</title>{" "}
      </Helmet>
      <div className="hero min-h-screen pt-28">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <Link to="/signUp" className="label-text-alt link link-hover">New here? Please Sign Up</Link>
                </label>
              </div>
              <p className="text-red-600 text-center">{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-ghost border-amber-700 text-yellow-600">Login</button>
              </div>
              <div className="divider">OR</div>
              <div onClick={handleGoogleSignIn} className="text-center btn btn-ghost border-amber-700 text-yellow-600"><i className="fa-brands fa-google"></i></div>
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

export default Login;
