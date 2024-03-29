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

const foundation101 = {
  status: "In Progress",
  lessons: [
    {
      lessonNumber: 1,
      date: "2023-01-20",
      actionItems: "Complete lesson 1",
      keyOutcomes: "Understand the basics",
    },
    {
      lessonNumber: 2,
      date: "2023-02-05",
      actionItems: "Complete lesson 2",
      keyOutcomes: "Deepen knowledge",
    },
    {
      lessonNumber: 3,
      date: "2023-01-20",
      actionItems: "Complete lesson 1",
      keyOutcomes: "Understand the basics",
    },
    {
      lessonNumber: 4,
      date: "2023-02-05",
      actionItems: "Complete lesson 2",
      keyOutcomes: "Deepen knowledge",
    },
    {
      lessonNumber: 5,
      date: "",
      actionItems: "",
      keyOutcomes: "",
    },
    {
      lessonNumber: 6,
      date: "",
      actionItems: "",
      keyOutcomes: "",
    },
  ],
};

const page = () => {
  return foundation101 ? (
    <main className="flex flex-col justify-center items-center h-full">
      <Card className="p-2 m-2 w-[90%] max-w-md">
        <CardHeader>Foundation101</CardHeader>
        <CardBody>
          Status: {foundation101.status}
          <Spacer y={4} />
          {foundation101.lessons.map((item) => (
            <Card key={item.date} className="p-2 m-2 w-[90%] max-w-md">
              <CardHeader>Lesson {item.lessonNumber}</CardHeader>
              <CardBody>
                <p>Action items - {item.actionItems}</p>
                <p>Key outcomes - {item.keyOutcomes}</p>
              </CardBody>
              <CardFooter>
                <p>Date - {item.date}</p>
              </CardFooter>
            </Card>
          ))}
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </main>
  ) : (
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
