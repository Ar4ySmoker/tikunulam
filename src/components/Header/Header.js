import Nav from "../Nav/Nav";
function Header() {
  return (
    <div className="fixed flex bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white justify-center items-center w-full z-50">
      <Nav />
    </div>
  );
}
export default Header;
