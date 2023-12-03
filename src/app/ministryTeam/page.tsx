import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spacer,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ministryTeam = [
  {
    name: "Videography",
    leader: "Sambath",
    role: "Streaming Trainer",
  },
  {
    name: "Web & IT",
    leader: "Jeffrey Rujen R",
    role: "Leader",
  },
];

const page = () => {
  return ministryTeam ? (
    <main className="flex flex-col justify-center items-center h-[90vh]">
      <Card className="p-2 m-2 w-[90%] max-w-md">
        <CardHeader>Ministry Teams</CardHeader>
        <CardBody>
          {ministryTeam.map((item) => (
            <Card key={item.name} className="p-2 m-2 w-[90%] max-w-md">
              <CardHeader>{item.name} Team</CardHeader>
              <CardBody>
                <p>Leader - {item.leader}</p>
                <p>Role - {item.role}</p>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </main>
  ) : (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <p>
        Ministry Team is a great way to take part in building the kingdom of God
      </p>
      <Spacer y={4} />
      <Button variant="shadow" color="primary">
        <Link href="#">Apply Now</Link>
      </Button>
    </div>
  );
};

export default page;
