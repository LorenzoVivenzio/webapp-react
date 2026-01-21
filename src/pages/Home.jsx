import axios from "axios"
import { useEffect, useState } from "react"
import Card from "/src/assets/components/Card";

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
            <div className="container">
                <div className="row">

            {
                movies.map((m) => (
                    <div key={m.id} className="col">
                    <Card 
                    key={m.id}
                    image={m.image}
                    title={m.title}
                    release_year={m.release_year}
                    />
                </div>
                ))
            }
                    

                    
                </div>
            </div>



        </>
    )
}