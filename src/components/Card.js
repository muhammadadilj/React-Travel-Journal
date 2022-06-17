import React from "react";
import locationIcon from "../img/icon-location.svg";

export default function Card(props) {
    let style = {};
    if (props.index > 0) {
        style =  {borderTopWidth: "1px", borderTopColor:"#f5f5f5", borderTopStyle: "solid"};
    }
    
    return (
    <section className="card" style={style}>
        <div className="card--imageContainer">
            <img className="card--image" src={props.item.imageURL} />
        </div>
        <article className="article--container">
            <p className="article--location-group">
              <img src={locationIcon} /> <span className="article--location">{props.item.location}</span> <a href={props.item.gMapsLink} className="article--location-link" target="_blank">View on Google Maps</a>
            </p>
            <h3 className="article--title">{props.item.title}</h3>
            <p className="article--dates">{props.item.startDate} - {props.item.endDate}</p>
            <p className="article--text">{props.item.description}</p>
        </article>
    </section>
    )
}