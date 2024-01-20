import './ExpenseItem.css';

function ExpenseDetails(props){

const amount = props.amount;
const location = props.location;
const title = props.title;

    return (
        <div className="expense-item__description">
        <h2>{title}</h2>  
        <div className="expense__location">{location}</div>
         <div className="expense-item__price">Rs.{amount}</div>
      </div>
    );
}


export default ExpenseDetails; 