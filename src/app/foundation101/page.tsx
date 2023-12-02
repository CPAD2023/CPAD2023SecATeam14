import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <p>Get your foundations right</p>
      <Spacer y={4} />
      <Button variant="shadow" color="primary">
        <Link href="#">Start Foundation 101</Link>
      </Button>
    </div>
  );
};

export default page;
