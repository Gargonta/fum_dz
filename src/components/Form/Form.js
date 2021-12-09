import React from 'react'
import classes from "./Form.module.scss"

export default function Form() {

return (
<div className={classes.Form}>
  <p className={classes.Title}>поддержка</p>
  <div className={classes.wrapside}>
    <div className={classes.left}>
      <p className={classes.time}>Пн–Пт: 10:00–22:00</p>
      <a href="tel:+79151291100" className={classes.phone}>+7 (915) 129-11-00</a> 
      <a href="mailto:support@fummo.ru" className={classes.mail}>support@fummo.ru</a> 
      <p className={classes.text}>Если у вас есть какие-либо вопросы  по использованию или устройству нашего продукта, вы можете связаться со службой поддержки. Также вы можете найти ответы на часто задаваемые вопросы ниже.</p>
    </div>
    <div className={classes.right}>
      <form action="#">
        <p className={classes.righttitle}>Есть вопросы? Напишите нам.</p>
        <div className={classes.wrapinput}>
          <input  type="text" placeholder="Ваше имя" value=''/>
        </div>
        <div className={classes.wrapinput}>
          <input  type="text" placeholder="Ваш e-mail" value=''/>
        </div>
        <div className={classes.wraptextarea}>
          <textarea placeholder="Ваше сообщение" value=''/>
        </div>
        <div className={classes.wrapcheckblock}>
          <div className={classes.wrapcheck}>
            <input  id='email' type="checkbox" hidden value=''/>
            <label htmlFor='email'>
              <p>заполняя форму, вы даёте  <a href="#">согласие на обработку персональных данных</a></p>
            </label>
          </div>
          <input type="submit" value="Отправить" />

        </div>

      </form>
    </div>
  </div>
</div>

)
}