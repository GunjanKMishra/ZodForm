"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface CardWrapperProps {
  label: string;
  title: string;
  backBtnHref: string;
  backBtnLabel: string;
  children?: React.ReactNode;
}

const CardWrapper = ({
  label,
  title,
  backBtnHref,
  backBtnLabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="md:w-1/4 text-center md:shadow md:bg-blue-200 m-auto mt-[20vh]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Link href={backBtnHref} className="m-auto">
          {backBtnLabel}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
