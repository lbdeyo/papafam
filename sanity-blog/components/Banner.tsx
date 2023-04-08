function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between  font-bold px-10 py-5">
      <div>
        <h1 className="text-7xl mt-20 ">Design</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to{" "}
          <span className=" decoration-4 decoration-[#C000FF]">
            Every Developer&#39;s
          </span>{" "}
          favorite blog in the Devosphere.
        </h2>
      </div>
    </div>
  );
}

export default Banner;
