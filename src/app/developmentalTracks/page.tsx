import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <p>No Developmental Tracks data available</p>
      <Spacer y={4} />
      <div className="w-[90%] mx-auto max-w-md flex flex-wrap justify-center items-center">
        <Button className="m-2" variant="shadow" color="primary">
          <Link href="#">Join Track 1</Link>
        </Button>
        <Button className="m-2" variant="shadow" color="primary">
          <Link href="#">Join Track 2</Link>
        </Button>
        <Button className="m-2" variant="shadow" color="primary">
          <Link href="#">Join Track 3</Link>
        </Button>
        <Button className="m-2" variant="shadow" color="primary">
          <Link href="#">Join Track 4</Link>
        </Button>
        <Button className="m-2" variant="shadow" color="primary">
          <Link href="#">Join Track 5</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
