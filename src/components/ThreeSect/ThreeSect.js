import BgWorld from "./bg-world.jpg";

function ThreeSect() {
  return (
    <div className="flex flex-col items-center h-[85vh] relative bg-black mb-[15px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mt-[200px]"
          src={BgWorld}
          alt="world"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <h4 className="text-center text-white z-2 text-[32px] leading-1.5 font-normal tracking-normal mt-4 mb-4">
          Строй мир вместе с нами -
          <br />
          отправляйтесь в глобальные строительные приключения!
        </h4>
        <a
          href="#"
          className="px-[10px] text-[21px] leading-1.238 font-normal text-blue-500">
          Приступить{" >"}
        </a>
      </div>
    </div>
  );
}

export default ThreeSect;
