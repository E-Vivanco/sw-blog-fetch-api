import React from "react";
//import '../styles/Footer.css';
const data = {
    footer: " Elsa Copyright@ Website-2023"
}
export const Footer = () => {
    return (

        <footer className="footer container-fluid footer-col my-5 py-3">
            <div className="texto">{data.footer}</div>

        </footer>
    )
}
export default Footer