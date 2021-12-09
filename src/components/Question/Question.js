import React, {useState} from 'react'
import classes from "./Question.module.scss"
import QuestionItem from "../../components/Question/QuestionItem/QuestionItem"

export default function Question() {


  const [Question, SetQuestion] = useState([
  {
    id: 1,
    open: false,
    title:'Где я могу приобрести продукцию FUMMO?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>. <br>  Мы рекомендуем предварительно позвонить в магазин чтобы убедиться в наличии нужного Вам товара.',
  },
  {
    id: 2,
    open: false,
    title:'Планируется ли запуск дополнительных вкусов?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
    id: 3,
    open: false,
    title:'Безопасна ли продукция FUMMO для здоровья?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
    id: 4,
    open: false,
    title:'Как стать партнером FUMMO?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
    id: 5,
    open: false,
    title:'Каков минимальный возраст для покупки продукции FUMMO в торговых точках?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
      id: 6,
      open: false,
    title:'Можно ли перезарежать севшие девайсы FUMMO?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
      id: 7,
      open: false,
    title:'Как правильно затягиваться FUMMO?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
      id: 8,
      open: false,
    title:'Есть ли свидетельства о качестве продукции FUMMO от третьих лиц?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
      id: 9,
      open: false,
    title:'Где производится продукция FUMMO?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  {
      id: 10,
      open: false,
    title:'Планируется ли запуск новых устройств FUMMO?',
    content: 'Вы можете найти ближайший к Вам магазин на нашем сайте в <a href="#">разделе «Где купить»</a>.',
  },
  ])

  const clickQuestionItem = (id) => {

      const QuestionCopy = Question.map(item => {
      if (item.id === id) {
        item.open = !item.open

      }

      return item
    })

    SetQuestion(QuestionCopy)
  }



return (
<div className={classes.Question}>
  <p className={classes.title}>Вопросы и ответы</p>

  {Question && Question.length ? Question.map((item, index) => (
    <QuestionItem
      key={item.index}
      title={item.title}
      content={item.content}
      open={item.open}
      id={item.id}
      clickQuestionItem={clickQuestionItem}
      />

  )) : null} 

</div>
)
}