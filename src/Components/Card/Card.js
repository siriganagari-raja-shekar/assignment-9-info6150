import React from 'react';


const Content = (props) =>{
    var contentStyle = {
        display: "flex",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        textAlign: "center",
        padding: 1+"rem",
        fontSize: "1rem",
        borderBottomLeftRadius: 1+"rem",
        borderBottomRightRadius: 1+"rem",
        color: "#b8c1ec",
    }


    return(
        <div style={contentStyle}>
            <p>{props.content}</p>
        </div>
    );
}

const Heading = (props) =>{
    var headingStyle = {
        width: 100+"%",
        height: "20%",
        backgroundColor: "white",
        padding: 0.2+"rem",
        textAlign: "center",
        borderBottom: "1px solid black",
        fontSize: "1.75rem",
        borderTopLeftRadius: 1+"rem",
        borderTopRightRadius: 1+"rem"
    }

    return(
        <p style={headingStyle}>{props.text}</p>
    );
}

const Card = (props) => {

    const cardStyle = {
        width: props.width,
        height: props.height,
        margin: "1rem auto",
        border: "0.1rem solid black",
        borderRadius: 1+"rem",
        fontFamily: "Verdana"
    }
    return (
        
        <div style={cardStyle}>
            <Heading text={props.heading}/>
            <Content 
                backgroundColor={props.backgroundColor} 
                content={props.content}
            />
        </div>
    );
};

export default Card;



