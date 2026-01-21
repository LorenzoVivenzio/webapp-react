import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingolMovie() {
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/movies/${id}`)
            .then((resp) => {
                setMovie(resp.data)
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <>
            <section
                className="banner img-banner"
                style={{
                    backgroundImage: `url(http://localhost:3000/images/${movie.image})`
                }}>
                
            </section>

            <div class="card">
                <div class="card-header">
                   <h2>{movie.title}</h2> 
                </div>
                <div class="card-body">
                    <figure>
                        <blockquote class="blockquote">
                            <p>{movie.abstract} </p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                             <cite title="Source Title">Release year: {movie.release_year} </cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    )
}