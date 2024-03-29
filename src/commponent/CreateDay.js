import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {

    const days = useFetch(`http://localhost:3003/days`);
    const history = useNavigate();

    function addDay() {
        fetch(`http://localhost:3003/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length+1,
            }),
        }).then(res => {
            if (res.ok) {
                alert("단어추가되었습니다");
                history(`/`);
            }
        });
    }

    return (
        <div>
            <h2>현재 일수:{days.length}</h2>
            <button onClick={addDay}>Day 추가</button>
        </div>

    )
}