"use client";

import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/autocomplete";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
  useDisclosure,
} from "@nextui-org/react";
import getUser from "@/firebase/getUser";
import editUser from "@/firebase/editUser";
import deleteProfile from "@/firebase/deleteProfile";

// const members = [
//   { value: "Ps Michael" },
//   { value: "Ps Vignesh" },
//   { value: "Ps Noreen" },
//   { value: "Ajar" },
//   { value: "Aman" },
//   { value: "Amar" },
//   { value: "Daniel" },
//   { value: "Deena" },
//   { value: "Deepika" },
//   { value: "Florence" },
//   { value: "Jerry" },
//   { value: "John" },
//   { value: "Karuna" },
//   { value: "Keerthana" },
//   { value: "Kiran" },
//   { value: "Mahima" },
//   { value: "Prasanna" },
//   { value: "Preethi" },
//   { value: "Priscilla" },
//   { value: "Priya" },
// ];

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();

  useLayoutEffect(() => {
    if (user === null) router.push("/register");
  });

  useEffect(() => {
    const loadUser = async () => {
      const { result, error } = await getUser("users", user?.uid);

      if (error) {
        console.error(error);
        return;
      }

      setName(result.name);
      setMobile(result.mobile);
      setEmail(result.email);
      setDateOfBirth(result.dateOfBirth);
      setAge(result.age);
      setGender(result.gender);
      setAddress(result.address);
      // setInvitedBy(result.invitedBy);
      setCampus(result.campus);
      // setFamily(result.family);
    };

    user ? loadUser() : null;
  }, [user]);

  const updateUser = async () => {
    if (
      // updatedMobile === mobile &&
      // updatedEmail === email &&
      updatedAddress === address
    )
      return;

    const { result, error } = await editUser("users", user?.uid, {
      // mobile: updatedMobile,
      // email: updatedEmail,
      address: updatedAddress,
    });

    if (error) {
      console.error(error);
      return;
    }

    // setMobile(result.mobile);
    // setEmail(result.email);
    // setAddress(result.address);
  };

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  // const [invitedBy, setInvitedBy] = useState("");
  const [campus, setCampus] = useState("");
  // const [family, setFamily] = useState("");
  // const [updatedMobile, setUpdatedMobile] = useState("");
  // const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [reloginPassword, setReloginPassword] = useState("");
  const [reloginPasswordError, setReloginPasswordError] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="flex flex-col justify-center items-center h-[90vh]">
      <Card className="p-2 m-2 w-[90%] max-w-md">
        <CardHeader className="flex justify-between items-center">
          Profile
          {isEdit ? null : (
            <Button
              variant="flat"
              color="default"
              onPress={() => setIsEdit(!isEdit)}
            >
              Edit
            </Button>
          )}
        </CardHeader>
        <CardBody>
          <Input
            variant="faded"
            label="Full name"
            isInvalid={false}
            errorMessage=""
            type="text"
            value={name}
            isDisabled={isEdit}
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Mobile"
            placeholder="Enter your mobile number"
            isInvalid={false}
            errorMessage=""
            type="tel"
            value={mobile}
            // onValueChange={setUpdatedMobile}
            // isReadOnly={!isEdit}
            isDisabled={isEdit}
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Email"
            placeholder="Enter you email"
            isInvalid={false}
            errorMessage=""
            type="email"
            value={email}
            // onValueChange={setUpdatedEmail}
            // isReadOnly={!isEdit}
            isDisabled={isEdit}
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="DateOfBirth"
            isInvalid={false}
            errorMessage=""
            type="date"
            value={dateOfBirth}
            isDisabled={isEdit}
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Age"
            isInvalid={false}
            errorMessage=""
            value={age}
            isDisabled={isEdit}
          />
          <Spacer y={4} />
          <Input
            variant="faded"
            label="Gender"
            isInvalid={false}
            errorMessage=""
            value={gender}
            isDisabled={isEdit}
          />
          <Spacer y={4} />
          <Textarea
            variant="faded"
            label="Address"
            placeholder="Enter your address"
            isInvalid={false}
            errorMessage=""
            type="text"
            value={updatedAddress || address}
            onValueChange={setUpdatedAddress}
            isReadOnly={!isEdit}
            maxRows={5}
          />
          <Spacer y={4} />
          {/* {invitedBy ? (
            <Input
              variant="faded"
              label="Invited by"
              isInvalid={false}
              errorMessage=""
              value={invitedBy}
              isDisabled={isEdit}
            />
          ) : (
            <Autocomplete
              variant="faded"
                label="Invited by"
              placeholder="Who invited you?"
              isInvalid={false}
              errorMessage=""
              selectedKey={invitedBy}
              isDisabled={!isEdit}
            >
              <AutocompleteSection title="Internet">
                <AutocompleteItem key="Facebook">Facebook</AutocompleteItem>
                <AutocompleteItem key="Google maps">
                  Google maps
                </AutocompleteItem>
                <AutocompleteItem key="Instagram">Instagram</AutocompleteItem>
              </AutocompleteSection>
              <AutocompleteSection title="Friend">
                {members.map((member) => (
                  <AutocompleteItem key={member.value}>
                    {member.value}
                  </AutocompleteItem>
                ))}
              </AutocompleteSection>
            </Autocomplete>
          )} 
          <Spacer y={4} /> */}
          {campus ? (
            <Input
              variant="faded"
              label="Campus"
              isInvalid={false}
              errorMessage=""
              value={campus}
              isDisabled={isEdit}
            />
          ) : (
            <Autocomplete
              variant="faded"
              label="Campus"
              placeholder="Select your campus"
              isInvalid={false}
              errorMessage=""
              selectedKey={campus}
              isDisabled={!isEdit}
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
          )}
        </CardBody>
        <CardFooter>
          {isEdit ? (
            <div className="flex justify-between items-center w-full">
              <Button
                variant="shadow"
                color="primary"
                onPress={() => {
                  updateUser();
                  setIsEdit(!isEdit);
                }}
                fullWidth
                className="m-1"
              >
                Save
              </Button>
              <Button
                variant="bordered"
                color="secondary"
                onPress={() => {
                  // setUpdatedMobile("");
                  // setUpdatedEmail("");
                  setUpdatedAddress("");
                  setIsEdit(!isEdit);
                }}
                fullWidth
                className="m-1"
              >
                Cancel
              </Button>
            </div>
          ) : null}
        </CardFooter>
      </Card>
      <Button variant="light" color="danger" onPress={onOpen}>
        Delete user
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                Are you sure you want to delete your user?
              </ModalHeader>
              <ModalBody>
                <p>Re-enter your password to confirm deletion</p>
                <Input
                  variant="faded"
                  color="danger"
                  label="Password"
                  isInvalid={reloginPasswordError}
                  errorMessage={reloginPasswordError}
                  type="password"
                  value={reloginPassword}
                  onValueChange={setReloginPassword}
                  required
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  color="danger"
                  onPress={async () => {
                    const { result, error } = await deleteProfile(
                      email,
                      reloginPassword,
                      "users"
                    );
                    if (error) {
                      console.error(error);
                      onClose;
                      return;
                    }
                    onClose;
                    router.push("/login");
                  }}
                >
                  Delete
                </Button>
                <Button color="primary" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
