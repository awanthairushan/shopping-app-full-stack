import React from "react";
import {Button, Form} from "react-bootstrap";
import {User} from 'react-feather'

const SignUp = () => {
    return (
        <>
            <h2 className='mt-2'>Create Account</h2>
            <Form>
                <Form.Text className="text-muted">
                    We'll never share your details with anyone else.
                </Form.Text>
                <Form.Group className="my-3 data-field" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>
                <Form.Group className="mb-3 data-field" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name"/>
                </Form.Group>
                <Form.Group className="mb-3 data-field" controlId="formBasicContact">
                    <Form.Control type="text" placeholder="Contact No"/>
                </Form.Group>
                <Form.Group className="mb-3 data-field" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3 data-field" controlId="formBasicRePassword">
                    <Form.Control type="password" placeholder="Repassword"/>
                </Form.Group>
                <Button className='signup-button' type="submit">
                    SIGN UP
                </Button>
            </Form>
        </>
    )
}

export default SignUp;