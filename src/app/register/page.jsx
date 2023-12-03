"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/autocomplete";
import { Spacer } from "@nextui-org/spacer";
import registerUser from "@/firebase/auth/registerUser";
import addUser from "@/firebase/addUser";
import validator from "validator";

const Page = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [invitedBy, setInvitedBy] = useState("");
  const [campus, setCampus] = useState("");
  const [family, setFamily] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [campusError, setCampusError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const router = useRouter();

  const calculateAge = (dateOfBirth) => {
    const diff =
      new Date(new Date() - new Date(dateOfBirth)).getUTCFullYear() - 1970;
    let age;
    if (diff > 1) age = `${Math.abs(diff)} years`;
    else age = `${diff} months`;
    return age;
  };

  const register = async () => {
    if (!name) {
      setNameError("Name is required");
      return;
    }
    if (!mobile) {
      setMobileError("Mobile is required");
      return;
    }
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!dateOfBirth) {
      setDateOfBirthError("Date of birth is required");
      return;
    }
    if (new Date(dateOfBirth) > new Date()) {
      setDateOfBirthError("Date of Birth cannot be in the future");
      return;
    }
    const age = calculateAge(dateOfBirth);
    if (!gender) {
      setGenderError("Gender is required");
      return;
    }
    if (!campus) {
      setCampusError("Campus is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (!validator.isMobilePhone(mobile)) {
      setMobileError("Mobile is invalid");
      return;
    }
    if (!validator.isEmail(email)) {
      setEmailError("Email is invalid");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords are not matching");
      return;
    }
    if (!validator.isStrongPassword(password)) {
      setPasswordError("Password is not strong");
      return;
    }

    setNameError("");
    setMobileError("");
    setEmailError("");
    setDateOfBirth("");
    setGenderError("");
    setCampusError("");
    setPasswordError("");

    const { res, err } = await registerUser(email, password);
    if (err) {
      setRegisterError("Couldn't register user! Please try again");
      return console.log(err);
    }
    if (res) {
      const data = {
        name: name,
        mobile: mobile,
        email: email,
        dateOfBirth: dateOfBirth,
        age: age,
        gender: gender,
        address: address,
        invitedBy: invitedBy,
        campus: campus,
        family: family,
        connectGroup: {},
        ministryTeam: {},
        evangelismStage: {},
        alpha: {},
        foundation101: {},
        developmentalTracks: {},
      };
      const { result, error } = await addUser("users", res.user.uid, data);
      if (error) {
        setRegisterError(
          "Couldn't add user details! Please contact the administrator"
        );
        return console.log(error);
      }
      console.log(result);
      return router.push("/");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center h-[90vh]">
      <Card className="p-2 m-2 w-[90%] max-w-md">
        <CardHeader>Register</CardHeader>
        <CardBody>
          <Input
            variant="faded"
            label="Full name"
            description="Enter your full name"
            isInvalid={nameError}
            errorMessage={nameError}
            type="text"
            value={name}
            onValueChange={setName}
            required
            autoFocus
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Mobile"
            description="Enter mobile number without country code"
            isInvalid={mobileError}
            errorMessage={mobileError}
            type="tel"
            value={mobile}
            onValueChange={setMobile}
            required
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Email"
            description="Enter your personal email"
            isInvalid={emailError}
            errorMessage={emailError}
            type="email"
            value={email}
            onValueChange={setEmail}
            required
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Date Of Birth"
            description="Enter your actual date of birth"
            isInvalid={dateOfBirthError}
            errorMessage={dateOfBirthError}
            type="date"
            value={dateOfBirth}
            onValueChange={setDateOfBirth}
            required
          />
          <Spacer y={4} />
          <Autocomplete
            variant="faded"
            label="Gender"
            description="Autocomplete your biological gender"
            isInvalid={genderError}
            errorMessage={genderError}
            selectedKey={gender}
            onSelectionChange={setGender}
            required
          >
            <AutocompleteItem key={"Male"}>Male</AutocompleteItem>
            <AutocompleteItem key={"Female"}>Female</AutocompleteItem>
          </Autocomplete>
          <Spacer y={4} />
          <Autocomplete
            variant="faded"
            label="Campus"
            description="Autocomplete church campus"
            isInvalid={campusError}
            errorMessage={campusError}
            selectedKey={campus}
            onSelectionChange={setCampus}
            required
          >
            <AutocompleteSection title="Bengaluru">
              <AutocompleteItem key="Marathahalli, Bengaluru">
                Marathahalli, Bengaluru
              </AutocompleteItem>
              <AutocompleteItem key="BTM Layout, Bengaluru">
                BTM Layout, Bengaluru
              </AutocompleteItem>
            </AutocompleteSection>
            <AutocompleteSection title="Chennai">
              <AutocompleteItem key="Chennai">Chennai</AutocompleteItem>
            </AutocompleteSection>
            <AutocompleteSection title="Trichy">
              <AutocompleteItem key="Trichy">Trichy</AutocompleteItem>
            </AutocompleteSection>
          </Autocomplete>
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Password"
            description="8 characters long - minimum 1 uppercase, 1 lowercase, 1 digit, 1 symbol"
            isInvalid={passwordError}
            errorMessage={passwordError}
            type="password"
            value={password}
            onValueChange={setPassword}
            required
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Confirm Password"
            description="Same as above"
            isInvalid={passwordError}
            errorMessage={passwordError}
            type="password"
            value={confirmPassword}
            onValueChange={setConfirmPassword}
            required
          />
          <Spacer y={4} />
          {registerError ? (
            <p className="p-2 text-red-500 text-center border-1 border-red-500 rounded-xl">
              {registerError}
            </p>
          ) : null}
        </CardBody>
        <CardFooter>
          <Button
            fullWidth
            variant="shadow"
            color="primary"
            onPress={() => register()}
          >
            Register
          </Button>
          <Spacer x={4} />
          <Button
            fullWidth
            variant="bordered"
            color="secondary"
            onPress={() => router.push("/login")}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Page;
