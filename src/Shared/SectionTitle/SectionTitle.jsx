const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center w-1/3 mx-auto my-10">
      <p className="text-yellow-600">{subtitle}</p>
      <h2 className="text-4xl border-y-4 py-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
