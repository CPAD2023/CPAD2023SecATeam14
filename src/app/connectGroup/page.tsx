import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <p>Looks like you are not part of any Connect Group</p>
      <Spacer y={4} />
      <Button variant="shadow" color="primary">
        <Link href="#">Join Now</Link>
      </Button>
    </div>
  );
};

export default page;
