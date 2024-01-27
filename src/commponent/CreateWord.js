import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";

export default function CreateWord() {

    const days = useFetch(`http://localhost:3003/days`);
    const [isLoading, setIsLoading] = useState(false);

    const refEng = useRef(null);
    const refKor = useRef(null);
    const refDay = useRef(null);
    const history = useNavigate();

    function onSubmit(e) {

        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3003/words/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eng: refEng.current.value,
                    kor: refKor.current.value,
                    day: refDay.current.value,
                    isDone: false,
                }),
            }).then(res => {
                if (res.ok) {
                    alert("단어추가되었습니다");
                    history(`/day/${refDay.current.value}`);
                    setIsLoading(false);
                }
            });
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" ref={refEng}></input>
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" ref={refKor}></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={refDay}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button style=
            {{
                opacity: isLoading ? 0.3 : 1.0 
            }}>
                { isLoading ? "saveing..." : "저장" }
            </button>
        </form>
    )

}