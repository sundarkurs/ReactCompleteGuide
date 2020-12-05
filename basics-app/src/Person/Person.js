import React, { Component } from "react";
import "./Person.css";

const person = (props) => {
    return(
        <div className="Person">
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default person;

