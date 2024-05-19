import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

function WebHosting() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h1 className=" lg:text-5xl font-bold text-center text-lg md:text-left leading-tight mb-6">
            True Cloud Web Hosting
          </h1>
          <p className=" mb-6 text-center md:text-left">
            True Cloud Web Hosting All of the hosting packages we offer are{" "}
            <br />
            deployed instantly on our SSD powered cloud. We don’t use <br />
            dedicated servers that operate on single pieces of hardware. Our{" "}
            <br />
            entire infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>

        <div className="grid grid-cols-3 ">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />

          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 lg:px-8 my-20">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <img src={icon1} alt="" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              99.9% Uptime
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <img src={icon2} alt="" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Blazing Fast Web Hosting
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <img src={icon3} alt="" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Free SSL Certificates
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <img src={icon3} alt="" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              24x7 Friendly Support
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebHosting;
