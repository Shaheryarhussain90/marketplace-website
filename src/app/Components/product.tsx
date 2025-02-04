import React from 'react'

export default function product() {
  return (
    <div id='product'>
      <div className="flex overflow-hidden flex-col bg-white">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee30f465316d64a6d16d703cce566f6bace2d1a8c40a6b9b0d28f8fe3a1dac7b?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
    alt="Shop banner image"
    className="object-contain w-full aspect-[10.64] max-md:max-w-full"
  />
  <nav
    aria-label="Breadcrumb"
    className="flex overflow-hidden flex-col justify-center items-center py-6 w-full font-bold text-center whitespace-nowrap bg-neutral-50 max-md:max-w-full"
  >
    <div className="flex overflow-hidden flex-wrap gap-8 items-center max-md:max-w-full">
      <h1 className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none min-w-[240px] text-slate-800 w-[510px] max-md:max-w-full">
        Shop
      </h1>
      <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-sm tracking-wide leading-6 min-w-[240px] w-[509px] max-md:max-w-full">
        <div className="flex overflow-hidden gap-4 items-center py-2.5">
          <a href="/" className="self-stretch my-auto text-slate-800">
            Home
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da70505010d42a4738e25babc01960f30719d0ea4ae64a2fe1cde24a1a46f669?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
          />
          <span className="self-stretch my-auto text-stone-300">Shop</span>
        </div>
      </div>
    </div>
  </nav>
  <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full text-white bg-neutral-50 max-md:px-5 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col items-center pb-12 max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-4 items-start max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-[205px]">
          <a href="/cloths" className="flex overflow-hidden flex-col bg-white">
            <div className="flex overflow-hidden relative flex-col items-center px-5 py-20 aspect-[0.919] w-[205px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ecdfa94c9539e0f0180b6fb897c7933fa3a5551e775e7b696ac8de5437b3ba1?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt="Cloths category"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative text-base font-bold tracking-normal text-center">
                CLOTHS
              </div>
              <div className="relative mt-2.5 text-sm tracking-wide leading-none">
                5 Items
              </div>
            </div>
          </a>
        </div>
        {/* Repeated for other category items with same structure */}
      </div>
    </div>
  </section>
  <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-w-[1050px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center w-full max-w-[1049px] max-md:max-w-full">
        <div className="gap-4 self-stretch px-px my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
          Showing all 12 results
        </div>
        <div className="flex gap-4 items-center self-stretch px-px my-auto">
          <span className="self-stretch my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
            Views:
          </span>
          <div className="flex gap-4 items-center self-stretch my-auto">
            <button
              tabIndex={0}
              className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]"
              aria-label="Grid view"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a3d26b4b8ef9b01153f9a9e3aaf5640efb1e25bcd5695f85df5f47e66a840ce?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain self-stretch my-auto w-4 aspect-square"
              />
            </button>
            <button
              tabIndex={0}
              className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]"
              aria-label="List view"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f04d583400d49dd37a415a2393188266e3b09eff18047c9430503dcf3ba690af?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain self-stretch my-auto w-4 aspect-square"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-4 self-stretch px-px my-auto text-sm tracking-wide whitespace-nowrap min-w-[240px]">
          <form className="flex overflow-hidden flex-col my-auto leading-7 text-neutral-500 w-[141px]">
            <label htmlFor="sortSelect" className="sr-only">
              Sort by
            </label>
            <select
              id="sortSelect"
              className="flex overflow-hidden gap-1.5 px-3.5 py-3 rounded-md border border-solid bg-stone-50 border-zinc-300 max-md:pr-5"
            >
              <option value="popularity">Popularity</option>
            </select>
          </form>
          <button className="overflow-hidden px-5 py-2.5 font-bold leading-6 text-center text-white bg-sky-500 rounded-md w-[94px]">
            Filter
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Product grid section */}
  <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
      {/* Product grid items */}
      <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
        {/* Product card repeated structure */}
        <article className="flex flex-col items-center w-[238px]">
          <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
            <div className="flex overflow-hidden flex-col w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt="Graphic Design product"
                className="object-contain w-full aspect-[0.8]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <h2 className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </h2>
              <p className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </p>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <span className="text-stone-300 w-[52px]">$16.48</span>
                <span className="text-teal-700 w-[45px]">$6.48</span>
              </div>
              <div
                className="flex gap-1.5 items-center mt-2.5"
                role="group"
                aria-label="Color options"
              >
                <button
                  className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-sky-500 rounded-full"
                  aria-label="Blue color option"
                />
                <button
                  className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-teal-700 rounded-full"
                  aria-label="Teal color option"
                />
                <button
                  className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-orange-400 rounded-full"
                  aria-label="Orange color option"
                />
                <button
                  className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-teal-700 rounded-full"
                  aria-label="Dark teal color option"
                />
              </div>
            </div>
          </div>
        </article>
        {/* Repeated product cards */}
      </div>
      {/* Pagination */}
      <nav
        aria-label="Pagination"
        className="flex overflow-hidden flex-col justify-center mt-12 max-w-full text-sm font-bold tracking-wide leading-6 text-center text-sky-500 whitespace-nowrap bg-white rounded-md border-solid shadow-sm border-[1.346px] border-stone-300 w-[313px] max-md:mt-10"
      >
        <div className="flex items-start">
          <button className="overflow-hidden self-stretch p-6 border border-solid bg-zinc-100 border-stone-300 text-stone-300 max-md:px-5">
            First
          </button>
          <button className="overflow-hidden self-stretch px-5 py-6 bg-white border border-gray-200 border-solid">
            1
          </button>
          <button
            className="overflow-hidden self-stretch px-5 py-6 text-white bg-sky-500 border border-gray-200 border-solid"
            aria-current="page"
          >
            2
          </button>
          <button className="overflow-hidden self-stretch px-5 py-6 bg-white border border-gray-200 border-solid">
            3
          </button>
          <button className="overflow-hidden self-stretch p-6 bg-white border border-gray-200 border-solid max-md:px-5">
            Next
          </button>
        </div>
      </nav>
    </div>
  </section>
  {/* Footer section */}
  <footer className="flex overflow-hidden flex-col bg-white max-md:max-w-full">
    {/* Footer content */}
  </footer>
</div>

    </div>
  )
}
