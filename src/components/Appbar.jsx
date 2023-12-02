"use client";

import { useAuthContext } from "@/context/AuthContext";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spacer,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import loginUserWithGoogle from "@/firebase/auth/loginUserWithGoogle";
import logoutUser from "@/firebase/auth/logoutUser";

const menuItems = [
  {
    label: "Profile",
    route: "/",
  },
  {
    label: "Connect Group",
    route: "/connectGroup",
  },
  {
    label: "Ministry Team",
    route: "/ministryTeam",
  },
  {
    label: "Alpha",
    route: "/alpha",
  },
  {
    label: "Foundation 101",
    route: "foundation101",
  },
  {
    label: "Developmental Tracks",
    route: "developmentalTracks",
  },
];

const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { user } = useAuthContext();

  const loginWithGoogle = async () => {
    const { res, err } = await loginUserWithGoogle();
    if (err) alert("Error logging in with Google");
    console.log(err);
    router.push("/login");
  };

  const logout = async () => {
    const { res, err } = await logoutUser();
    if (err) alert("Error logging out");
    console.log(res);
    router.push("/login");
  };

  return (
    <Navbar
      isBlurred
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit">LIFEHOUSE CHURCH</p>
        </NavbarBrand>
        {user ? (
          <NavbarMenuToggle />
        ) : (
          <Button
            variant="faded"
            color="primary"
            onPress={() => loginWithGoogle()}
          >
            Google login
          </Button>
        )}
      </NavbarContent>
      {user ? (
        <NavbarMenu className="flex flex-col justify-between">
          <div>
            {menuItems.map((item) => (
              <div key={item.label}>
                <NavbarMenuItem className="p-2 m-auto w-[90%] max-w-md">
                  <Button
                    variant="flat"
                    onPress={() => {
                      router.push(`${item.route}`);
                      setIsMenuOpen(false);
                    }}
                    fullWidth
                  >
                    {item.label}
                  </Button>
                </NavbarMenuItem>
                <Spacer y={4} />
              </div>
            ))}
          </div>
          <NavbarMenuItem>
            <Button
              variant="light"
              onPress={() => {
                logout();
                setIsMenuOpen(false);
              }}
              fullWidth
            >
              Logout
            </Button>
            <Spacer y={4} />
          </NavbarMenuItem>
        </NavbarMenu>
      ) : null}
    </Navbar>
  );
};

export default Appbar;
