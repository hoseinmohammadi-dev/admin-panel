import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="w-full mb-4">
            <div className="flex items-center justify-between w-[90%] max-w-3xl mx-auto p-4 rounded-2xl bg-(--color-surface) backdrop-blur-md">
                <div className="flex items-center gap-1.5 md:gap-3">
                    <Image
                        src="/image/hosein.png"
                        alt="Hosein Mohammadi"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <div className="flex flex-col justify-center" >
                        <h2 className="font-semibold text-(--color-text) text-[16px] sm:text-[18px]">Hosein Mohammadi</h2>
                        <p className="text-(--color-text) opacity-60 text-[14px] sm:text-[16px] text-left">Front End Developer</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-5 text-xl text-(--color-text)">
                    <a className="hover:text-(--color-primary) transition-colors" href="https://github.com/hoseinmohammadi-dev" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={23} />
                    </a>
                    <a className="hover:text-(--color-primary) transition-colors" href="https://instagram.com/hoseinmdev" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={23} />
                    </a>
                    <a className="hover:text-(--color-primary) transition-colors" href="https://linkedin.com/in/hoseinmohammadi-dev" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={23} />
                    </a>
                </div>

            </div >
        </section>

    )
}