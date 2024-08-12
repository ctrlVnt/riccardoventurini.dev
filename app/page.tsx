import Link from "next/link";
import React from "react";
import Head from 'next/head';
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy policy", href: "/privacy/riccardoventurini" },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>riccardoventurini.dev</title>
        <meta name="description" content="Web & Mobile developer. Welcome to my personal website!"/>

        <meta property="og:url" content="https://riccardoventurini.dev/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="riccardoventurini.dev"/>
        <meta property="og:description" content="Web & Mobile developer. Welcome to my personal website!"/>
        <meta property="og:image" content="https://riccardoventurini.dev/previewl.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="riccardoventurini.dev"/>
        <meta property="twitter:url" content="https://riccardoventurini.dev/"/>
        <meta name="twitter:title" content="riccardoventurini.dev"/>
        <meta name="twitter:description" content="Web & Mobile developer. Welcome to my personal website!"/>
        <meta name="twitter:image" content="https://riccardoventurini.dev/previewl.png"/>
    </Head>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-10">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-400 hover:text-zinc-300 animate-pulse" style={{ animationDelay: `${index * 300}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text ">
          Riccardo Venturini
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-400 ">
            Full stack developer
          </h2>
        </div>
      </div>
      <footer>
      {navigation.map((item, index) => (
               <Link
               key={item.href[2]}
               href={item.href[2]}
               className="text-sm duration-500 text-zinc-400 hover:text-zinc-300 animate-pulse">
               {item.name[2]}
             </Link>
            ))}
      </footer>
    </div>
  );

}
