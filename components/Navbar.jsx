import React from "react"
import { getImageURL } from "../image-util"

export default function Navbar() {
    return (
        <nav>
            <img src={getImageURL("airbnb-logo.png")} className="nav--logo" />
        </nav>
    )
}