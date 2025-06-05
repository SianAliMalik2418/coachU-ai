import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Image width={50} height={40} src="/logo.svg" alt="" />
      <h1 className="text-lg font-bold mb-1">CoachU.AI</h1>
    </div>
  );
};

export default Logo;
