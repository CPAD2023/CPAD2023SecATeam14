"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import loginUser from "@/firebase/auth/loginUser";
import validator from "validator";

const Page = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [loginError, setLoginError] = useState();
  const router = useRouter();

  const login = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (!validator.isEmail(email)) {
      setEmailError("Email is invalid");
      return;
    }

    setEmailError();
    setPasswordError();

    const { res, err } = await loginUser(email, password);
    if (err) {
      setLoginError("Invalid credentials! Check your email and password");
      return console.log(err);
    }
    console.log(res);
    return router.push("/");
  };

  return (
    <main className="flex flex-col justify-center items-center h-[90vh]">
      <Card className="p-2 m-2 w-[90%] max-w-md">
        <CardHeader>Login</CardHeader>
        <CardBody>
          <Input
            variant="faded"
            label="Email"
            isInvalid={emailError}
            errorMessage={emailError}
            type="email"
            value={email}
            onValueChange={setEmail}
            required
            autoFocus
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Password"
            isInvalid={passwordError}
            errorMessage={passwordError}
            type="password"
            value={password}
            onValueChange={setPassword}
            required
          />
          <Spacer y={4} />
          {loginError ? (
            <p className="p-2 text-red-500 text-center border-1 border-red-500 rounded-xl">
              {loginError}
            </p>
          ) : null}
        </CardBody>
        <CardFooter>
          <Button
            fullWidth
            variant="shadow"
            color="primary"
            onPress={() => login()}
          >
            Login
          </Button>
          <Spacer x={4} />
          <Button
            fullWidth
            variant="bordered"
            color="secondary"
            onPress={() => router.push("/register")}
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Page;
