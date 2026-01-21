import { Link } from "react-router-dom"


export default function Card(props) {
    
    return (
        <div className="card">
            <img src={`http://localhost:3000/images/${props.image}`} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Anno di rilascio: {props.release_year}</p>
                <Link to = {`/movies/${props.id}`} className="btn btn-primary">vedi dettagli</Link>
            </div>
        </div>
    )
}