import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <Helmet><title>Profile || Bistro Boss  Restaurant</title></Helmet>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Profile;
