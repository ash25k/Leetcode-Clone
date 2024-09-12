"use client"

import React, { useState } from 'react'
import { BlackButton, Card, FormTitle, Input, LinkButton } from 'ui';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const onSignup = () => {
        console.log(email, password, confirmPassword);
    }

    const onSignIn = () => {
        router.push('/login');
    }

    return (
        <Card>
            <form onSubmit={onSignup}>
                <FormTitle>Neetcode</FormTitle>
                <Input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <Input type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                <div className="flex items-center justify-between mb-6">
                    <BlackButton type="button" onClick={onSignup}>
                        Register
                    </BlackButton>
                </div>
            </form>
            <div className="flex items-center justify-center text-sm">
                <p className="text-gray-700">Already has an account</p>
                <LinkButton className="font-medium ml-1 underline underline-offset-1" type='button' onClick={onSignIn}>Sign in</LinkButton>
            </div>
        </Card>
    )
}

export default SignupPage;


