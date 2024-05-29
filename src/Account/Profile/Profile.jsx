import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "../Axios Secure/UseAxiosSecure";
import img from "../../assets/others/authentication2.png"
import { EmailAuthProvider } from "firebase/auth";
const Profile = () => {
  const { user, updateUser, reauthenticateUser, deleteAccount } = useContext(AuthContext);
  // console.log(user);
  const [axiosSecure] = UseAxiosSecure();

  // -----------------------Change Image---------------------------
  const [showImageInput, setShowImageInput] = useState(false);
  const [newImageURL, setNewImageURL] = useState("");

  const handleShowImageInput = () => {
    setShowImageInput(true);
  };

  const handleImageChange = (e) => {
    setNewImageURL(e.target.value);
  };

  const handleImageSubmit = () => {
    if (newImageURL) {
      axiosSecure.patch(`/users/${user?.email}`, { photoURL: newImageURL })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount === 1) {
            updateUser(user.displayName, newImageURL)
              .then(() => { });
            setShowImageInput(false);
            setNewImageURL("");
          }
        });
    }
  };


  // -------------------Change Name-----------------

  const [showNameInput, setShowNameInput] = useState(false);
  const [newName, setNewName] = useState("");

  const handleShowNameInput = () => {
    setShowNameInput(true);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNameSubmit = () => {
    if (newName) {
      axiosSecure.put(`/users/${user?.email}`, { name: newName })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount === 1) {
            updateUser(newName, user?.photoURL).then(() => { })
            setShowNameInput(false);
            setNewName("");
          }
        });
    }
  };

  // ---------------------Delete User-----------------

  const [showReauthModal, setShowReauthModal] = useState(false);
  const [password, setPassword] = useState("");

  const handleDeleteAccount = () => {
    setShowReauthModal(true);
  };


  const reauthenticateAndDelete = (event) => {
    const form = event.target;
    const email = form.reauthenticateEmail.value;
    const password = form.reauthenticatePassword.value;
    console.log(email, password);

    reauthenticateUser(email, password)
      .then(() => {
        console.log("Reauthentication successful.");
        return deleteAccount(user);
      })
      .then(() => {
        console.log("User deleted from Firebase.");
        return axiosSecure.delete(`/users/${user?.email}`);
      })
      .then((res) => {
        console.log("User deleted from backend:", res.data);
      })
      .catch((error) => {
        console.error("Error during deletion process:", error.message);
      });
  };

  return (
    <div>
      <Helmet><title>Profile || Bistro Boss  Restaurant</title></Helmet>

      <div>
        {
          showImageInput ? <>
            <div className="form-control pt-28 text-center">
              <div className="text-center">
                <input
                  type="url"
                  className="p-2 rounded-md border border-amber-700 w-48"
                  placeholder="new image"
                  value={newImageURL}
                  onChange={handleImageChange}
                />
              </div>
              <div className="text-center">
                <button
                  className="rounded-md mt-2 btn btn-ghost border-amber-700"
                  onClick={handleImageSubmit}
                >
                  Update Image
                </button>
              </div>
            </div>
          </> :
            <div onClick={handleShowImageInput} className="pt-28 flex justify-center">
              <img className="h-28 w-28 rounded-full" src={user?.photoURL} alt="" />
            </div>
        }
        {
          showNameInput ?
            <>
              <div className="form-control">
                <div className=" flex justify-center mt-6">
                  <input
                    type="text"
                    className="p-2 rounded-md w-48 border border-amber-700"
                    placeholder="new name"
                    value={newName}
                    onChange={handleNameChange}
                  />
                </div>
                <div className=" flex justify-center">
                  <button
                    className="btn btn-ghost p-2 rounded-md mt-2 border border-amber-700"
                    onClick={handleNameSubmit}
                  >
                    Update Name
                  </button>
                </div>
              </div>
            </> :
            <h2 className="text-center lg:text-4xl text-2xl font-semibold">{user?.displayName}</h2>
        }
        <h2 className="text-center">{user?.email}</h2>
        <div className="text-center">
          <button className="btn btn-ghost border border-amber-700" onClick={handleShowNameInput}>Change Name</button>
        </div>
        <div className="divider">OR</div>
        {
          showReauthModal ?
            <>
              <div className="hero min-h-screen pt-28">
                <div className="hero-content flex-col lg:flex-row-reverse">

                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={reauthenticateAndDelete}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="reauthenticate email" name="reauthenticateEmail" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="reauthenticate password" name="reauthenticatePassword" className="input input-bordered" required />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-ghost border-amber-700 text-yellow-600">Reauthenticate</button>
                      </div>
                      <div className="divider">OR</div>
                      <div className="text-center btn btn-ghost border-amber-700 text-yellow-600"><i className="fa-brands fa-google"></i></div>
                    </form>
                  </div>
                  <div className="text-center lg:text-left">
                    <img className="" src={img} alt="" />
                  </div>
                </div>
              </div>
            </> :
            <>
              <div className="text-center">
                <button onClick={handleDeleteAccount} className="btn btn-ghost border border-amber-700">Delete Account</button>
              </div>
            </>
        }
      </div>


    </div>
  );
};

export default Profile;
