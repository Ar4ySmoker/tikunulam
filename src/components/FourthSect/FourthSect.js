const threeSectObjectsLT = [
  { text: "Докуметны >" },
  { text: "Документация нашей фирмы: NIP,WAT и другие >" },
  { text: "Подробнее >" },
];
const threeSectObjectsRT = [
  { text: "Отправка" },
  { text: "Vander Elst visa,переезд,зарплата и другие вопросы" },
  { text: "Ознакомиться с деталями" },
];

const threeSectObjectsLB = [
  { text: "Новости >" },
  { text: "Перезд,работа,быт >" },
  { text: "Читать новости >" },
];
const threeSectObjectsRB = [
  { text: "Контакты >" },
  { text: "ыстрый отклик по любой связи >" },
  { text: "Перейти >" },
];

function FourthSect() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className=" p-4 h-[84vh] shadow-fourth">
        <ul id="">
          {threeSectObjectsLT.map((item) => (
            <li className="cursor-pointer text-cyan-600" key={item}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 h-[84vh] ">
        <ul id="">
          {threeSectObjectsRT.map((item) => (
            <li className="cursor-pointer text-cyan-600" key={item}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" h-[84vh] shadow-fourth 	">
        <ul id="">
          {threeSectObjectsLB.map((item) => (
            <li className="cursor-pointer text-cyan-600" key={item}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" p-4 h-[84vh]  ">
        <ul id="">
          {threeSectObjectsRB.map((item) => (
            <li className="cursor-pointer text-cyan-600" key={item}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default FourthSect;
