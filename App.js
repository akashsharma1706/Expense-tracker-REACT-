import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 5000, date: new Date(2024, 2, 20), location: 'Showroom(Delhi)' },
    { title: 'Groceries', amount: 100, date: new Date(2024, 5, 15), location: 'SuperMarket' },
    { title: 'Dinner Out', amount: 300, date: new Date(2024, 8, 8), location: 'Restaurant' },
    { title: 'Electronics', amount: 1200, date: new Date(2024, 10, 12), location: 'Reliance Digital' },
    // Add more expenses as needed
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
