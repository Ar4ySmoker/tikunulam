import Call from "../Call/Call";
import LogoSingle from "../LogoSingle/LogoSingle";
function Nav() {
  return (
    <div className="flex w-full justify-between items-center">
      <LogoSingle />
      <ul className="cursor-pointer items-center w-auto flex gap-10 select-none list-none m-0 px-10 justify-center">
        <li>
          <a>Главная</a>
        </li>
        <li>
          <a>Карта</a>
        </li>
        <li>
          <a>Вакансии</a>
        </li>
        <li>
          <a>Контакты</a>
        </li>
      </ul>
      <div className="mr-10 flex justify-self-end items-center gap-1">
        <Call className="flex" />
        <a>Позвонить</a>
      </div>
    </div>
  );
}
export default Nav;
