import { useState } from "react";

function LemonWares() {
  const [resp, setresp] = useState(true);
  const [btn, setbtn] = useState(true);
  return (
    <section className="relative overflow-hidden py-10">
      <div className="mx-auto mb-24 max-w-2xl flex justify-center items-center flex-col lg:max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-6xl lg:text-5xl ">
          Ready to get started with <br />
          Lemon Wares?
        </h1>
        <p className="text-xl font-bold ">Choose the package that suits you</p>

        <button className="text-5xl my-5" onClick={() => setresp(!resp)}>
          {resp ? (
            <i className="fa-solid fa-toggle-on"></i>
          ) : (
            <i className="fa-solid fa-toggle-off"></i>
          )}
        </button>

        <div className="flex gap-64 " >
          <button
          onClick={() => setbtn(true)}
            className={`border-b-4 w-60  hover:border-b-red-600 ${btn?"border-b-red-600" : ""}`}>
            Basic
          </button>

          <button onClick={() => setbtn(false)} 
          className="border-b-4 w-60 hover:border-b-red-600">
            Premium</button>
        </div>
      </div>
{
   btn?   <div className="flex flex-wrap justify-center  gap-32 items-center w-full">
        <div className=" w-60">
          <div className="mx-auto rounded-md border hover:bg-slate-400 border-gray-200 bg-white pb-20 px-5 pt-6 lg:pb-8">
            <span className="mb-2 block text-base font-bold ">Starter</span>
            <span>
              with all your customers via all conversation channels in one
              central dashboard.
            </span>
            <span className="flex items-end">
              <span className="text-4xl font-extrabold leading-none">
                $2.80
              </span>
            </span>
            <span className="text-sm font-semibold">Per month</span>
            <div>
              <button
                type="button"
                className="rounded-md border hover:bg-gray-700 border-black px-8 py-1 m text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Choose Plan
              </button>
            </div>

            <div className="mt-7 border-t border-gray-100 pt-5">
              <ul className="mb-10">
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">2GB SSD</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    10GB Bandwidth
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    15 Email Accounts
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Unlimited Database
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    4 Subdomains
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    1 Parked Domain
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">2 Websites</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">Free SSL</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Softaculous
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 w-60 lg:-mt-0 border hover:bg-slate-400 border-gray-200">
          <div className="pt-22 relative mx-auto  rounded-lg  px-5 pb-7 ">
            <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full  p-2"></div>
            <span className="mb-2 block pt-10 text-sm font-bold ">
              Standard
            </span>
            <p>
              with all your customers via all conversation channels in one
              central dashboard.
            </p>
            <span className="flex items-end ">
              <span className="text-4xl font-extrabold leading-none">
                $4.20
              </span>
            </span>
            <span className="text-sm font-semibold">Per month</span>
            <div>
              <button
                type="button"
                className="rounded-md border hover:bg-gray-700 border-black px-8 py-1 m text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Choose Plan
              </button>
            </div>
            <div className="mt-7 border-t  pt-5">
              <ul className="mb-10">
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">2GB SSD</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    10GB Bandwidth
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    15 Email Accounts
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Unlimited Database
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    4 Subdomains
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    1 Parked Domain
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">2 Websites</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">Free SSL</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Softaculous
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 w-60 lg:-mt-0 border border-gray-200 ">
          <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border  hover:bg-slate-400 border-gray-200 bg-white pb-8 px-5 pt-12 lg:rounded-b-none lg:pt-6">
            <span className="mb-2 block text-sm font-bold">PREMIUM</span>
            <p>
              with all your customers via all conversation channels in one
              central dashboard.
            </p>
            <span className="flex items-end">
              <span className="text-4xl font-extrabold leading-none">
                $7.00
              </span>
            </span>
            <span className="text-sm font-semibold">Per month</span>
            <div>
              <button
                type="button"
                className="rounded-md border border-black hover:bg-gray-700 px-8 py-1 m text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Choose Plan
              </button>
            </div>
            <div className="mt-7 border-t border-gray-100 pt-5">
              <ul className="mb-10">
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">2GB SSD</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    10GB Bandwidth
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    15 Email Accounts
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Unlimited Database
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    4 Subdomains
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    1 Parked Domain
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">2 Websites</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">Free SSL</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Softaculous
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>:

      <div className="flex flex-wrap justify-center  gap-32 items-center w-full">
        <div className=" w-60">
          <div className="mx-auto rounded-md border hover:bg-slate-400 border-gray-200 bg-white pb-20 px-5 pt-6 lg:pb-8">
            <span className="mb-2 block text-base font-bold ">Starter</span>
            <span>
              with all your customers via all conversation channels in one
              central dashboard.
            </span>
            <span className="flex items-end">
              <span className="text-4xl font-extrabold leading-none">
                $6.96
              </span>
            </span>
            <span className="text-sm font-semibold">Per Year</span>
            <div>
              <button
                type="button"
                className="rounded-md border border-black px-8 py-1 m text-sm font-semibold text-black hover:bg-gray-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Choose Plan
              </button>
            </div>

            <div className="mt-7 border-t border-gray-100 pt-5">
              <ul className="mb-10">
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">10GB SSD</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    40GB Bandwidth
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    35 Email Accounts
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Limited Database
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    15 Subdomains
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    20 Parked Domain
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">5 Websites</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">Paid SSL</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Softaculous
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 w-60 lg:-mt-0 border hover:bg-slate-400 border-gray-200">
          <div className="pt-22 relative mx-auto max-w-sm rounded-lg  px-5 pb-7 ">
            <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full  p-2"></div>
            <span className="mb-2 block pt-10 text-sm font-bold ">
              Standard
            </span>
            <p>
              with all your customers via all conversation channels in one
              central dashboard.
            </p>
            <span className="flex items-end ">
              <span className="text-4xl font-extrabold leading-none">
                $11.50
              </span>
            </span>
            <span className="text-sm font-semibold">Per Year</span>
            <div>
              <button
                type="button"
                className="rounded-md border border-black px-8 py-1 m text-sm font-semibold hover:bg-gray-700 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Choose Plan
              </button>
            </div>
            <div className="mt-7 border-t  pt-5">
              <ul className="mb-10">
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">15GB SSD</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    80GB Bandwidth
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    25 Email Accounts
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Unlimited Database
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    30 Subdomains
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    30 Parked Domain
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">9 Websites</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">paid SSL</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Softaculous
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 w-60 lg:-mt-0 border  border-gray-200 ">
          <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border hover:bg-slate-400 border-gray-200 bg-white pb-8 px-5 pt-12 lg:rounded-b-none lg:pt-6">
            <span className="mb-2 block text-sm font-bold">PREMIUM</span>
            <p>
              with all your customers via all conversation channels in one
              central dashboard.
            </p>
            <span className="flex items-end">
              <span className="text-4xl font-extrabold leading-none">
                $17.30
              </span>
            </span>
            <span className="text-sm font-semibold">Per Year</span>
            <div>
              <button
                type="button"
                className="rounded-md border border-black hover:bg-gray-700  px-8 py-1 m text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Choose Plan
              </button>
            </div>
            <div className="mt-7 border-t border-gray-100 pt-5">
              <ul className="mb-10">
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">30GB SSD</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    100GB Bandwidth
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    35 Email Accounts
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Unlimited Database
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    60 Subdomains
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    40 Parked Domain
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">15 Websites</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">Free SSL</span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-gray-900">
                    Softaculous
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
}

// mx-auto max-w-5xl
export default LemonWares;
