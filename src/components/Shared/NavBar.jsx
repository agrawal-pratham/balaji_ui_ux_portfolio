import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
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
    <nav className="fixed flex justify-center items-end w-full h-16 bottom-5 z-20">
      <div className="mx-3 flex h-fit w-fit min-w-0 items-end gap-[10px] rounded-[20px] border-y-[0.075rem] border-[#404040b1] bg-[#00000051] p-[10px] backdrop-blur-[15px] transition-all duration-200 ease-[cubic-bezier(0.22, 1, 0.36, 1)]  overflow-visible">
        <nav className="flex justify-between">
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
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-300"></span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </nav>
  );
}
