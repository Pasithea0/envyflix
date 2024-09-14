export interface HeroTitleProps {
  children?: React.ReactNode;
  className?: string;
}

export function HeroTitle(props: HeroTitleProps) {
  return (
    <h1
      className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 sm:text-3xl md:text-4xl ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </h1>
  );
}
