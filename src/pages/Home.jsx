import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/movies")
            .then((resp) => {
                setMovies(resp.data.results)
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <h3 className="text-center mt-4">Lista dei film</h3>
            <ul>
                {
                    movies.map((m) => {
                        return <li key={m.id}>
                            {m.title}
                        </li>
                    })
                }
            </ul>
        </>
    )
}