import { useState } from "react";
import UserName from "./UserName";

export default function Hellow({paramAge}) {

    // let name = "mike";
    const [name, setName] = useState("mike");
    const [age, setAge] = useState(paramAge);
    const msg = age < 19 ? "미성년자입니다" : "성인 입니다";

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
            <h2 id="name">{name}{age} : {msg}</h2>
            <UserName name={name} />
            <button onClick={() => {
                const newName = name === "mike" ? "jane" : "mike"
                setName(newName);
            }
            }>Change</button>
        </div>
    )
}