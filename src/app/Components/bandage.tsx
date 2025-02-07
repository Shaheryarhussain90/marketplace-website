import React from 'react';
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image';  // Import Image from next/image

export default function Bandage() {
  return (
    <div>
      <div id="bandage" className="flex overflow-hidden flex-col self-stretch bg-white">
        <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-0.5 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1057px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center py-10 w-full max-md:mr-2 max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
                <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
                  <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
                    <Link href="/" passHref>
                      <a tabIndex={0}>Bandage</a>
                    </Link>
                  </div>
                </div>
                <nav className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]" aria-label="Social Media Links">
                  <div className="flex overflow-hidden gap-5 justify-center items-center">
                    <Link href="#" passHref>
                      <a tabIndex={0} aria-label="Visit our Facebook page">
                        <Image
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc63d1c42ce23b5f128bb9342a3c4cf333cc014e89fddc45c5b5090c6c5936a1?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                          alt="Facebook icon"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                          width={24}
                          height={24}
                        />
                      </a>
                    </Link>
                    <Link href="#" passHref>
                      <a tabIndex={0} aria-label="Visit our Instagram page">
                        <Image
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcb007c11f84d58a1d4d033bddda28c2a1064863b84e729c68abe0b44fdae36?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                          alt="Instagram icon"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                          width={24}
                          height={24}
                        />
                      </a>
                    </Link>
                    <Link href="#" passHref>
                      <a tabIndex={0} aria-label="Visit our Twitter page">
                        <Image
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aab0f4e92533518bc86c96149e73e1c9b6c8dc2561116c9a4b9273f2a1c7449e?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                          alt="Twitter icon"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                          width={24}
                          height={24}
                        />
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className="z-10 shrink-0 h-px border border-solid border-neutral-200 max-md:max-w-full" />
          </div>
        </div>
        <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center py-12 w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
              <nav className="flex overflow-hidden flex-col font-bold w-[148px]" aria-label="Company Information">
                <h2 className="text-base tracking-normal text-slate-800">Company Info</h2>
                <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <Link href="#" passHref>
                    <a tabIndex={0}>About Us</a>
                  </Link>
                  <Link href="#" passHref>
                    <a tabIndex={0} className="mt-2.5">Careers</a>
                  </Link>
                  <Link href="#" passHref>
                    <a tabIndex={0} className="mt-2.5">We are hiring</a>
                  </Link>
                </div>
              </nav>
              <nav className="flex overflow-hidden flex-col font-bold w-[152px]" aria-label="Legal Information">
                <h2 className="text-base tracking-normal text-slate-800">Legal</h2>
                <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <Link href="#" passHref>
                    <a tabIndex={0}>Privacy Policy</a>
                  </Link>
                  <Link href="#" passHref>
                    <a tabIndex={0} className="mt-2.5">Terms of Service</a>
                  </Link>
                </div>
              </nav>
              <nav className="flex overflow-hidden flex-col font-bold w-[148px]" aria-label="Features">
                <h2 className="text-base tracking-normal text-slate-800">Features</h2>
                <div className="flex flex-col mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <Link href="#" passHref>
                    <a tabIndex={0}>Business Marketing</a>
                  </Link>
                  <Link href="#" passHref>
                    <a tabIndex={0} className="mt-2.5">User Analytics</a>
                  </Link>
                  <Link href="#" passHref>
                    <a tabIndex={0} className="mt-2.5">Live Chat</a>
                  </Link>
                </div>
              </nav>
              <nav className="flex overflow-hidden flex-col font-bold w-[152px]" aria-label="Resources">
                <h2 className="text-base tracking-normal text-slate-800">Resources</h2>
                <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <Link href="#" passHref>
                    <a tabIndex={0}>IOS &amp; Android</a>
                  </Link>
                  <Link href="#" passHref>
                    <a tabIndex={0} className="mt-2.5">Watch a Demo</a>
                  </Link>
                  <Link href="#" passHref>
                    <a tabIndex={0} className="mt-2.5">Customers</a>
                  </Link>
                </div>
              </nav>
              <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
                <h2 className="text-base font-bold tracking-normal text-slate-800">Get In Touch</h2>
                <div className="flex flex-col mt-5 w-full tracking-wide leading-7 max-w-[321px]">
                  <form className="flex overflow-hidden gap-5 justify-between pl-5 text-sm rounded-md border border-solid bg-stone-50 border-neutral-200">
                    <label htmlFor="emailSubscribe" className="sr-only">Your Email</label>
                    <input
                      type="email"
                      id="emailSubscribe"
                      placeholder="Your Email"
                      className="bg-transparent border-none text-neutral-500 w-full focus:outline-none"
                      required
                      aria-label="Email subscription input"
                    />
                    <button
                      type="submit"
                      className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="self-start text-xs text-neutral-500">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
