"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const connectGroup = {
  leader: "Ps Michael Praveen",
  subConnectGroup: "Jeffrey Rujen R",
  role: "PTL",
  members: [
    { name: "Ps Vignesh", birthday: "15/01" },
    { name: "Ps Noreen", birthday: "22/04" },
    { name: "Ajar", birthday: "10/07" },
    { name: "Aman", birthday: "05/03" },
    { name: "Amar", birthday: "30/11" },
    { name: "Daniel", birthday: "18/08" },
    { name: "Deena", birthday: "25/02" },
    { name: "Deepika", birthday: "14/06" },
    { name: "Florence", birthday: "08/09" },
    { name: "Jerry", birthday: "03/12" },
    { name: "John", birthday: "20/10" },
    { name: "Karuna", birthday: "12/04" },
    { name: "Keerthana", birthday: "27/01" },
    { name: "Kiran", birthday: "02/07" },
    { name: "Mahima", birthday: "21/09" },
    { name: "Prasanna", birthday: "08/03" },
    { name: "Preethi", birthday: "17/11" },
    { name: "Priscilla", birthday: "09/06" },
    { name: "Priya", birthday: "18/12" },
  ],
};

const page = () => {
  return connectGroup ? (
    <main className="flex flex-col justify-center items-center h-full">
      <Card className="p-2 m-2 w-[90%] max-w-md">
        <CardHeader>Connect Group</CardHeader>
        <CardBody>
          <p>Leader - {connectGroup.leader}</p>
          <p>Sub-leader - {connectGroup.subConnectGroup}</p>
          <p>Role - {connectGroup.role}</p>
          <Table className="p-2 m-2 w-[90%] max-w-md" title="Members">
            <TableHeader>
              <TableColumn>Name</TableColumn>
              <TableColumn>Birthday</TableColumn>
            </TableHeader>
            <TableBody>
              {connectGroup.members.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.birthday}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </main>
  ) : (
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
