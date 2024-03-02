"use client";
import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/images/placeholder.jpg"
      alt="avatar"
      className="rounded-full"
      height="30"
      width="30"
    ></Image>
  );
};

export default Avatar;
