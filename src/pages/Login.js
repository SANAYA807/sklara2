import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Login = () => {
    return (
        <div className='login'>

            <Row>
                <Col><div className="login_img"></div></Col>
                <Col>

                    <div className="login_form">
                        <div className="login_text">
                            <img src="" alt="" />

                            <h1>Welcome Back</h1>
                        </div>
                        <div className="login_input">
                            <p className="label">
                                What is your email address?
                            </p>
                            <input type="text" />
                            <button>Continue</button>
                        </div>
                    </div>


                </Col>
            </Row>

        </div>
    )
}

export default Login