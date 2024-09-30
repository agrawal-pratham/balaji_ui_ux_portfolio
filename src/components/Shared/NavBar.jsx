import { DownloadIcon, HomeIcon, InfoIcon, WorkIcon } from "@/icons/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  const links = [
    {
      href: "/",
      text: "Home",
      target: "_self",
      icon: <HomeIcon />,
    },
    {
      href: "/about",
      text: "About Me",
      target: "_self",
      icon: <InfoIcon />,
    },
    {
      href: "/work",
      text: "Work",
      target: "_self",
      icon: <WorkIcon />,
    },
    {
      href: "https://drive.google.com/file/d/1HZrPdfAlXm3YIAKzaSIFGL1ymDDCVwtn/view?usp=sharing",
      text: "Resume",
      target: "_blank",
      icon: <DownloadIcon />,
    },
  ];

  return (
    <nav className="fixed flex justify-center items-end w-full  bottom-5 z-20 text-white">
      <div className="mx-3 flex h-full w-fit min-w-0 items-center gap-[10px] rounded-[20px] border-y-[0.075rem] border-[#404040b1] bg-[#00000051]  backdrop-blur-[15px] transition-all px-4 pt-3 pb-1 duration-200 ease-[cubic-bezier(0.22, 1, 0.36, 1)]  overflow-visible">
        <nav className="flex justify-between">
          <div className="font-light flex gap-4 items-center">
            {links?.map((link) => {
              const isActive = pathName == link.href;
              return (
                <Link
                  target={link.target}
                  key={link.href}
                  href={link.href}
                  className={`${isActive ? "fill-active" : "fill-inactive"} 
                group transition duration-300 flex items-center flex-col gap-1 `}
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-lg bg-bg-color">
                    {link.icon}
                  </div>
                  <span
                    className={`block transition-all duration-500 font-medium border-border-color text-sm ${
                      isActive ? "text-active" : " text-inactive"
                    } rounded-sm  opacity-0 group-hover:opacity-100 bg-bg-color px-2 py-1 -top-9 fixed`}
                  >
                    {link.text}
                  </span>
                  <span
                    className={`block transition-all duration-500 h-1 ${
                      isActive ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100 rounded-full w-1 ${
                      isActive ? "bg-active" : "bg-inactive"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </nav>
  );
}
