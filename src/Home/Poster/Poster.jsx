import poster from "../../assets/home/chef-service.jpg";

const Poster = () => {
  return (
    <div className="mx-auto my-20 w-2/3">
      <div>
        <img src={poster} alt="" />
      </div>

      <div className="bg-white w-1/2 mx-auto p-10 text-center relative bottom-64">
          <h2 className="text-4xl font-serif">Bistro Boss</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  );
};

export default Poster;
