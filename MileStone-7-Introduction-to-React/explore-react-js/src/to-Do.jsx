// need to export the component when i write this outside the app.jsx,
// from one component i can just export one in default ;
// i can export multiple component form one file but default one ;
export default function ToDo({ task, isDone }) {
  console.log(task, isDone);

  //   conditional rendering 1 and 2 -> ifelse and if , return  ;
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

// conditional rendering 3 : ternary operator ;
// export function TeacherTask({ task, sub, isDone, time = 0 }) {
//   console.log(task, sub, time, isDone);

//   return isDone ? (
//     <li>
//       {sub} task {task} is done at {time}{" "}
//     </li>
//   ) : (
//     <li>
//       {sub} task {task} is not done yet
//     </li>
//   );
// }

// conditional rendering 4 : && operator true value only ;

// export function TeacherTask({ task, sub, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         {sub} task {task} is done at {time}{" "}
//       </li>
//     )
//   );
// }

// conditional rendering 5 : || false value only ;

// export function TeacherTask({ task, sub, isDone, time = 0 }) {
//   return (
//     isDone || (
//       <li>
//         <li>
//           // {sub} task {task} is not done yet //{" "}
//         </li>
//       </li>
//     )
//   );
// }

// conditional rendering 6 : variable return ;

// export function TeacherTask({ task, sub, isDone, time = 0 }) {
//     // using variable ;
//     let taskUpdate ;
//   if (isDone) {
//     taskUpdate = (
//       <li>
//         {sub} task {task} is done at {time}
//       </li>
//     );
//   } else {
//     taskUpdate = (
//       <li>
//         {sub} task {task} is not done yet{" "}
//       </li>
//     );
//   }
//   return taskUpdate;
// }

// conditional rendering 7 : inline variable ;
export function TeacherTask({ task, sub, isDone, time = 0 }) {
  // using variable ;
  let taskUpdate;
  if (isDone) {
    taskUpdate = (
      <li>
        {/* inline rendering */}
        {sub} task {task} is done at {time > 10 ? time : (time = 0)}
      </li>
    );
  } else {
    taskUpdate = (
      <li>
        {sub} task {task} is not done yet{" "}
      </li>
    );
  }
  return taskUpdate;
}
