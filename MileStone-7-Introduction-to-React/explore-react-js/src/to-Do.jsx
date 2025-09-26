// need to export the component when i write this outside the app.jsx, 
// from one component i can just export one in default ; 
// i can export multiple component form one file but default one ; 
export default function ToDo({ task, isDone }) {
  console.log(task, isDone);

//   conditional rendering ; 
  if (isDone === true) {
    return (
      <ul className="student">
        <li>{task} : is done</li>
      </ul>
    );
  }

  return (
    <ul className="student">
      <li>{task} : is pending</li>
    </ul>
  );
}
