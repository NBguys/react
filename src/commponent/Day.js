import Dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {

    const day = useParams().day;
    const wordList = Dummy.words.filter((word) => word.day === Number(day));

    return (
        <table>
            <tbody>
                {wordList.map(word => (
                    < tr key={word.id}>
                        <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}