"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Card, Input, FormTitle, BlackButton} from 'ui';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    console.log(username, password);
  }

  const onRegister = () => {
    router.push('/signup');
  }

  return (
    <Card>
        <form onSubmit={onLogin}>
            <FormTitle>Neetcode</FormTitle>
            <Input placeholder = "Username" type = "text" value = {username} onChange = {(event : any) => setUsername(event.target.value)}/>
            <Input placeholder = "Password" type = "text" value = {password} onChange = {(event : any) => setPassword(event.target.value)}/>
            <div className="flex items-center justify-between mb-6">
                  <BlackButton type = "button" onClick = {onLogin}>Sign In</BlackButton>
            </div>
        </form>
        <div className="flex items-center justify-center text-sm">
            <p className="text-gray-700">New user here</p>
            <button className="font-medium ml-1 underline underline-offset-1" onClick={onRegister}>Register</button>
        </div>
    </Card>
  )
}

export default LoginPage;