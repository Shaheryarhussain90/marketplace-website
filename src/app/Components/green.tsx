import React from 'react'

const green = () => {
  return (
    <div>
      <div
  className="flex flex-col bg-white rounded-md border border-solid border-neutral-200"
  role="region"
  aria-label="Product showcase"
>
  <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-teal-700 max-md:px-5 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col pt-28 w-full max-w-[1036px] min-h-[711px] max-md:pt-24 max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-8 items-start h-[599px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pt-16 text-white min-w-[240px] w-[509px] max-md:max-w-full">
          <div className="text-xl tracking-wide">SUMMER 2020</div>
          <h1 className="mt-8 text-6xl font-bold tracking-wide leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
            Vita Classic Product
          </h1>
          <p className="mt-8 text-sm tracking-wide leading-5">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <form
            className="flex gap-9 items-center self-start mt-8 font-bold text-center"
            aria-label="Add product to cart"
          >
            <div
              className="self-stretch my-auto text-2xl tracking-normal leading-none"
              aria-label="Product price"
            >
              $16.48
            </div>
            <button
              type="submit"
              className="overflow-hidden self-stretch px-10 py-4 my-auto text-sm tracking-wide leading-loose bg-green-500 rounded-md max-md:px-5 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              ADD TO CART
            </button>
          </form>
        </div>
        <div className="flex overflow-hidden flex-col items-center min-w-[240px] w-[510px] max-md:max-w-full">
          <img
            loading="lazy"
            src="/image/pic14.png.png"
            alt="Vita Classic Product showcase"
            className="object-contain max-w-full aspect-[0.74] w-[443px]"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default green
