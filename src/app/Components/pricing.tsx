import React from 'react'

export default function pricing() {
  return (
    <div>
      <div className="flex overflow-hidden flex-col bg-white">
  <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
    <nav
      className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full"
      aria-label="Main Navigation"
    >
      <div className="flex overflow-hidden flex-col items-center px-20 pb-8 w-full font-bold bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pt-5 pr-2 w-full bg-white bg-opacity-50 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 my-auto whitespace-nowrap max-md:max-w-full">
              <a
                href="/"
                className="text-2xl tracking-normal leading-none text-slate-800"
                aria-label="Bandage Home"
              >
                Bandage
              </a>
              <nav
                className="flex overflow-hidden gap-5 items-center my-auto text-sm tracking-wide leading-6 text-center text-neutral-500"
                aria-label="Secondary Navigation"
              >
                <a
                  href="/home"
                  className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  tabIndex={0}
                >
                  Home
                </a>
                <a
                  href="/product"
                  className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  tabIndex={0}
                >
                  Product
                </a>
                <a
                  href="/pricing"
                  className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  tabIndex={0}
                >
                  Pricing
                </a>
                <a
                  href="/contact"
                  className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  tabIndex={0}
                >
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex gap-10 items-center text-sm tracking-wide leading-loose">
              <a
                href="/login"
                className="overflow-hidden self-stretch my-auto text-right text-sky-500 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                tabIndex={0}
              >
                Login
              </a>
              <a
                href="/membership"
                className="flex overflow-hidden gap-4 items-center px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors max-md:px-5"
                tabIndex={0}
              >
                <span>Become a member</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9044901b6a7f5b2c153029c7626de11779468992673b0bab7cc53bf98ac0c210?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[1.2]"
                />
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden z-10 flex-col justify-center items-center self-center py-12 mt-8 -mb-8 max-w-full tracking-wide text-center w-[870px] max-md:mb-2.5">
            <div className="flex overflow-hidden items-center max-md:max-w-full">
              <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                <div className="text-base tracking-normal text-neutral-500">
                  PRICING
                </div>
                <h1 className="mt-4 text-6xl leading-none text-slate-800 max-md:max-w-full max-md:text-4xl">
                  Simple Pricing
                </h1>
                <nav
                  aria-label="Breadcrumb"
                  className="flex overflow-hidden gap-4 items-center py-2.5 mt-4 text-sm leading-6 whitespace-nowrap"
                >
                  <a
                    href="/"
                    className="self-stretch my-auto text-slate-800 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    Home
                  </a>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62b7f3634e76871eb684a5f2cb22e3fb804abb22ed5e7a3759fb0482ab45e7b4?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
                  />
                  <span className="self-stretch my-auto text-neutral-500">
                    Pricing
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col items-center mt-12 max-w-full tracking-wide w-[633px] max-md:mt-10">
        <div className="flex overflow-hidden flex-col items-center w-full">
          <h2 className="text-4xl font-bold leading-none text-slate-800">
            Pricing
          </h2>
          <p className="mt-2.5 text-sm leading-5 text-center text-neutral-500 max-md:max-w-full">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-12 max-md:mt-10">
        <form
          className="flex gap-2.5 self-stretch py-px my-auto w-[186px]"
          aria-label="Billing Period Selection"
        >
          <label
            className="grow text-base font-bold tracking-normal text-slate-800"
            htmlFor="monthly"
          >
            Monthly
          </label>
          <input
            type="radio"
            id="monthly"
            name="billing"
            defaultValue="monthly"
            className="sr-only"
          />
          <div className="flex flex-col justify-center items-start self-start px-1 py-1 border border-sky-500 border-solid fill-white stroke-[1px] stroke-sky-500">
            <div className="flex shrink-0 bg-gray-200 rounded-full border border-solid border-stone-300 h-[19px] w-[19px]" />
          </div>
          <label
            className="text-base font-bold tracking-normal text-slate-800"
            htmlFor="yearly"
          >
            Yearly
          </label>
          <input
            type="radio"
            id="yearly"
            name="billing"
            defaultValue="yearly"
            className="sr-only"
          />
        </form>
        <div className="overflow-hidden self-stretch px-5 py-2.5 my-auto text-sm font-bold tracking-wide leading-6 text-center text-sky-500 bg-sky-200 rounded-[37px]">
          Save 25%
        </div>
      </div>
   
    </nav>
  </div>
</div>

    </div>
  )
}
