import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { createAvatar } from "@dicebear/core";
import { initials, botttsNeutral } from "@dicebear/collection";
import { cn } from "@/lib/utils";

type GeneratedAvatarPropsType = {
  variant: "initials" | "botttsNeutral";
  className?: string;
  seed: string;
};

const GeneratedAvatar = ({
  variant,
  className,
  seed,
}: GeneratedAvatarPropsType) => {
  let avatar;

  if (variant === "initials") {
    avatar = createAvatar(initials, {
      seed,
      fontSize: 40,
    });
  } else {
    avatar = createAvatar(botttsNeutral, {
      seed,
    });
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar?.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default GeneratedAvatar;
