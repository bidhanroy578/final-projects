import { Helmet } from "react-helmet-async";
import banner from "../../assets/contact/banner.jpg"
import Cover from "../../components/cover_menu_btn/Cover";
import TitleAndDes from "../../components/title/TitleAndDes";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import Form from "./Form";

const ContactUs = () => {

    return (
        <>
            <Helmet title='Bistro Boss | Contact Us' />
            <Cover img={banner} title={"Contact us"} description={'Would you like to try a dish?'} />

            {/* location part */}

            <TitleAndDes title={"OUR LOCATION"} description={"Visit Us"} />
            <div className="sm:grid grid-cols-3 gap-2 justify-self-center">
                <div className="border border-amber-200 rounded-2xl overflow-hidden">
                    <FiPhoneCall className="flex justify-center items-center w-full h-12 p-3 bg-[#d1a054]" />
                    <div className="px-4 pb-4">
                        <div className="bg-[#f3f3f3] dark:bg-[#373737fe] text-center p-7">
                            <h3>PHONE</h3>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>
                <div className="border border-amber-200 rounded-2xl overflow-hidden">
                    <IoLocationSharp className="flex justify-center items-center w-full h-12 p-3 bg-[#d1a054]" />
                    <div className="px-4 pb-4">
                        <div className="bg-[#f3f3f3] dark:bg-[#373737fe] text-center p-7">
                            <h3>ADDRESS</h3>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>
                <div className="border border-amber-200 rounded-2xl overflow-hidden">
                    <MdTimer className="flex justify-center items-center w-full h-12 p-3 bg-[#d1a054]" />
                    <div className="px-4 pb-4">
                        <div className="bg-[#f3f3f3] dark:bg-[#373737fe] text-center p-7">
                            <h3>WORKING HOURS</h3>
                            <p>Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact form  */}

            <TitleAndDes title={"CONTACT FORM"} description={"Send Us a Message"} />
            <Form />

        </>
    );
};

export default ContactUs;