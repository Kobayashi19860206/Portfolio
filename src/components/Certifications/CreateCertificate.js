import React from "react";

import "./createCertificate.css"

import Card from '../UI/Card';
const CreateCertificate = (props) => {
    return (
        <Card className="certificate">
            <div className="cert-overlay">
                <div className="overlay-link">
                    <a href={props.item.link} id='overlay-text'>
                        View Certificate
                    </a>
                </div>
            </div>
            <div className="cert-body">
                <div className="cert-image">{props.item.image}</div>
                <div className="cert-info">
                    <div className="cert-title">
                        {props.item.title}
                    </div>
                    <div className="instructor">
                        {props.item.instructor}
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default CreateCertificate;