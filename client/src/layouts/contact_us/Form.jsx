import { FaTelegramPlane } from "react-icons/fa";

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} className=' p-16 dark:bg-base-200 bg-[#f3f3f3]  rounded-box'>
            <fieldset className="fieldset space-y-5">

                <div className='sm:grid grid-cols-2 gap-4 '>
                    <label className="floating-label">
                        <span>Your Name</span>
                        <input type="text" placeholder="your name here" className="input input-lg w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Your Email</span>
                        <input type="text" placeholder="your email here" className="input input-lg w-full" />
                    </label>

                </div>
                <label className="floating-label">
                    <span>Your Phone</span>
                    <input type="number" placeholder="your phone number" className="input input-lg w-full" />
                </label>

                <label className='label'>Your Message</label>
                <textarea className="textarea h-72 w-full" placeholder="Write Your Message Here..."></textarea>

                <button className="btn  bg-[#9f712b] w-full max-w-80 m-auto">Send Message <FaTelegramPlane /></button>
            </fieldset>
        </form>
    );
};

export default Form;