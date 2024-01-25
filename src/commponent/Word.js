import { useState } from "react"

export default function Word({ word: paramWord }) {

    const [word, setWord] = useState(paramWord);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleIsShow() {
        setIsShow(!isShow);
    }

    function toggleIsDone() {
        fetch(`http://localhost:3003/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone)
            }
        })
    }

    function del() {
        if (window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3003/words/${word.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res => {
                if(res.ok) {
                    setWord({id:0});
                }
            })
        }
    }

    if(word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone}
                    onChange={toggleIsDone}
                />
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleIsShow}>뜻 {!isShow ? '보기' : '숨기기'}</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    )
}