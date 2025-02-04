import React from 'react'

export default function shopping() {
  return (
    <div>
      <div
  className="flex overflow-hidden flex-col justify-center bg-white"
  role="region"
  aria-label="Product Showcase"
>
  <div className="flex overflow-hidden flex-wrap gap-8 items-center max-md:max-w-full">
    <div className="flex flex-col justify-center items-start self-stretch py-px my-auto min-w-[240px] w-[704px] max-md:max-w-full">
      <img
        loading="lazy"
        src="/image/pic15.png.png"
        alt="Neural Universe Product Showcase"
        className="object-contain w-full aspect-[0.92] max-md:max-w-full"
      />
    </div>
    <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto font-bold tracking-wide min-w-[240px] w-[573px] max-md:max-w-full">
      <div className="text-base tracking-normal text-stone-300">
        SUMMER 2020
      </div>
      <h2 className="mt-8 text-4xl leading-[50px] text-slate-800">
        Part of the Neural
        <br />
        Universe
      </h2>
      <p className="mt-8 text-xl leading-8 text-neutral-500">
        We know how large objects will act,
        <br />
        but things on a small scale.
      </p>
      <div className="flex gap-2.5 items-start self-start mt-8 text-sm leading-loose text-center">
        <button
          className="overflow-hidden px-10 py-4 text-white bg-green-500 rounded-md max-md:px-5 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Buy Now"
        >
          BUY NOW
        </button>
        <button
          className="overflow-hidden px-10 py-4 text-green-500 rounded-md border border-green-500 border-solid max-md:px-5 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Read More"
        >
          READ MORE
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
