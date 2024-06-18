import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-[500] tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/3 gap-10 flex">
          <div>
            <h4 className="mb-10 text-zinc-300 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, idx) => (
              <a className="block mt-3 text-zinc-600 capitalize">{item}</a>
            ))}
          </div>
          <div>
            <h4 className="mb-10 text-zinc-300 capitalize">sitemap</h4>
            {["home", "work", "career", "contact"].map((item, idx) => (
              <a className="block mt-3 text-zinc-400 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Refokus is poineering digital agency driven by desing and
              empowered by technology.
            </p>
            <img className="mt-5"
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
