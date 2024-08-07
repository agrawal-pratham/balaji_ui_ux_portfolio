import Link from "next/link";
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function Footer() {
  const social_links = [
    {
      href: "https://www.linkedin.com/in/balaji-p-397256218/",
      title: "linkedin",
      icon: FaLinkedinIn,
    },
    {
      href: "https://www.behance.net/218d0b88",
      title: "behance",
      icon: FaBehance,
    },
    {
      href: "https://www.instagram.com/peter_bala21/",
      title: "instagram",
      icon: FaInstagram,
    },
    {
      href: "https://medium.com/@balajipaulpandian",
      title: "medium",
      icon: FaMedium,
    },
  ];

  return (
    <footer className={`py-6 bg-[#323232] text-white`}>
      <section className="container mx-auto flex items-center justify-between">
        <p className="font-montserrat self-start text-lg font-medium">
          Don’t forget to smile
        </p>
        <div id="social_links" className="flex gap-10">
          {social_links.map((link) => (
            <Link
              href={link.href}
              title={link.title}
              target="_blank"
              key={link.title}
              className="border rounded-md p-2 hover:scale-110 transition-all duration-200"
            >
              {<link.icon className="text-3xl" />}
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
}
