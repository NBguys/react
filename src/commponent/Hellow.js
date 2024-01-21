import { useState } from "react";

export default function Hellow() {

    // let name = "mike";
    const [name, setName] = useState("mike");

    // function changeName(newName) {
    //     name = name === "mike" ? "jane" : "mike";
    //     console.log(name);
    //     document.getElementById("name").innerText = name;
    //     const newName = name === "mike" ? "jane" : "mike";
    //     setName(newName);
    // }

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={() => {
                const newName = name === "mike" ? "jane" : "mike"
                setName(newName);
            }
            }>Change</button>
        </div>
    )
}