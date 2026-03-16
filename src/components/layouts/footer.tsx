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
  IconBrandSpotify,
  IconBrandSpotifyFilled,
  IconBrandTailwind,
  IconBrandVercel,
  IconLetterCSmall,
  IconLetterVSmall,
  IconLink,
  IconSocial,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "./navbar";
import DelayedItem from "./components/delayed-item";
import { Skeleton } from "../ui/skeleton";

function ContactItem({ icon, link }: { icon: ReactNode; link: string }) {
  return (
    <Link href={link} className="group w-fit" target="_blank" passHref>
      <div className="flex items-center gap-2 text-xs md:text-base opacity-50 hover:opacity-100 duration-200">
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
  const [loadingSong, setLoadingSong] = useState<boolean>(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const res = await fetch("/api/spotify");
      const data = await res.json();
      if (!data.error) setSong(data);
      setLoadingSong(false);
    };
    fetchNowPlaying();

    // Optional: refresh every 60 seconds
    const interval = setInterval(fetchNowPlaying, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-6 md:py-12 xl:py-16">
      <section
        className={cn(
          "w-full max-w-screen-lg mx-auto duration-500",
          pathname.includes("/posts/") ? "px-0" : "px-4 md:px-12",
        )}
      >
        <div className="w-full grid grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(8,1fr)] border-2 border-secondary/20 border-dashed rounded-[32px] shadow-inner overflow-hidden">
          {/* Logo */}
          <div className="lg:col-span-2 lg:row-span-3 flex items-center justify-center">
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

          {/* Link pages */}
          <div className="col-span-3 lg:border-2 border-secondary/20 border-dashed lg:border-t-0 flex gap-12 items-center justify-center h-20">
            {menuItems.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-sm font-medium text-secondary/40 hover:text-secondary duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Spotify */}
          <div className="col-span-4 lg:col-span-3 border-t-2 lg:border-b-2 lg:border-t-0 border-secondary/20 border-dashed h-20 flex gap-6 items-center justify-center px-6 relative overflow-hidden">
            <IconBrandSpotify className="size-14 absolute -bottom-4 -right-4 rotate-[20deg] text-secondary/5" />

            <div className="w-full flex flex-col gap-0.5">
              <div className="flex items-center justify-between">
                {loadingSong ? (
                  <Skeleton className="w-40 h-6" />
                ) : (
                  <DelayedItem start="bottom" end="top" delay={0.25}>
                    <Link
                      href={song?.songUrl || "#"}
                      className="w-fit -mt-1"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      title={song?.title}
                      passHref
                    >
                      <p className="font-semibold text-secondary/60 capitalize hover:text-secondary/40 duration-200 truncate w-[220px]">
                        {song?.title}
                      </p>
                    </Link>
                  </DelayedItem>
                )}

                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 items-center">
                    <div className="h-[10px] w-0.5 bg-secondary/40 rounded-full animate-music-audio" />
                    <div className="h-[10px] w-0.5 bg-secondary/40 rounded-full animate-music-audio delay-200" />
                    <div className="h-[10px] w-0.5 bg-secondary/40 rounded-full animate-music-audio delay-500" />
                    <div className="h-[10px] w-0.5 bg-secondary/40 rounded-full animate-music-audio delay-75" />
                  </div>
                  <p className="text-sm text-secondary/40 font-medium">
                    {song?.isPlaying ? "Online" : "Offline"}
                  </p>
                </div>
              </div>

              {loadingSong ? (
                <Skeleton className="w-20 h-4" />
              ) : (
                <DelayedItem start="bottom" end="top" delay={0.4}>
                  <p className="font-manrope font-bold text-xs text-secondary/40 capitalize truncate w-[250px]">
                    {song?.artist}
                  </p>
                </DelayedItem>
              )}
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-4 lg:col-span-2 border-y-2 lg:border-x-2 lg:border-y-0 border-secondary/20 border-dashed flex gap-8 lg:gap-5 justify-center items-center h-20 p-4 relative overflow-hidden">
            <IconLink className="size-14 absolute -bottom-4 -right-4 lg:-top-4 lg:-right-4 -rotate-[90deg] text-secondary/5" />
            <ContactItem
              icon={
                <IconBrandGmail className="text-secondary size-6 lg:size-5" />
              }
              link="mailto:ardihp8@gmail.com"
            />
            <ContactItem
              icon={
                <IconBrandInstagram className="text-secondary size-6 lg:size-5" />
              }
              link="https://www.instagram.com/ardi.hp/"
            />
            <ContactItem
              icon={
                <IconBrandGithub className="text-secondary size-6 lg:size-5" />
              }
              link="https://github.com/ardihp"
            />
            <ContactItem
              icon={
                <IconBrandLinkedin className="text-secondary size-6 lg:size-5" />
              }
              link="https://www.linkedin.com/in/ardi-hp"
            />
            <ContactItem
              icon={
                <div className="flex items-center gap-0">
                  <IconLetterCSmall className="text-secondary ml-[-10px] lg:ml-[-4px] size-8 lg:size-6" />
                  <IconLetterVSmall className="text-secondary ml-[-20px] lg:ml-[-14px] md:ml-[-16px] size-8 lg:size-6" />
                </div>
              }
              link="https://drive.google.com/file/d/1W771KkKruTaHKY2PT_Z3NiGYe8J5gyCu/view?usp=sharing"
            />
          </div>

          {/* Made with */}
          <div className="col-span-2 lg:border-r-2 border-secondary/20 border-dashed hidden lg:flex flex-col items-center justify-center h-20">
            <p className="text-secondary/60 font-medium text-sm">
              Made with ❤️ & 🥴
            </p>
          </div>

          {/* Copyright */}
          <div className="col-span-4 lg:col-span-2 flex items-center justify-center h-20">
            <p className="text-secondary/60 font-medium text-sm">
              Copyright © {new Date().getFullYear()} ardihp
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
