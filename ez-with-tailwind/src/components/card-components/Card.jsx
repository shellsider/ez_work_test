function Card({ title, description, icon }) {
  return (
    <div className="w-full bg-[#0b2b50] text-white p-4 rounded-lg flex flex-col justify-between text-center transform transition hover:scale-[1.03] hover:shadow-md sm:max-w-[250px] sm:text-left">
      <div className="flex flex-col items-center gap-2 mb-3 sm:flex-row sm:items-start sm:mb-6">
        <img src={icon} alt={title} className="w-10 h-10" />
        <h3 className="text-base font-bold text-[#009fe3] m-0 leading-none">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-snug m-0">{description}</p>
    </div>
  );
}

export default Card;
