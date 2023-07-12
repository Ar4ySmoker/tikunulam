// const secondSect = [
//   "Преимушевства работы с нами >",
//   "Подготовка документов >",
//   "Поиск подходящей работы >",
//   "Поиск жилья >",
//   "Сопровождение по ЕС >",
// ];

const secondSectObjects = [
  { text: "Преимушевства работы с нами >", link: "/" },
  { text: "Подготовка документов >", link: "/" },
  { text: "Поиск подходящей работы >", link: "/" },
  { text: "Поиск жилья >", link: "/" },
  { text: "Сопровождение по ЕС >", link: "/" },
];
function SecondSect() {
  return (
    <div className="box-content h-[84vh]">
      <ul className="flex-wrap flex justify-center self-auto hover:self-end gap-7 text-blue">
        {secondSectObjects.map((item) => (
          <li className="cursor-pointer text-cyan-600" key={item}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecondSect;
