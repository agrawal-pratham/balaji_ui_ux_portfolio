import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Headers() {
  const pathName = usePathname();

  const links = [
    {
      href: "/",
      text: "Home",
      target: "_self",
    },
    {
      href: "/about",
      text: "About Me",
      target: "_self",
    },
    {
      href: "https://drive.google.com/file/d/1HZrPdfAlXm3YIAKzaSIFGL1ymDDCVwtn/view?usp=sharing",
      text: "Resume",
      target: "_blank",
    },
  ];

  return (
    <div className=" w-svw fixed py-4 px-8 bg-black text-white">
      <nav className="flex justify-between">
        <Link href="/" className="text-xl font-light ">
          Balaji UXUI
        </Link>

        <div className="font-light flex gap-4 items-center">
          {links?.map((link) => (
            <Link
              target={link.target}
              href={link.href}
              className={`${
                pathName == link.href
                  ? "font-medium text-lg leading-none"
                  : "leading-none"
              } `}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
