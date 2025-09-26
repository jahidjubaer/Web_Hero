import "./App.css";
// import the toDO component form "to-Do file";
import ToDO from "./to-Do";

function App() {
  return (
    <>
      {/* use the component like tag */}
      <Student></Student>
      <IdNumber></IdNumber>
      <IdNumber></IdNumber>
      <Student></Student>
      <Developer name="jahid" tech="js"></Developer>
      <Developer name="rakib" tech="js, java"></Developer>
      <Player name="Jahid " runs="40000"></Player>
      <Player name="Tamim" runs="5000"></Player>
      {/* need to use {} when i pass boolean value ;  */}
      <ToDO task="math" isDone={false}></ToDO>
      <ToDO task="physics" isDone={true}></ToDO>
      <ToDO task="english" isDone={true}></ToDO>
    </>
  );
}

// my first component ;
// make sure the name of a component start with capital letter ;

function IdNumber() {
  const id = "222-115-116";
  // return the functionalities ;
  return <p>my id is {id}</p>;
}

// parameter pass ;
function Developer(props) {
  const salary = 2000;
  // inline styling ;
  return (
    <div
      style={{
        color: "red",
        background: "blue",
        borderRadius: "30px",
        padding: "40px",
        margin: "20px",
      }}
    >
      <p>Name: {props.name}</p>
      <p>Web Developer</p>
      <p>Salary : {salary}</p>
      <p>Tech: {props.tech}</p>
    </div>
  );
}

function Student() {
  const name = "jahid";
  const id = "222-115-116";

  // we can style using like this
  const studentStyle = {
    color: "red",
    // we can't use high-fen like css; need to use camalcase ;
    textAlign: "left",
  };
  return (
    <div style={studentStyle} className="student">
      <h1>Student Profile</h1>
      <p>student name {name}</p>
      <p>student id :{id} </p>
    </div>
  );
}

// using destructuring ;
function Player({ name, runs }) {
  return (
    <div className="student">
      <h2>Player Name:{name} </h2>
      <p>Runs: {runs}</p>
    </div>
  );
}

export default App;
