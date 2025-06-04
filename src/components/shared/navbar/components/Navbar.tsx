import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  return (
    <div className="h-12 py-2 flex items-center justify-between px-20">
      <h1>CoachU AI</h1>
      <LogoutButton />
    </div>
  );
};

export default Navbar;
