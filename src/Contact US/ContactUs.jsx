import Swal from "sweetalert2";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import bannerImg from "../assets/contact/banner.jpg"
import { Helmet } from "react-helmet";
const ContactUs = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log({ userName, userEmail, subject, message });

        fetch("https://bistro-boss-server-rho-ten.vercel.app/contactEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, userEmail, subject, message }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                form.reset()
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    return (
        <div>
            <Helmet><title>Contact Us || Bistro Boss Restaurant</title></Helmet>
            {/* --------------Banner Starts Here----------------- */}
            <div>
                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>
                <div className="bg-black bg-opacity-40 w-2/3 mx-auto text-center text-white py-16 relative lg:bottom-80 bottom-56">
                    <h2 className="text-4xl font-serif">CONTACT US</h2>
                    <p>WOULD YOU LIKE TO TRY A DISH?</p>
                </div>
            </div>
            <div>
                <div className="-mt-44">
                    <SectionTitle title={"OUR LOCATION"} subtitle={"---Visit Us---"}></SectionTitle>
                </div>

                {/* -------------Flex Items-------------- */}
                <div className="lg:flex justify-around lg:ps-0 ps-24">
                    <div className="w-48 text-center">
                        <div className="bg-yellow-600 py-2">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="border border-amber-700 bg-base-300 px-2">
                            <h2>PHONE</h2>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="w-48 text-center">
                        <div className="bg-yellow-600 py-2">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="border border-amber-700 bg-base-300 px-2">
                            <h2>ADDRESS</h2>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="w-48 text-center">
                        <div className="bg-yellow-600 py-2">
                            <i class="fa-solid fa-business-time"></i>                        </div>
                        <div className="border border-amber-700 bg-base-300 px-2">
                            <h2>WORKING HOURS</h2>
                            <p>
                                Mon - Fri: 08:00 - 22:00
                            </p>
                        </div>
                    </div>
                </div>

                {/* -------------------------Contact Form-------------------------- */}
                <div>
                    <div><SectionTitle title={"CONTACT FORM"} subtitle={"---Send Us a Message---"}></SectionTitle></div>
                </div>

                {/* ----------------------------Form---------------------------------- */}

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left"></div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                            <form className="card-body" onSubmit={handleForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        className="input input-bordered"
                                        name="name"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="subject"
                                        className="input input-bordered"
                                        name="subject"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea
                                        placeholder="message"
                                        className="input input-bordered h-32"
                                        name="message"
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn border border-amber-700">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;