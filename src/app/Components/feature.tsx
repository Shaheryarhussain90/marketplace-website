import React from 'react'

export default function Feature() {
  return (
    <div>
      <div
  className="flex overflow-hidden flex-col justify-center items-center px-20 tracking-wide bg-white max-md:px-5"
  role="region"
  aria-labelledby="featured-posts-title"
>
  <div className="flex flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col items-center max-w-full text-sm font-bold text-center w-[692px]">
      <div className="flex overflow-hidden flex-col items-center w-full">
        <div className="leading-6 text-sky-500">Practice Advice</div>
        <h2
          id="featured-posts-title"
          className="mt-2.5 text-4xl leading-none text-slate-800"
        >
          Featured Posts
        </h2>
        <div className="mt-2.5 leading-5 text-neutral-500 max-md:max-w-full">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </div>
      </div>
    </div>
    <div className="flex flex-wrap gap-8 justify-center items-start mt-20 max-md:mt-10 max-md:max-w-full">
      <article className="flex flex-col items-center min-w-[240px] w-[328px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
          <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
            <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
              <img
                loading="lazy"
                src="/image/pic16.png.jpg"
                alt="Featured post image 1"
                className="object-cover absolute inset-0 size-full"
              />
              <div
                className="overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5"
                aria-label="New post indicator"
              >
                NEW
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
            <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
              <div className="self-stretch my-auto text-blue-300">Google</div>
              <div className="self-stretch my-auto">Trending</div>
              <div className="self-stretch my-auto">New</div>
            </div>
            <h3 className="mt-2.5 text-xl leading-8 text-slate-800">
              Loudest à la Madison #1
              <br />
              (L'integral)
            </h3>
            <p className="mt-2.5 text-sm leading-5">
              We focus on ergonomics and meeting
              <br />
              you where you work. It's only a
              <br />
              keystroke away.
            </p>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
              <time
                className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto"
                dateTime="2021-04-22"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bab006290e7e04e0c462fd2bf24d7028b1ec910daa21caa758609ef69b418b10?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <span className="self-stretch my-auto">22 April 2021</span>
              </time>
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f8dbee0179ee22cb61b9906bae2cfce2ea942f04db2a534b04d813c7e8b1326?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
                />
                <span className="self-stretch my-auto">10 comments</span>
              </div>
            </div>
            <a
              href="#"
              className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6"
              aria-label="Learn more about Loudest à la Madison #1"
            >
              <span className="self-stretch my-auto">Learn More</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/433c4d37494bcd11a8a59af27701a33fd0d1f59ca871c38a053e8900c7e498e3?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
              />
            </a>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-center min-w-[240px] w-[328px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
          <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
            <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cad0c7e003619d4d38a852ec622df5b9333fd6aab08f94e9cbb865653d61b36?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt="Featured post image 2"
                className="object-cover absolute inset-0 size-full"
              />
              <div
                className="overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5"
                aria-label="New post indicator"
              >
                NEW
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
            <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
              <div className="self-stretch my-auto text-blue-300">Google</div>
              <div className="self-stretch my-auto">Trending</div>
              <div className="self-stretch my-auto">New</div>
            </div>
            <h3 className="mt-2.5 text-xl leading-8 text-slate-800">
              Loudest à la Madison #1
              <br />
              (L'integral)
            </h3>
            <p className="mt-2.5 text-sm leading-5">
              We focus on ergonomics and meeting
              <br />
              you where you work. It's only a
              <br />
              keystroke away.
            </p>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
              <time
                className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto"
                dateTime="2021-04-22"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9f71b20ad266f727fb8e8229416df2f00536b35fbc1b303f00322ef5ed5f337?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <span className="self-stretch my-auto">22 April 2021</span>
              </time>
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d93d0bd41f96c40faacfd0c6d06fab186dd6df20e158addd887f6bf7b16ed4a?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
                />
                <span className="self-stretch my-auto">10 comments</span>
              </div>
            </div>
            <a
              href="#"
              className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6"
              aria-label="Learn more about Loudest à la Madison #1"
            >
              <span className="self-stretch my-auto">Learn More</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44b0153c53a0b5a2b5df93e7ada654640191e731aeee33ed86093470ffe7e44?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
              />
            </a>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-center min-w-[240px] w-[329px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
          <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
            <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9a216ce0aca7cb20cddd5c6c84db3aedf260f7e2a2252b021b5dc3cac94a1d?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt="Featured post image 3"
                className="object-cover absolute inset-0 size-full"
              />
              <div
                className="overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5"
                aria-label="New post indicator"
              >
                NEW
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
            <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
              <div className="self-stretch my-auto text-blue-300">Google</div>
              <div className="self-stretch my-auto">Trending</div>
              <div className="self-stretch my-auto">New</div>
            </div>
            <h3 className="mt-2.5 text-xl leading-8 text-slate-800">
              Loudest à la Madison #1
              <br />
              (L'integral)
            </h3>
            <p className="mt-2.5 text-sm leading-5">
              We focus on ergonomics and meeting
              <br />
              you where you work. It's only a
              <br />
              keystroke away.
            </p>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
              <time
                className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto"
                dateTime="2021-04-22"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db5909e7bb36fe6c99729cf77dbe66c1b1e61c3916c5d96eb090b699b8251d6a?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <span className="self-stretch my-auto">22 April 2021</span>
              </time>
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/77048b3c9acca2d5d31901723175e17bf61605a2e9590e5d1b4c71aa8bdef612?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
                />
                <span className="self-stretch my-auto">10 comments</span>
              </div>
            </div>
            <a
              href="#"
              className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6"
              aria-label="Learn more about Loudest à la Madison #1"
            >
              <span className="self-stretch my-auto">Learn More</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13219b2e0cac02f35a56ee491b0c07ecfef9f6db1d34d9a5e37041413700dd3?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
              />
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

    </div>
  )
}
