import React from 'react'

export default function team() {
  return (
    <div>
      <div className="flex overflow-hidden flex-col bg-white">
  <div className="flex overflow-hidden flex-col pb-8 w-full font-bold bg-white max-md:max-w-full">
    <nav
      className="flex overflow-hidden flex-col items-center px-20 pt-5 w-full bg-white bg-opacity-50 max-md:px-5 max-md:max-w-full"
      aria-label="Main navigation"
    >
      <div className="flex z-10 flex-col -mb-8 w-full max-w-[1043px] max-md:mb-2.5 max-md:max-w-full">
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
              aria-label="Secondary navigation"
            >
              <a
                href="/"
                className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
              >
                Home
              </a>
              <a
                href="/product"
                className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
              >
                Product
              </a>
              <a
                href="/pricing"
                className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
              >
                Pricing
              </a>
              <a
                href="/contact"
                className="overflow-hidden self-stretch my-auto hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex gap-10 items-center text-sm tracking-wide leading-loose">
            <a
              href="/login"
              className="overflow-hidden self-stretch my-auto text-right text-sky-500 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
            >
              Login
            </a>
            <a
              href="/register"
              className="flex overflow-hidden gap-4 items-center px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 max-md:px-5"
            >
              <span>Become a member</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/deb6c3412193311a2e140ebee9ccf6a3ca59f170b9fb3438b86d304adb38e1e5?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[1.2]"
              />
            </a>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-center items-center self-center py-12 mt-8 max-w-full tracking-wide text-center w-[870px]">
          <div className="flex overflow-hidden items-center max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
              <div className="text-base tracking-normal text-neutral-500">
                WHAT WE DO
              </div>
              <h1 className="mt-4 text-6xl leading-none text-slate-800 max-md:max-w-full max-md:text-4xl">
                Innovation tailored for you
              </h1>
              <nav
                className="flex overflow-hidden gap-4 items-center py-2.5 mt-4 text-sm leading-6"
                aria-label="Breadcrumb"
              >
                <a
                  href="/"
                  className="self-stretch my-auto text-slate-800 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
                >
                  Home
                </a>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7928dd06ba9ab540a32c75d928c13e48d297a4dae1b94683acc425ca629caae4?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
                />
                <span className="self-stretch my-auto text-neutral-500">
                  Team
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  {/* Gallery Section */}
  <section
    className="overflow-hidden justify-center w-full bg-white max-md:max-w-full"
    aria-label="Team gallery"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f35d40acb995a803f75c9ba7cb57ac23dc4d868f08fee87759553e178262a4d?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
          alt="Team member working"
          className="object-contain grow w-full aspect-[1.32] max-md:mt-2.5 max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="grid grid-cols-2 gap-5 w-full max-md:mt-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f1c8e8a5a07c86f6bdae925179b7238c95b93d03b6d8ca2fe98c238fbc892c?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Team collaboration"
            className="object-contain w-full aspect-[1.39]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b376bb3beba2d765cc18f201a106615371db3f2f224fe4dde947d7589225cbf3?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Team meeting"
            className="object-contain w-full aspect-[1.39]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd141674e974d3c3447a6638340706dac3a734859b4222b7c5f9ef98eb73ea7c?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Team discussion"
            className="object-contain w-full aspect-[1.39]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38ee15f57e3cc0f1d895528229f103d147adce00924f758ad536bd0e7b5fc1d8?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Team planning"
            className="object-contain w-full aspect-[1.39]"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Team Members Section */}
  <section
    className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full"
    aria-label="Team members"
  >
    <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
      <h2 className="text-4xl font-bold tracking-wide leading-none text-slate-800">
        Meet Our Team
      </h2>
      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 max-md:mt-10 w-full">
        {/* Team Member Cards - First Row */}
        <div className="flex flex-col bg-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1620400716405979ab7f057a325eca4e3b66c9037f79b42e38346fd68110ed87?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
            alt="Team member portrait"
            className="object-contain w-full aspect-[1.37]"
          />
          <div className="flex flex-col items-center p-8">
            <h3 className="text-base font-bold tracking-normal text-slate-800">
              Username
            </h3>
            <p className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-neutral-500">
              Profession
            </p>
            <div className="flex gap-5 mt-2.5">
              <a
                href="#"
                className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
                aria-label="Facebook profile"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e84caeac3f77e4970e4bf1491fbf8217390e143f450940a0a84708548cb654d7?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
                aria-label="Instagram profile"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/176cc1f1dfa1062992e850d5f5410b83c1516278406f267fbdb70d06bf776133?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
                aria-label="Twitter profile"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/27be07ddce8b4fa74bdb6304a881b71b5f5d423d3838e753f742b87f047a3bcd?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Repeated for all team members with unique images */}
        {/* Additional team member cards follow same structure */}
      </div>
    </div>
  </section>
  {/* Call to Action Section */}
  <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[607px]">
        <h2 className="text-4xl font-bold tracking-wide leading-none text-center text-slate-800">
          Start your 14 days free trial
        </h2>
        <p className="mt-8 text-sm tracking-wide leading-5 text-center text-neutral-500">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <a
          href="/trial"
          className="mt-8 px-10 py-4 bg-sky-500 hover:bg-sky-600 text-sm font-bold tracking-wide text-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Try it free now
        </a>
        <div className="flex gap-9 mt-8">
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Visit our Facebook"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e755e31b7d434cb1f6e763e8f2e03261c73e98d87dcfa232057e1a244f193431?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
              alt=""
              className="w-[30px] h-[30px]"
            />
          </a>
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Visit our Instagram"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01540e0da4b9effd01ea95d3b925244314a97af7c03d172df1f2562fc650bfbb?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
              alt=""
              className="w-[30px] h-[30px]"
            />
          </a>
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Visit our Twitter"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe737adfc48704ddf3ce535bad04ebe8713d58b70337e3d2b85d5e609d5c97df?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
              alt=""
              className="w-[30px] h-[30px]"
            />
          </a>
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Visit our LinkedIn"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d0ac4c29570637c8feed5b484654dee8c84a2c4ebe2f3c8657a63ddbf8c5ad?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
              alt=""
              className="w-[30px] h-[30px]"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center self-center py-10 w-full max-w-[1050px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        <a
          href="/"
          className="text-2xl font-bold tracking-normal text-slate-800"
        >
          Bandage
        </a>
        <div className="flex gap-5">
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Facebook"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50d3970e623650671634c8606ec52ffe0ecc1b74460ca7551b6021e6aad8fd06?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
              alt=""
              className="w-6 h-6"
            />
          </a>
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Instagram"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fe58238556f7fbb943f834aab508d15eaad88c542d4e5e1ac91589fb9d9f1ab?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
              alt=""
              className="w-6 h-6"
            />
          </a>
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Twitter"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae786f9e97fa17b5e4cacf8cf975584977ee53d3345934ee1668b6d4f58e68c9?placeholderIfAbsent=true&apiKey=95ed8410c5ba4d8784e718c45a19e710"
              alt=""
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
    <hr className="border-neutral-200" />
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-[1050px]">
        {/* Footer Links */}
        <div className="flex flex-col font-bold">
          <h3 className="text-base tracking-normal text-slate-800">
            Company Info
          </h3>
          <nav
            className="flex flex-col mt-5 text-sm tracking-wide leading-6 text-neutral-500"
            aria-label="Company information"
          >
            <a
              href="/about"
              className="hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
            >
              About Us
            </a>
            <a
              href="/careers"
              className="mt-2.5 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
            >
              Carrier
            </a>
            <a
              href="/hiring"
              className="mt-2.5 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
            >
              We are hiring
            </a>
            <a
              href="/blog"
              className="mt-2.5 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-sm"
            >
              Blog
            </a>
          </nav>
        </div>
        {/* Newsletter Signup */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <h3 className="text-base font-bold tracking-normal text-slate-800">
            Get In Touch
          </h3>
          <form className="mt-5" aria-label="Newsletter signup">
            <div className="flex">
              <label htmlFor="email-input" className="sr-only">
                Your Email
              </label>
              <input
                type="email"
                id="email-input"
                placeholder="Your Email"
                className="flex-grow px-5 py-4 text-sm text-neutral-500 rounded-l-md border border-r-0 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 text-sm text-white bg-sky-500 hover:bg-sky-600 rounded-r-md border border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-xs text-neutral-500">
              Lore imp sum dolor Amit
            </p>
          </form>
        </div>
      </div>
    </div>
    <div className="flex overflow-hidden flex-col items-center px-20 w-full text-sm font-bold tracking-wide leading-6 bg-neutral-50 text-neutral-500 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center items-start py-6 w-full max-w-[1050px] max-md:max-w-full">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}
