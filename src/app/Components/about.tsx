import React from 'react';

export default function About() {
  return (
    <div id="about">
      <div className="flex overflow-hidden flex-col bg-white">
        {/* Header Section */}
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
                    <a href="/" className="overflow-hidden self-stretch my-auto w-[43px]" tabIndex={0}>
                      Home
                    </a>
                    <a href="/product" className="overflow-hidden self-stretch my-auto w-[59px]" tabIndex={0}>
                      Product
                    </a>
                    <a href="/pricing" className="overflow-hidden self-stretch my-auto w-[52px]" tabIndex={0}>
                      Pricing
                    </a>
                    <a href="/contact" className="overflow-hidden self-stretch my-auto w-[58px]" tabIndex={0}>
                      Contact
                    </a>
                  </div>
                </div>
                <div className="flex overflow-hidden flex-col justify-center py-28 mt-11 w-full tracking-wide text-slate-800 max-md:py-24 max-md:mt-10 max-md:max-w-full">
                  <div className="flex overflow-hidden gap-8 items-center max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[599px]">
                      <div className="text-base tracking-normal">ABOUT COMPANY</div>
                      <h1 className="mt-9 text-6xl leading-none max-md:max-w-full max-md:text-4xl">ABOUT US</h1>
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
              <div className="flex shrink-0 max-w-full h-[710px] w-[632px] max-md:mt-5">
                {/* Image placeholder */}
              </div>
            </div>
          </nav>
        </div>

        {/* Footer Section */}
        <footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center self-center py-10 w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
              <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
                <a href="/" className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5" aria-label="Bandage Home">
                  Bandage
                </a>
              </div>
              <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
                <div className="flex overflow-hidden gap-5 justify-center items-center">
                  <a href="#" aria-label="Facebook" tabIndex={0}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/667936e15c7d616412e13ff9e271f976d8ac7b7c32e345326cd95c5e6f95d0de?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                      alt="Facebook"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </a>
                  <a href="#" aria-label="Instagram" tabIndex={0}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91d4ebdecfbae0d98f6fe2aa9f3e380d5640bf3b2d400a1ea7d9bad7e69d933e?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                      alt="Instagram"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </a>
                  <a href="#" aria-label="Twitter" tabIndex={0}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/661280c6cc5b40a713900f25deb07d7ad4eb7d295a155c19d79b424fd229e7e7?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                      alt="Twitter"
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
                <nav className="flex overflow-hidden flex-col font-bold w-[148px]" aria-label="Company Info">
                  <h3 className="text-base tracking-normal text-slate-800">Company Info</h3>
                  <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                    <a href="/about" tabIndex={0}>
                      About Us
                    </a>
                    <a href="/careers" className="mt-2.5" tabIndex={0}>
                      Careers
                    </a>
                    <a href="/hiring" className="mt-2.5" tabIndex={0}>
                      We are hiring
                    </a>
                    <a href="/blog" className="mt-2.5" tabIndex={0}>
                      Blog
                    </a>
                  </div>
                </nav>
                <nav className="flex overflow-hidden flex-col font-bold w-[152px]" aria-label="Legal">
                  <h3 className="text-base tracking-normal text-slate-800">Legal</h3>
                  <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                    <a href="/privacy" tabIndex={0}>
                      Privacy Policy
                    </a>
                    <a href="/terms" className="mt-2.5" tabIndex={0}>
                      Terms of Service
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-20 w-full text-sm font-bold tracking-wide leading-6 bg-neutral-50 text-neutral-500 max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-start py-6 w-full max-w-[1050px] max-md:max-w-full">
              <div className="flex overflow-hidden gap-10 items-center max-w-full w-[600px]">
                <p className="overflow-hidden self-stretch my-auto min-w-[240px] w-[600px]">
               
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 