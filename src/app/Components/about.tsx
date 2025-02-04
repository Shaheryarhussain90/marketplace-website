import React from 'react'

export default function about() {
  return (
    <div id="about">
      <div className="flex overflow-hidden flex-col bg-white">
  <div className="overflow-hidden px-20 pt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
    <nav className="flex gap-5 max-md:flex-col" aria-label="Main navigation">
      <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
        <div className="flex z-10 flex-col mt-3 mr-0 w-full font-bold max-md:mt-8 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-w-full whitespace-nowrap w-[503px]">
            <a
              href="/"
              className="text-2xl tracking-normal leading-none text-slate-800"
              aria-label="Bandage Home"
            >
              Bandage
            </a>
            <div className="flex overflow-hidden gap-5 items-center my-auto text-sm tracking-wide leading-6 text-center text-neutral-500">
              <a
                href="/"
                className="overflow-hidden self-stretch my-auto w-[43px]"
                tabIndex={0}
              >
                Home
              </a>
              <a
                href="/product"
                className="overflow-hidden self-stretch my-auto w-[59px]"
                tabIndex={0}
              >
                Product
              </a>
              <a
                href="/pricing"
                className="overflow-hidden self-stretch my-auto w-[52px]"
                tabIndex={0}
              >
                Pricing
              </a>
              <a
                href="/contact"
                className="overflow-hidden self-stretch my-auto w-[58px]"
                tabIndex={0}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center py-28 mt-11 w-full tracking-wide text-slate-800 max-md:py-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden gap-8 items-center max-md:max-w-full">
              <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[599px]">
                <div className="text-base tracking-normal">ABOUT COMPANY</div>
                <h1 className="mt-9 text-6xl leading-none max-md:max-w-full max-md:text-4xl">
                  ABOUT US
                </h1>
                <p className="mt-9 text-xl leading-8 text-neutral-500">
                  We know how large objects will act,
                  <br />
                  but things on a small scale
                </p>
                <button
                  className="flex gap-2.5 items-start self-start mt-9 text-sm leading-loose text-center text-white overflow-hidden px-10 py-4 bg-sky-500 rounded-md max-md:px-5"
                  tabIndex={0}
                >
                  Get Quote Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
        <div className="flex shrink-0 max-w-full h-[710px] w-[632px] max-md:mt-5" />
      </div>
    </nav>
  </div>
  <section className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1018px]">
        <div className="flex flex-col grow shrink justify-center self-stretch py-6 my-auto min-w-[240px] w-[315px]">
          <div className="flex flex-col max-w-full w-[394px]">
            <div className="text-sm tracking-wide leading-none text-red-500">
              Problems trying
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-normal leading-8 text-slate-800">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </div>
        </div>
        <p className="overflow-hidden grow shrink self-stretch my-auto text-sm tracking-wide leading-5 min-w-[240px] text-neutral-500 w-[450px] max-md:max-w-full">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  </section>
  <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full font-bold text-center bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col justify-center items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
        <div className="flex flex-col items-center w-[238px]">
          <div className="text-6xl tracking-wide leading-none text-slate-800 max-md:text-4xl">
            15K
          </div>
          <div className="text-base tracking-normal text-neutral-500">
            Happy Customers
          </div>
        </div>
        <div className="flex flex-col items-center min-w-[240px] w-[241px]">
          <div className="text-6xl tracking-wide leading-none text-slate-800 max-md:text-4xl">
            150K
          </div>
          <div className="text-base tracking-normal text-neutral-500">
            Monthly Visitors
          </div>
        </div>
        <div className="flex flex-col items-center w-60">
          <div className="text-6xl tracking-wide leading-none text-slate-800 max-md:text-4xl">
            15
          </div>
          <div className="text-base tracking-normal text-neutral-500">
            Countries Worldwide
          </div>
        </div>
        <div className="flex flex-col items-center w-60">
          <div className="text-6xl tracking-wide leading-none text-slate-800 max-md:text-4xl">
            100+
          </div>
          <div className="text-base tracking-normal text-neutral-500">
            Top Partners
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b25f8be2b8ff88d6335cca28a2463f4f3741dc507817204fa79ca68a9e1979d7?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
      alt="Company overview visual"
      className="object-contain mb-0 w-full aspect-[1.83] max-w-[989px] max-md:mb-2.5 max-md:max-w-full"
    />
  </section>
  <section className="flex overflow-hidden flex-col justify-center items-center px-20 pb-2 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[607px]">
        <div className="flex overflow-hidden flex-col items-center w-full">
          <h2 className="text-4xl font-bold leading-none text-slate-800">
            Meet Our Team
          </h2>
          <p className="mt-2.5 text-sm leading-5 text-center text-neutral-500 max-md:max-w-full">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-28 max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[316px]">
          <div className="flex overflow-hidden flex-col max-w-full bg-white w-[316px]">
            <div className="flex overflow-hidden flex-col w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cb9fbbe542c2194ecdd107e293a020eacc00b88b8ed8e7351cd6c0462f02a?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt="Team member portrait"
                className="object-contain w-full aspect-[1.37]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-center p-8 w-full max-w-[316px] max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Username
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                Profession
              </div>
              <div className="flex overflow-hidden gap-5 justify-center items-center mt-2.5">
                <a href="#" aria-label="Facebook profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/166d1be34668aacedd28f72138f9488a0254e375ef365c37c3ee7dce71efd1e5?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Instagram profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f80c1e9bf66c2f2f7d4052003c572d5af38212d9b9fb377f61a48fb8fe92da1e?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Twitter profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62611ca233fa7c7922d1ca672043b04acf094b0ddc2a65dc8219efdb3e60340d?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[329px]">
          <div className="flex overflow-hidden flex-col max-w-full bg-white w-[329px]">
            <div className="flex overflow-hidden flex-col w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf5300b2304cc41de7bc26970a132a0e50f46fffe3b372da549d3bf60aaf0b6?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt="Team member portrait"
                className="object-contain w-full aspect-[1.37]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-center p-8 w-full max-w-[332px] max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Username
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                Profession
              </div>
              <div className="flex overflow-hidden gap-5 justify-center items-center mt-2.5">
                <a href="#" aria-label="Facebook profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcef5f02a5fb949aa0b34b2e735501f95d7f5b07fd7e1d522a0aff54b2a4245f?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Instagram profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc1dbea1edb96fbdcb6cf83924713f28452bbd74a375ad45ff01c0342240dbb1?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Twitter profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca48d9fb8748ceff8dc05301cfdb8fe251ab4069b662db1886bc246a97536b?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[329px]">
          <div className="flex overflow-hidden flex-col max-w-full bg-white w-[329px]">
            <div className="flex overflow-hidden flex-col w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fadb0713273d6914bdc76ecbfda67d994b705d3b6b0c3c340a6ae37efe92a89f?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt="Team member portrait"
                className="object-contain w-full aspect-[1.42]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-center p-8 w-full max-w-[330px] max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Username
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                Profession
              </div>
              <div className="flex overflow-hidden gap-5 justify-center items-center mt-2.5">
                <a href="#" aria-label="Facebook profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c99dc253c69b9c744199c312644e8e1feebc9661e21183dfcf8d7fe1b7b48?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Instagram profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b60194474b640b993641af50617f45863b88f904652ae48ed4df729fe8486bba?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Twitter profile" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/634fac7b23090f8469bb1b191f056244a7e03b771239e41249509e3c36218940?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[864px]">
        <div className="flex overflow-hidden flex-col items-center w-full">
          <h2 className="text-4xl font-bold leading-none text-slate-800 max-md:max-w-full">
            Big Companies Are Here
          </h2>
          <p className="mt-8 text-sm leading-5 text-center text-neutral-500 w-[547px] max-md:max-w-full">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 mt-6 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[153px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f2d70f51f592ba095f5186714d9bac71e1b9384a3844a1d69a578a3f14d7abf?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Partner company logo"
            className="object-contain max-w-full aspect-[3.03] w-[103px]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[146px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1da9a78448c87e2409abff4d6a27f00c7a3057f61b722f3feac145194219b29c?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Partner company logo"
            className="object-contain aspect-[1.41] w-[83px]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[152px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc7586f5c4481eb3f7ba75b76d81fb961a82d12d1f70a11e14db8eb0aad249d5?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Partner company logo"
            className="object-contain max-w-full aspect-[1.36] w-[102px]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[151px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ae0ec92b29fe63ba9ad7293d238f458764b10ada3fdc77136b84e7d25f24aa0?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Partner company logo"
            className="object-contain max-w-full aspect-[2.45] w-[103px]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[151px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3d12f232022f3f4f07cf705aa95978d421bf07567b598e573caa128dc29be5?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Partner company logo"
            className="object-contain max-w-full aspect-[1.68] w-[104px]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[151px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c85fb90f40ff56c33f11b87b253fc29f85acee7ac10d8519e5ba46d812e6177e?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Partner company logo"
            className="object-contain aspect-[1.06] w-[76px]"
          />
        </div>
      </div>
    </div>
  </section>
  <section className="overflow-hidden pl-20 w-full bg-sky-600 max-md:pl-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden z-10 flex-col justify-center py-28 mr-0 w-full text-sm font-bold tracking-wide text-white max-md:py-24 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center max-w-full w-[1050px]">
            <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[438px] max-md:max-w-full">
              <div className="text-base tracking-normal">WORK WITH US</div>
              <h2 className="mt-6 text-4xl leading-none max-md:max-w-full">
                Now Let's grow Yours
              </h2>
              <p className="mt-6 leading-5 max-md:max-w-full">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <button
                className="overflow-hidden self-start px-10 py-4 mt-6 leading-loose text-center whitespace-nowrap rounded-md border border-solid border-neutral-50 text-neutral-50 max-md:px-5"
                tabIndex={0}
              >
                Get Started
              </button>
            </div>
            <div className="flex shrink-0 self-stretch my-auto h-[412px] min-w-[240px] w-[548px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e442a38fc8cda0c997fe16f2d10b8f298f9ff85163736a99a5cae0ade8b953c?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
          alt="Work with us illustration"
          className="object-contain grow w-full aspect-[0.93] max-md:max-w-full"
        />
      </div>
    </div>
  </section>
  <footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center self-center py-10 w-full max-w-[1050px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
          <a
            href="/"
            className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5"
            aria-label="Bandage Home"
          >
            Bandage
          </a>
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
          <div className="flex overflow-hidden gap-5 justify-center items-center">
            <a href="#" aria-label="Facebook" tabIndex={0}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/667936e15c7d616412e13ff9e271f976d8ac7b7c32e345326cd95c5e6f95d0de?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </a>
            <a href="#" aria-label="Instagram" tabIndex={0}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91d4ebdecfbae0d98f6fe2aa9f3e380d5640bf3b2d400a1ea7d9bad7e69d933e?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </a>
            <a href="#" aria-label="Twitter" tabIndex={0}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/661280c6cc5b40a713900f25deb07d7ad4eb7d295a155c19d79b424fd229e7e7?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr className="z-10 shrink-0 self-center max-w-full h-px border border-solid border-neutral-200 w-[1057px]" />
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-px mt-1 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center py-12 w-full max-w-[1050px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
          <nav
            className="flex overflow-hidden flex-col font-bold w-[148px]"
            aria-label="Company Info"
          >
            <h3 className="text-base tracking-normal text-slate-800">
              Company Info
            </h3>
            <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
              <a href="/about" tabIndex={0}>
                About Us
              </a>
              <a href="/careers" className="mt-2.5" tabIndex={0}>
                Carrier
              </a>
              <a href="/hiring" className="mt-2.5" tabIndex={0}>
                We are hiring
              </a>
              <a href="/blog" className="mt-2.5" tabIndex={0}>
                Blog
              </a>
            </div>
          </nav>
          <nav
            className="flex overflow-hidden flex-col font-bold w-[152px]"
            aria-label="Legal"
          >
            <h3 className="text-base tracking-normal text-slate-800">Legal</h3>
            <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
              <a href="/about" tabIndex={0}>
                About Us
              </a>
              <a href="/careers" className="mt-2.5" tabIndex={0}>
                Carrier
              </a>
              <a href="/hiring" className="mt-2.5" tabIndex={0}>
                We are hiring
              </a>
              <a href="/blog" className="mt-2.5" tabIndex={0}>
                Blog
              </a>
            </div>
          </nav>
          <nav
            className="flex overflow-hidden flex-col font-bold w-[148px]"
            aria-label="Features"
          >
            <h3 className="text-base tracking-normal text-slate-800">
              Features
            </h3>
            <div className="flex flex-col mt-5 text-sm tracking-wide leading-6 text-neutral-500">
              <a href="/marketing" tabIndex={0}>
                Business Marketing
              </a>
              <a href="/analytics" className="mt-2.5" tabIndex={0}>
                User Analytic
              </a>
              <a href="/chat" className="mt-2.5" tabIndex={0}>
                Live Chat
              </a>
              <a href="/support" className="mt-2.5" tabIndex={0}>
                Unlimited Support
              </a>
            </div>
          </nav>
          <nav
            className="flex overflow-hidden flex-col font-bold w-[152px]"
            aria-label="Resources"
          >
            <h3 className="text-base tracking-normal text-slate-800">
              Resources
            </h3>
            <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
              <a href="/mobile" tabIndex={0}>
                IOS &amp; Android
              </a>
              <a href="/demo" className="mt-2.5" tabIndex={0}>
                Watch a Demo
              </a>
              <a href="/customers" className="mt-2.5" tabIndex={0}>
                Customers
              </a>
              <a href="/api" className="mt-2.5" tabIndex={0}>
                API
              </a>
            </div>
          </nav>
          <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
            <h3 className="text-base font-bold tracking-normal text-slate-800">
              Get In Touch
            </h3>
            <div className="flex flex-col mt-5 w-full tracking-wide leading-7 max-w-[321px]">
              <form className="flex overflow-hidden gap-5 justify-between pl-5 text-sm rounded-md border border-solid bg-stone-50 border-neutral-200">
                <label htmlFor="emailInput" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="emailInput"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className="my-auto text-neutral-500 bg-transparent border-none outline-none"
                />
                <button
                  type="submit"
                  className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5"
                  tabIndex={0}
                >
                  Subscribe
                </button>
              </form>
              <p className="self-start text-xs text-neutral-500">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex overflow-hidden flex-col items-center px-20 w-full text-sm font-bold tracking-wide leading-6 bg-neutral-50 text-neutral-500 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center items-start py-6 w-full max-w-[1050px] max-md:max-w-full">
        <div className="flex overflow-hidden gap-10 items-center max-w-full w-[600px]">
          <p className="overflow-hidden self-stretch my-auto min-w-[240px] w-[600px]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}
