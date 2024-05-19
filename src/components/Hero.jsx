import img1 from "../assets/img1.png";

function Hero() {
  return (
    <>
      <section className="container mx-auto">
        <span className="flex items-center gap-4">
          <a href="#" className="text-red-700">
            Hosting
          </a>
          <a href="#" className="text-slate-400 ">
            Domain
          </a>
          <a href="#" className="text-slate-400 ">
            SEO
          </a>
          <a href="#" className="text-slate-400 ">
            Email
          </a>
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 py-20 w-full   px-5 sm:text-left text-center  ">
          <div className="w-full  lgtext:pr-10">
            <h1 className="-4xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Web Hosting for Your Website
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Blazing fast web hosting for individuals and <br />
              businesses of all sizes backed by 24x7x365 Support.
            </p>
            <div className="flex items-center gap-5">
              <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                Create an Account
              </button>
              <button className=" hover:bg-red-700 border-2 font-bold py-2 px-4 rounded">
                Choose your plan
              </button>
            </div>
          </div>
          <div className="w-full  mt-6lg:mt-0 flex items-center justify-center">
            <img
              src={img1}
              alt="Illustration"
              className=" shadow-lg mt-6 sm:mt-0  "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
