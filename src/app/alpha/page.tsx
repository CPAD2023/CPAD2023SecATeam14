import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <p>Looks like you have not experienced Alpha yet</p>
      <Spacer y={4} />
      <Button variant="shadow" color="primary">
        <Link href="#">Register Now</Link>
      </Button>
    </div>
  );
};

export default Page;
