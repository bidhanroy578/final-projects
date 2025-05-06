import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="grid md:grid-cols-2 text-center text-white">
            <aside className="bg-[#1f2937] p-10">
                <h6 className="mb-4 font-medium text-3xl">CONTACT US</h6>
                <p>
                    123 ABS Street, Uni 21, Bangladesh <br />
                    +88 123456789 <br />
                    Mon - Fri: 08:00 - 22:00 <br />
                    Sat - Sun: 10:00 - 23:00
                </p>
            </aside>
            <nav className="bg-[#111827] p-10 space-y-4">
                <h6 className="font-medium text-3xl">FOLLOW US</h6>
                <p>Join us on social media</p>
                <div className="flex gap-3 text-3xl w-fit mx-auto">
                    <TfiFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;