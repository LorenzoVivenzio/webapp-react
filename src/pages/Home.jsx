import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../assets/components/Card"

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

                {/* // <div key={m.id} className="col">
                //     <div className="card">
                //         <img src= {`http://localhost:3000/images/${m.image}`} className="card-img-top" alt={m.title}/>
                //             <div className="card-body">
                //                 <h5 className="card-title">{m.title}</h5>
                //                 <p className="card-text">Anno di rilascio: {m.release_year}</p>
                //                 <a href="#" className="btn btn-primary">vedi dettagli</a>
                //             </div>
                //     </div>
                //     </div> */}
                </div>
                ))
            }
                    

                    
                </div>
            </div>



        </>
    )
}