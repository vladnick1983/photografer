import { Comment } from "../Comment/Comment";
import React, { useState } from "react";

const Comments = () => {
  const [data, setData] = useState([
    {
      coment:
        "Привет! Посмотрели мы все фотки уже❤️😭все все очень замечательные😭спасибо большое!!! Особенно я какая красотка на портретах🤪🙈мне кажется это самое важное для каждой девочки в свой особенный день, чтобы фотограф увидел ее такой красивой какой она себе видится!!!",
      name: "СЕРЕЖА, ЛИЗА И САША",
      date: "2020-07-22",
      id: 1,
    },
    {
      coment:
        "Анняяяя, мы в шоке от того насколько фотографии живые!! Такая красота !!!! не могу выбрать, что запостить сначала, пропал мой рабочий день! Можем только представить, какие мучения нас ждут, когда вы свадебные фото пришлете! возьму отпуск, чтобы все напечатать и запостить!!! спасибо!!",
      name: "АРКАДИЙ И ОЛЯ",
      date: "2020-05-12",
      id: 2,
    },
    {
      coment:
        "Очень всее крутооо просто кайф!!! Мое лицо почти на каждом фото конечно бесценно!!! И еще раз огромное спасибо) Мама там у меня опять плачет, а мы ржем! Много эмоций вспомнили все и все благодаря вам! если у меня кто-то будет жениться то всех к вам отправлю!",
      name: "РОМА И АНЯ",
      date: "2019-06-23",
      id: 3,
    },
  ]);
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <Comment key={id} {...itemProps} />;
  });
  const [name, setName] = useState("");
  const onChange = (event) => {
    setName(event.target.value);
  };
  const [text, setText] = useState("");
  const onChange1 = (event) => {
    setText(event.target.value);
  };
  const [newId, setNewID] = useState(data.length + 1);
  const addName = (body) => {
    setNewID((val) => val + 1);
    const dat = new Date().toISOString().substring(0, 10);
    const newComent = {
      name: body,
      coment: text,
      date: dat,
      id: newId,
    };
    const newArr = [newComent, ...data];
    if (body !== " " && text !== " " && body !== "" && text !== "")
      setData(newArr);
  };
  const addComent = (event) => {
    event.preventDefault();
    addName(name);
    setName("");
    setText("");
  };
  return (
    <>
      <div className=" container App mt-5 positions">
        <div>
          <h1 className="mb-5 selection">Отзывы</h1>
          <h5>
            Мы благодарны каждой паре за доверие, ведь находиться в этот важный
            день рядом с вами — огромная ответственность и честь.
          </h5>
          <p>Будем рады разместить ваши отзывы у себя на сайте!</p>
        </div>
        <div className="container w-50">
          <form className="row" onSubmit={addComent}>
            <input
              className="mt-2"
              placeholder="ИМЯ"
              width="200px"
              onChange={onChange}
              value={name}
            />
            <textarea
              rows="5"
              className="mt-2 mb-2 "
              placeholder="ОТЗЫВ "
              id="textarea"
              onChange={onChange1}
              value={text}
            ></textarea>
            <button type="submit">ОСТАВТЕ СВОЙ ОТЗЫВ</button>
          </form>
        </div>
      </div>
      <div className="container">{elements}</div>
      <div className="App">
        <button type="button" className="btn selection border mt-3">
          <a href="#" className="text-decoration-none text-reset">
            НАПИСАТЬ ОТЗЫВ
          </a>
        </button>
      </div>
    </>
  );
};
export default Comments;
