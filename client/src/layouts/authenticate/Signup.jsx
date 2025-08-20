import { useEffect, useState } from 'react';
import useAuthData from '../../hooks/useAuthData';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AiFillGoogleCircle } from 'react-icons/ai';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Signup = () => {

    const { googleSignin, emailSignup, updateUser } = useAuthData()
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const [tried, setTried] = useState(false)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // const captcha = form.captcha.value
        console.log(email, password, name)
        emailSignup(email, password)
            .then(() => {
                updateUser(name)
                    .then(() => {
                        //send user data for user/admin validation 
                        const user = { name, email }
                        axiosPublic.post('/users', user)
                            .then(res => {
                                console.log('email signup', res.data)
                            })

                        Swal.fire({
                            icon: "success",
                            title: "You have Successfully created an account",
                            // showConfirmButton: false,
                            // confirmButtonText: '<a href=' / '>Ok</a>'

                        }).then(state => {
                            if (state.isConfirmed) {
                                navigate(location.state || '/')
                            }
                        })
                    }).catch(err => {
                        alert(err?.message)
                        console.error(err)
                    })
            }).catch(err => {
                console.error(err?.message)
                Swal.fire({
                    icon: "error",
                    title: err.message,
                    showConfirmButton: false,
                    // confirmButtonText: '<a href=' / '>Ok</a>'

                })
            })
    }

    const handleGoogleSignin = () => {
        googleSignin()
            .then((data) => {
                const user = { name: data?.user?.displayName, email: data?.user?.email }
                console.log(user)
                // send user data to backend for user/admin
                axiosPublic.post('/users', user)
                    .then(res => {
                        console.log('google signin/signup', res.data)
                    })
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
        <form onSubmit={handleSubmit} className=' space-y-4'>
            <h3 className=' text-center font-bold text-4xl'>Sign Up</h3>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input type="text" name='name' className="input" placeholder="Type here" required />
            </fieldset>
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
            <button className={`btn w-full max-w-80 ${disableSubmitButton ? 'btn-disabled' : 'btn-warning'}`}>Sign Up</button>
            <p className='text-center'>Already have an account? <Link state={location.state} replace className='underline text-amber-300' to={"/authenticate/signin"}>Login here...</Link></p>
            <p>Or sign in with :</p>
            <AiFillGoogleCircle onClick={handleGoogleSignin} className='btn text-amber-300 rounded-full p-0 hover:scale-90 active:scale-100 transition-transform' />

        </form>
    );
};

export default Signup;