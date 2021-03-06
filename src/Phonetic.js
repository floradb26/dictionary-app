import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic mt-4">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
            </a>
            <span className="text">/{props.phonetic.text}/</span>  
        </div>
        );
    }