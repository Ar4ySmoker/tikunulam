import Call from "../Call/Call";
import LogoSingle from "../LogoSingle/LogoSingle";


const listItems = ["Главная", "Карта", "Вакансии", "Контакты"];

const listItemsObjects = [
  { text: "Главная", link: "/" },
  { text: "Карта", link: "/" },
  { text: "Вакансии", link: "/" },
  { text: "Контакты", link: "/" },
];

function Nav() {
  return (
    <nav className="flex w-full justify-between items-center">
      <LogoSingle />
      <ul className=" cursor-pointer items-center w-auto flex gap-10 select-none list-none m-0 px-10 justify-center">
        {listItemsObjects.map((item) => (
          <li key={item}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      <a className="mr-10 flex justify-self-end items-center gap-1">
        <Call className="flex" />
        <p>Позвонить</p>
      </a>
    </nav>
  );
}
export default Nav;

