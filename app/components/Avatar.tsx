"use client";
import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="avatar"
      className="rounded-full"
      height="30"
      width="30"
    ></Image>
  );
};

export default Avatar;
