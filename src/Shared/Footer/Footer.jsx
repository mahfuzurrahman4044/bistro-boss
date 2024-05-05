const Footer = () => {
  return (
    <div className="text-white text-center">
      <div className="mt-16 flex">
        <div className="w-1/2 bg-slate-700 py-8">
          <h2 className="text-2xl my-2">CONTACT US</h2>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-slate-900 w-1/2 py-8">
          <h2 className="text-2xl my-2">Follow US</h2>
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

      <div className="bg-black py-2">
        <h2>Copyright © CulinaryCloud. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
