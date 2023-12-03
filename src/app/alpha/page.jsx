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

const alpha = {
  status: "Graduated",
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
      date: "2023-01-20",
      actionItems: "Complete lesson 1",
      keyOutcomes: "Understand the basics",
    },
    {
      lessonNumber: 6,
      date: "2023-02-05",
      actionItems: "Complete lesson 2",
      keyOutcomes: "Deepen knowledge",
    },
    {
      lessonNumber: 7,
      date: "2023-01-20",
      actionItems: "Complete lesson 1",
      keyOutcomes: "Understand the basics",
    },
  ],
};

const Page = () => {
  return alpha ? (
    <main className="flex flex-col justify-center items-center h-full">
      <Card className="p-2 m-2 w-[90%] max-w-md">
        <CardHeader>Alpha</CardHeader>
        <CardBody>
          Status: {alpha.status}
          <Spacer y={4} />
          {alpha.lessons.map((item) => (
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
      <p>Looks like you have not experienced Alpha yet</p>
      <Spacer y={4} />
      <Button variant="shadow" color="primary">
        <Link href="#">Register Now</Link>
      </Button>
    </div>
  );
};

export default Page;
