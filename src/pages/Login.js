import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './login.css'
import { API } from '../API'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";
import ReCAPTCHA from "react-google-recaptcha";
import { isAutheticated } from '../components/auth/authhelper'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validPasswordRegex = RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{7,}$/
    );

    const [loading, setLoading] = useState(false);
    const { token } = isAutheticated();
    const [verified, setVerifed] = useState(false)
    const [next, setNext] = useState(false)
    const [validForm, setValidForm] = useState(false);
    //console.log(token)

    const validateForm = () => {
        let valid = true;
        //console.log(Object.values(errors));
        Object.values(errors).forEach((val) => {
            if (val.length > 0) {
                valid = false;
                return false;
            }
        });
        Object.values(user).forEach((val) => {
            if (val.length <= 0) {
                valid = false;
                return false;
            }
        });
        return valid;
    };

    //cheking email and password
    useEffect(() => {
        // //console.log(errors);
        if (validateForm()) {
            //   //console.log(true);
            setValidForm(true);
        } else {
            //   //console.log(false);
            setValidForm(false);
        }

        if (!verified) {
            setValidForm(false);
        }

    }, [errors, verified]);

    useEffect(()=>{
        if (token) {
            navigate("/dashboard");
        }
       // console.log(token)
    },[])



    const handleNext = () => {
        if (next === false) {
            setNext(true)
        } else {
            setNext(false)
        }
    }

    function changeVerified() {
        setVerifed(false);
    }

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        switch (name) {
            case "email":
                setErrors({
                    ...errors,
                    emailError: validEmailRegex.test(value) ? "" : "Email is not valid!",
                });

                break;
            case "password":
                setErrors((errors) => ({
                    ...errors,
                    passwordError: validPasswordRegex.test(value)
                        ? ""
                        : "Password Shoud Be 8 Characters Long, Atleast One Uppercase, Atleast One Lowercase, Atleast One Digit, Atleast One Special Character",
                }));
                break;
            default:
                break;
        }

        setUser({ ...user, [name]: value });
    };

    

    //submit function
    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            return swal("Error!", "All fields are required", "error");
        }
        if (!verified) {
            return swal("Error!", "Please mark the captcha field", "error");
        }

        setLoading(true);
        let response = await axios.post(`${API}/signin`, { ...user })
        if(response.data.status === "ok"){
            setLoading(false)
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    user: user.email,
                    token: response.data.token,
                })
            );
            setTimeout(window.location.reload(), 8000);
            navigate('/dashboard')
            
            
        }else{
            setLoading(false);
                let message = response.data.message;
                swal({
                    title: "Error",
                    text: message,
                    icon: "error",
                    buttons: true,
                    dangerMode: true,
                });
        }
        //     .then((response) => {
        //         // console.log(response)
        //         // if (response) {
        //             setLoading(false)
        //             localStorage.setItem(
        //                 "auth",
        //                 JSON.stringify({
        //                     user: user.email,
        //                     token: response.data.token,
        //                 })
        //             );
        //             //console.log(user);
                   
        //             navigate('/dashboard')
        //             //window.location.reload()
                   
        //         // } else {
        //         //     setLoading(false);
        //         //     let message = response.data.message;
        //         //     swal({
        //         //         title: "Error",
        //         //         text: message,
        //         //         icon: "error",
        //         //         buttons: true,
        //         //         dangerMode: true,
        //         //     });
        //         // }
        //         ////console.log("here the response",response);    
        //     })
        //     .catch((err) => {
        //         setLoading(false);
        //         let message = err.response?.data.message;
        //         return swal({
        //             title: "Error",
        //             text: message,
        //             icon: "error",
        //             buttons: true,
        //             dangerMode: true,
        //         });
        //         ////console.log(err.response);
        //     });
        // // history.push("/");
    };

    return (
        <div className='login'>

            <Row>
                <Col><div className="login_img"></div></Col>
                <Col>

                    <div className="login_form">
                        <div className="login_text">
                            <img src="" alt="" />

                            <h1 className='heading'>Welcome Back</h1>
                        </div>
                        {next === false ?

                            <div className="login_input">
                                <p className="label">
                                    What is your email address?
                                </p>
                                <input type="email" name="email" value={user.email} onChange={handleChange} />
                                <p className='text-center py-2 text-danger'>{errors.emailError}</p>
                                <button onClick={handleNext} disabled={errors.emailError.length > 0 || user.email.length <= 0} className='login_button'>Continue</button>
                            </div>
                            :
                            <div className="login_input">
                                <p className="label">
                                    Enter your password
                                </p>
                                <input type="password" name="password" value={user.password} onChange={handleChange} />
                                <p className='text-center py-2 text-danger'>{errors.passwordError}</p>
                                <div className='my-2 d-flex justify-content-between'>
                                    <ReCAPTCHA
                                        sitekey="6Lftc_4eAAAAAPIuX-wh98aCAIdczkob5lKGGboL"
                                        onChange={() => setVerifed(true)}
                                        onExpired={() => changeVerified()}
                                    />
                                    <div>
                                        <button className='back-btn btn badge badge-sm btn-primary' onClick={handleNext}>
                                            Back
                                        </button>
                                    </div>
                                </div>



                                <button disabled={!validForm} onClick={handleSubmit} className='login_button'>
                                    <ClipLoader color="white" loading={loading} size={20} />
                                    {!loading && "Log In"}
                                </button>
                            </div>
                        }
                        {validForm}
                    </div>


                </Col>
            </Row>

        </div>
    )
}

export default Login