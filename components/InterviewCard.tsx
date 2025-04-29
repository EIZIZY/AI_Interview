// import dayjs from "dayjs";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTech from "./DisplayTech";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "mixed" : type;
  // const formatedDate = dayjs(
  //   feedback?.createdAt || createdAt || Date.now()
  // ).format("MMM D,YYYY");
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          <h3 className="mt-5 capitalize">{role} interview</h3>
          <div className="flex flex-row gap-5 mt-3 ">
            {/* <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                alt="calender"
                height={22}
                width={22}
              />
              <p></p>
            </div> */}
            <div className="flex flex-row gap-2">
              <Image src="/star.svg" alt="star" height={22} width={22} />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>

          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment || "you haven't taken an interview yet "}
          </p>

          <div className="flex flex-row justify-between">
            <DisplayTech techStack={techstack} />

            <Button className="btn-primary">
              <Link
                href={
                  feedback
                    ? `/interview/${interviewId}/feedback`
                    : `interview/${interviewId}`
                }
              >
                {feedback ? "check ffedback" : "View interview"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
