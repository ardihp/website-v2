export const mdxComponents = {
  p: (props: any) => (
    <p
      {...props}
      className="text-xs md:text-sm font-semibold font-manrope text-secondary/70 dark:text-white my-4 leading-[1.3rem] md:leading-[1.6rem] text-pretty"
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className="text-lg md:text-xl font-semibold text-secondary/70 dark:text-white my-5 text-pretty leading-[1.4rem] md:leading-[1.6rem]"
    />
  ),
  img: (props: any) => (
    <img {...props} className="object-cover object-center" />
  ),
};
