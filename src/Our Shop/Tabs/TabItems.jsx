import { useContext } from "react";
import { AuthContext } from "../../Account/Provider/AuthProvider";
import Swal from "sweetalert2";
import { json, useLocation, useNavigate } from "react-router-dom";

const TabItems = ({ item }) => {
  const { image, name, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const handleAddToCart = (item) => {
    console.log(item)
    if (user) {
      const cartDeatails = {
        cartId: item._id, name, image, price: item.price, email: user.email
      }
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(cartDeatails)

      }
      )
        .then(res => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }
    else {
      Swal.fire({
        title: "Please login",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } })
        }
      });
    }
  }

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-2xl rounded-none text-center">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-center">{item.name}</h2>
          <p>{item.recipe}</p>
          <button onClick={() => handleAddToCart(item)} className="uppercase btn btn-ghost border-amber-700 text-yellow-600">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabItems;
