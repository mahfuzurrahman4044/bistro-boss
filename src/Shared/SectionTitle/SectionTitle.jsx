const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center lg:w-1/3 w-3/4 mx-auto my-4 lg:my-10">
      <p className="text-yellow-600 my-2">{subtitle}</p>
      <h2 className="lg:text-4xl text-2xl border-y-4 py-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
