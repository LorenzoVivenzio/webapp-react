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

            <div className="card">
                <div className="card-header">
                    <h2>{movie.title}</h2>
                </div>
                <div className="card-body">
                    <figure>
                        <blockquote className="blockquote">
                            <p>{movie.abstract} </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title="Source Title">Release year: {movie.release_year} </cite>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <section>
                <h3 className="mt-5">Recensioni</h3>

                {
                    movie.reviews?.map((review) => (
                        <div key = {review.id}
                        className="card">
                            <div className="card-header">
                                {review.name}
                            </div>
                            <div className="card-body">
                                <figure>
                                    <blockquote className="blockquote">
                                        <p>{review.text}</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        <cite title="Source Title">{review.created_at}</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}