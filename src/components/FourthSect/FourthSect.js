import App from "../../App";
function FourthSect() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className=" p-4 h-[84vh] shadow-fourth">
        <div>
          <h4>Докуметны</h4>
          <h5>Документация нашей фирмы: NIP,WAT и другие</h5>
          <a href="">Подробнее </a>
        </div>
      </div>
      <div className="p-4 h-[84vh] ">
        <div id="">
          <h4>Отправка</h4>
          <h5>vander Elst visa,переезд,зарплата и другие вопросы</h5>
          <a href="">Ознакомиться с деталями </a>
        </div>
      </div>
      <div className=" h-[84vh] shadow-fourth 	">
        <div className="">
          <h4>Новости</h4>
          <h5>Перезд,работа,быт.</h5>
          <div class="">
            <a id="" href="">
              Читать новости{" "}
            </a>
            <a id="" href="">
              Подписаться{" "}
            </a>
          </div>
        </div>
      </div>
      <div className=" p-4 h-[84vh]  ">
        <div class="">
          <h4>Контакты</h4>
          <h5>Быстрый отклик по любой связи.</h5>
          <div class="">
            <a href="">Перейти </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FourthSect;
