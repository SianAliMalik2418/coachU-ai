import Image from "next/image";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  return (
    <div className="h-16 flex items-center justify-between px-20">
      <div className="flex items-center justify-center gap-1">
        <Image width={50} height={40} src="/logo.svg" alt="" />
        <h1 className="text-lg font-bold mb-1">CoachU.AI</h1>
      </div>
      <LogoutButton />
    </div>
  );
};

export default Navbar;
