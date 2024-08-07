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
              key={link.href}
              href={link.href}
              className={`${
                pathName == link.href ? "font-normal" : ""
              } group transition duration-300`}
            >
              {link.text}
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-300"></span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
