const Footer = () => {
  return (
    <div className="text-white text-center">
      <div className="lg:mt-16 mt-8 flex">
        <div className="w-1/2 bg-yellow-600 lg:py-8 py-4">
          <h2 className="lg:text-2xl text-xl my-2">CONTACT US</h2>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-yellow-700 w-1/2 lg:py-8 py-4">
          <h2 className="lg:text-2xl text-xl my-2">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex justify-center">
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="mx-5">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i className="fa-brands fa-square-twitter"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-700 py-2">
        <h2>Copyright © CulinaryCloud. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
