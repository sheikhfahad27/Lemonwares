import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";

function Over100() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1  sm:grid-cols-2">
        <div>
          <h1 className=" lg:text-5xl font-bold leading-tight mb-6">
            We serve over 100 <br />
            Nigerian Websites
          </h1>
          <p className=" mb-6">
            Connect LemonWares with your favourite tools that <br /> you use
            daily and keep things on track.
          </p>
        </div>

        <div>
          <span className="flex items-center justify-center gap-20">
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </span>
          <span className="flex items-center justify-center gap-20">
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <img src={img13} alt="" />
          </span>
        </div>
      </div>

      <div>
        <h1 className="text-5xl text-center font-bold my-24 ">We are here to make your <br /> website awesome.</h1>
      </div>
    </section>
  );
}

export default Over100;
