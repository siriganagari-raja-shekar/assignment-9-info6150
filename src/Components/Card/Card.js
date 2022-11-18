import React from 'react';


const Content = (props) =>{
    var contentStyle = {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        justifyItems: "center",
        alignContent: "center",
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
            {props.content}
        </div>
    );
}

const Heading = (props) =>{
    var headingStyle = {
        width: 100+"%",
        // height: "20%",
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
        // height: props.height,
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
                content={props.children}
            />
        </div>
    );
};

export default Card;



