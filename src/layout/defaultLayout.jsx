import { Outlet } from "react-router-dom"
import Header from "../assets/components/Header.jsx"


export default function DefaultLayout(){

    return(
        <>
        <Header />
        <Outlet/>
        </>
    )
}