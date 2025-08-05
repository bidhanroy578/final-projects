import { useContext, useEffect, useState } from 'react';
import img01 from './../../assets/others/authentication.png'
import img03 from './../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../context_api/Auth_context';
import { AiFillGoogleCircle } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router';

import Swal from 'sweetalert2'

const Signin = () => {
    const { googleSignin } = useContext(AuthContext)
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const [tried, setTried] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value
        console.log(email, password, captcha)
    }

    const handleGoogleSignin = () => {
        googleSignin()
            .then((data) => {
                console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "You have Successfully logged in with Google",
                    // showConfirmButton: false,
                    // confirmButtonText: '<a href=' / '>Ok</a>'

                }).then(state => {
                    if (state.isConfirmed) {
                        navigate(location.state || '/')
                    }
                })

            }).catch((err) => alert(err.message))
    }

    // captcha checking

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleCaptchaCheck = (e) => {
        const captcha = e.target.value
        // console.log(captcha)
        if (validateCaptcha(captcha)) {
            console.log('captcha correct')
            setDisableSubmitButton(false)
            setTried(false)
        } else {
            setDisableSubmitButton(true)
            setTried(true)
        }
    }

    return (
        <div className='min-h-screen w-screen bg-cover text-black dark:text-white bg-center' style={{ background: `url(${img01})` }}>
            <div className=' min-h-screen w-screen dark:backdrop-invert p-20'>
                <div className='shadow-2xl dark:shadow-slate-200 rounded-xl' style={{ background: `url(${img01})` }}>
                    <div className='grid w-full grid-cols-2 gap-4 items-center dark:backdrop-invert p-10'>
                        <img src={img03} className='dark:invert border border-red-300' />
                        <form onSubmit={handleSubmit} className=' space-y-4'>
                            <h3 className=' text-center font-bold text-4xl'>Sign In</h3>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email</legend>
                                <input type="email" name='email' className="input" placeholder="Type here" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Password</legend>
                                <input type="text" name='password' className="input" placeholder="Type here" required />
                            </fieldset>
                            <fieldset className="fieldset dark:invert">
                                <LoadCanvasTemplate />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Captcha</legend>
                                <input type="text" name='captcha' className={`input ${tried && 'outline-2 outline-red-600'}`} placeholder="Type the above text here" onBlur={handleCaptchaCheck} />
                            </fieldset>
                            <button className={`btn w-full max-w-80 ${disableSubmitButton ? 'btn-disabled' : 'btn-warning'}`}>Sign In</button>
                            <p className='text-center'>New here? <a className='underline text-amber-300' href="/signup">Create a new account</a></p>
                            <p>Or sign in with :</p>
                            <AiFillGoogleCircle onClick={handleGoogleSignin} className='btn text-amber-300 rounded-full p-0 hover:scale-90 active:scale-100 transition-transform' />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;