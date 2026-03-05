"use client";

import React, { ReactNode, useEffect, useState } from "react";
import FooterTechItem from "./components/footer-tech-item";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandRadixUi,
  IconBrandSpotifyFilled,
  IconBrandTailwind,
  IconBrandVercel,
  IconLetterCSmall,
  IconLetterVSmall,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

function ContactItem({ icon, link }: { icon: ReactNode; link: string }) {
  return (
    <Link href={link} className="group w-fit" target="_blank" passHref>
      <div className="flex items-center gap-2 text-xs md:text-base opacity-50 hover:opacity-100">
        {icon}
      </div>
    </Link>
  );
}

interface SongItem {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export default function FooterSection() {
  const pathname = usePathname();
  const [song, setSong] = useState<SongItem | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const res = await fetch("/api/spotify");
      const data = await res.json();
      if (!data.error) setSong(data);
    };
    fetchNowPlaying();

    // Optional: refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-6 md:py-16">
      <section
        className={cn(
          "w-full max-w-screen-lg mx-auto",
          pathname.includes("/posts/")
            ? "px-4 md:px-6 xl:px-0"
            : "px-4 md:px-8 xl:px-12",
        )}
      >
        <div className="w-full grid grid-cols-[repeat(8,1fr)] border-2 border-secondary/20 border-dashed rounded-[32px] shadow-inner">
          <div className="col-span-2 row-span-3 flex items-center justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="Logo Website"
                className="object-cover"
                sizes="50px"
                priority
              />
            </Link>
          </div>
          <div className="col-span-3 border-2 border-secondary/20 border-dashed border-t-0 flex gap-6 items-center justify-center h-20">
            <ContactItem
              icon={
                <IconBrandGmail className="text-secondary size-4 md:size-5" />
              }
              link="mailto:ardihp8@gmail.com"
            />
            <ContactItem
              icon={
                <IconBrandInstagram className="text-secondary size-4 md:size-5" />
              }
              link="https://www.instagram.com/ardi.hp/"
            />
            <ContactItem
              icon={
                <IconBrandGithub className="text-secondary size-4 md:size-5" />
              }
              link="https://github.com/ardihp"
            />
            <ContactItem
              icon={
                <IconBrandLinkedin className="text-secondary size-4 md:size-5" />
              }
              link="https://www.linkedin.com/in/ardi-hp"
            />
            <ContactItem
              icon={
                <div className="flex items-center gap-0">
                  <IconLetterCSmall className="text-secondary ml-[-4px] h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
                  <IconLetterVSmall className="text-secondary ml-[-14px] md:ml-[-16px] h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
                </div>
              }
              link="https://drive.google.com/file/d/1W771KkKruTaHKY2PT_Z3NiGYe8J5gyCu/view?usp=sharing"
            />
          </div>
          <div className="col-span-3 border-b-2 border-secondary/20 border-dashed h-20 flex gap-6 items-center justify-center px-6">
            {/* <div className="flex gap-0.5 items-center">
              <div className="h-5 w-1 bg-secondary/40 rounded-full" />
              <div className="h-5 w-1 bg-secondary/40 rounded-full" />
              <div className="h-5 w-1 bg-secondary/40 rounded-full" />
              <div className="h-5 w-1 bg-secondary/40 rounded-full" />
            </div> */}
            <div className="w-full flex flex-col gap-0.5">
              <Link
                href={song?.songUrl || "#"}
                className="w-fit -mt-1"
                target="_blank"
                referrerPolicy="no-referrer"
                passHref
              >
                <p className="font-semibold text-secondary/60 capitalize hover:text-secondary/40 duration-200 text-lg truncate w-[250px]">
                  {song?.title}
                </p>
              </Link>
              <p className="font-manrope font-bold text-sm text-secondary/40 capitalize truncate w-[250px]">
                {song?.artist}
              </p>
            </div>
          </div>
          <div className="col-span-2 border-x-2 border-secondary/20 border-dashed flex flex-col items-center justify-center h-20">
            <p className="text-secondary/60 font-medium text-sm">
              Made with ❤️ & 🥴
            </p>
          </div>
          <div className="col-span-2 border-r-2 border-secondary/20 border-dashed flex gap-3 justify-center items-center h-20 p-4">
            <p className="text-secondary/60 font-medium text-sm">Tech used</p>
            <div className="flex items-center gap-1 rounded-full">
              <FooterTechItem
                href="https://nextjs.org/"
                title="Next.js"
                icon={
                  <IconBrandNextjs className="text-secondary dark:text-white size-4 md:size-[18px]" />
                }
              />
              <FooterTechItem
                href="https://tailwindcss.com/"
                title="Tailwind Css"
                icon={
                  <IconBrandTailwind className="text-secondary dark:text-white size-4 md:size-[18px]" />
                }
              />
              <FooterTechItem
                href="https://ui.shadcn.com/"
                title="Radix with Shadcn/ui"
                icon={
                  <IconBrandRadixUi className="text-secondary dark:text-white  size-4 md:size-[18px]" />
                }
              />
              <FooterTechItem
                href="https://vercel.com/home"
                title="Vercel"
                icon={
                  <IconBrandVercel
                    fill="#470A00"
                    className="text-secondary dark:text-white size-4 md:size-[18px]"
                  />
                }
              />
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center h-20">
            <p className="text-secondary/60 font-medium text-sm">
              © {new Date().getFullYear()} ardihp
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
