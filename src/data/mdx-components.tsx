import Link from "next/link";

export function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}

export const mdxComponents = {
  p: (props: any) => (
    <p
      {...props}
      className="text-xs md:text-sm font-bold font-manrope text-secondary/50 dark:text-white/70 my-4 leading-[1.3rem] md:leading-[1.6rem] text-pretty first:mt-0"
    />
  ),
  h2: (props: any) => {
    const anchor = getAnchor(props.children as string);

    return (
      <Link href={`#${anchor}`} className="group relative" passHref>
        <p className="absolute top-0 -left-4 group-hover:-left-5 font-medium text-md text-secondary/50 dark:text-white/70 opacity-0 group-hover:opacity-100 duration-200">
          #
        </p>
        <h2
          {...props}
          id={anchor}
          className="text-lg md:text-xl font-semibold text-secondary/70 dark:text-white text-pretty leading-[1.4rem] md:leading-[1.6rem] my-5 scroll-mt-20 hover:underline underline-offset-2"
        />
      </Link>
    );
  },
  h3: (props: any) => {
    const anchor = getAnchor(props.children as string);

    return (
      <Link href={`#${anchor}`} className="group relative" passHref>
        <p className="absolute top-0 -left-4 group-hover:-left-5 font-medium text-md text-secondary/50 dark:text-white/70 opacity-0 group-hover:opacity-100 duration-200">
          #
        </p>
        <h3
          {...props}
          id={anchor}
          className="font-semibold text-secondary/70 dark:text-white my-5 text-pretty leading-[1.4rem] md:leading-[1.6rem] scroll-mt-20 first:mt-0 hover:underline underline-offset-2"
        />
      </Link>
    );
  },
  img: (props: any) => (
    <img {...props} className="object-cover object-center my-8" />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-[3px] pl-5 border-secondary/40"
    />
  ),
  hr: (props: any) => <hr {...props} className="border-secondary/20" />,
};
