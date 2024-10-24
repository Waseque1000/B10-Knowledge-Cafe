import profile from "../../../images/profile.png";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className="text-5xl   font-bold">Knowledge Hub </h1>
      <img src={profile} alt="" />
    </nav>
  );
};

export default Header;
