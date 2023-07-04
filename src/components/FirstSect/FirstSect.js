import BG_Etalones from "./BG_Etalones.png";
import Etalones from "./Etalones.png";

function FirstSect() {
  return (
    <div className="relative h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={BG_Etalones}
        alt="bg"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-center">
        <img src={Etalones} alt="bg1" className="mx-auto mb-8" />
      </div>
    </div>
  );
}

export default FirstSect;
