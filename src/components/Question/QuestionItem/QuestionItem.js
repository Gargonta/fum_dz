
import React from 'react'
import classes from "./QuestionItem.module.scss"




export default function QuestionItem({title,id,content,open,clickQuestionItem}) {

return (
    <div className={classes.QuestionItem}
    	data-active={open ? "Y" : null}>
      <div className={classes.wrapTop}>
        <p className={classes.QuestionItemTitle}>{title}</p>
        <span className={classes.QuestionItemOpen}
        onClick={() => clickQuestionItem(id)}
        ></span>
      </div>
       <div className={classes.wrapContent}>
       <p dangerouslySetInnerHTML={{ __html:content}}/>
       </div>
    </div>
    )
}