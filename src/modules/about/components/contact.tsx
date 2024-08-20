import DelayedItem from "@/components/layouts/components/delayed-item";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconExternalLink,
  IconLetterCSmall,
  IconLetterVSmall,
  IconSlash,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ContactItemProps {
  title: string;
  text: string;
  icon: ReactNode;
  link: string;
}

function ContactItem({ icon, text, title, link }: ContactItemProps) {
  return (
    <DelayedItem start="bottom" end="bottom" delay={0.4}>
      <Link href={link} className="group w-fit" target="_blank" passHref>
        <div className="flex items-center gap-2 text-xs md:text-base">
          {icon}
          <IconSlash className="text-secondary/70 dark:text-white" size={16} />
          <p className="font-medium text-secondary/50 dark:text-white/70">
            {title}
          </p>
          <IconSlash className="text-secondary/70 dark:text-white" size={16} />
          <p className="font-medium text-secondary/70 dark:text-white">
            {text}
          </p>

          <IconExternalLink
            className="text-secondary/70 dark:text-white ml-0 opacity-0 group-hover:opacity-100 group-hover:ml-2 duration-300"
            size={16}
          />
        </div>
      </Link>
    </DelayedItem>
  );
}

export default function ContactSection() {
  return (
    <DelayedItem start="bottom" end="bottom" delay={0.35}>
      <article className="gap-4 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] p-6 pt-10 md:p-10 md:pt-14 lg:p-16 lg:pt-20 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
        <section
          className="absolute top-[-28px] md:top-[-40px] left-[26px] md:left-[32px] lg:left-[54px] w-fit md:w-auto p-2 md:p-4 px-3 md:px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-difference"
          style={{ backgroundSize: "110px" }}
        >
          <div className="p-3 md:p-4 rounded-[8px] md:rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
            <p className="shadowed-text text-primary text-[16px] md:text-[20px] font-[600]">
              Contact
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4 md:gap-6">
          <ContactItem
            icon={
              <IconBrandGmail className="text-secondary/50 dark:text-white/70 h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
            }
            title="email"
            text="ardihp8@gmail.com"
            link="mailto:ardihp8@gmail.com"
          />
          <ContactItem
            icon={
              <IconBrandInstagram className="text-secondary/50 dark:text-white/70 h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
            }
            title="instagram"
            text="ardi.hp"
            link="https://www.instagram.com/ardi.hp/"
          />
          <ContactItem
            icon={
              <IconBrandGithub className="text-secondary/50 dark:text-white/70 h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
            }
            title="github"
            text="ardi.hp"
            link="https://github.com/ardihp"
          />
          <ContactItem
            icon={
              <IconBrandLinkedin className="text-secondary/50 dark:text-white/70 h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
            }
            title="linkedin"
            text="Ardiansyah Halim Putra"
            link="https://www.linkedin.com/in/ardi-hp"
          />
          <ContactItem
            icon={
              <div className="flex items-center gap-0">
                <IconLetterCSmall className="text-secondary/50 dark:text-white/70 ml-[-4px] h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
                <IconLetterVSmall className="text-secondary/50 dark:text-white/70 ml-[-14px] md:ml-[-16px] h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
              </div>
            }
            title="resume"
            text="Ardiansyah Halim Putra"
            link="https://drive.google.com/file/d/1Qzn5g2Sb64zaowcielgfEPsWgUurwpPb/view?usp=sharing"
          />
        </section>
      </article>
    </DelayedItem>
  );
}
