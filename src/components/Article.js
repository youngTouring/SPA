import React from 'react';
const Article = (props) => {
    const styles = {
        marginTop: 35
    }
    return (
        <article style = {styles}>
            <h3 style = {{
                marginBottom: '3px',
                textTransform: 'uppercase'
            }}>{props.title}</h3>
            <span style = {{
                display: 'block',
                marginBottom: '10px',
                fontSize: '12px'
            }}>Autor: {props.author}</span>
            <p style = {{
                fontSize: 16
            }}>{props.text}</p>
        </article>
    );
}
 
export default Article;