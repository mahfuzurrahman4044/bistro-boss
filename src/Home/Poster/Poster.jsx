import poster from "../../assets/home/chef-service.jpg";
import "./Poster.css"

const Poster = () => {
  return (
    <div className="mx-auto lg:my-20 lg:w-2/3">
      <div className="poster-img">
        <img src={poster} alt="" />
      </div>

      <div className="bg-white lg:w-1/2 w-2/3 mx-auto lg:p-10 p-4 text-center relative bottom-64">
          <h2 className="lg:text-4xl text-2xl font-serif">Bistro Boss</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  );
};

export default Poster;
