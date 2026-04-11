import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";



function Singup() {
    const location = useLocation();
    const productid = location.state?.productid;
    return (
        <div>{productid}</div>
    )
}

export default Singup