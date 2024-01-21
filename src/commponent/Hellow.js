import World from "./World";
import styles from "./Hellow.module.css"

export default function Hellow() {

    function showName(name) {
        console.log(name);
    }
    function showAge(age) {
        console.log(age);
    }
    function showText(txt) {
        console.log(txt);
    }

    return (
        <div>
            <h1>Hellow</h1>
            <button onClick={() => 
                showName("mike")
            }>show name</button>
            <button onClick={() => 
                console.log(10)
            }>show age</button>
            <input type="text" onChange={(e) =>
                showText(e.target.value)
            }></input>
        </div>
    )
}