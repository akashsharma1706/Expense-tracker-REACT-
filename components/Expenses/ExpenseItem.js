import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'; 
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return(
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
         {/* <div className="expense-item__description">
          <h2>{props.title}</h2>  
          <div className="expense__location">{props.location}</div>
           <div className="expense-item__price">Rs.{props.amount}</div>
        </div> */}
      </Card>
        );
}

export default ExpenseItem;