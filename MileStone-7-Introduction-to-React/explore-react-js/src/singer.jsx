// import css
import "./App.css";
export default function Singer({singer}){
    
    
    return (
        <div className="singer">
            <h2>Name : {singer.name}</h2>
            <p>Age : {singer.age}</p>
        </div>
    )
}