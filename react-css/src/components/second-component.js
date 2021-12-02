import React from 'react';
import "../styles/secondStyle.css";

class SecondComponent extends React.Component {
    render() {
        function getData() {
            return "Hello I am your custom span";
        }
        var h1Style = {
            backgroundColor: "yellow",
            color: "red"
        }
        return (
            <div>
                {/* Inline css */}
                <h1 style={{backgroundColor: "red", color: "#fff"}}>This is second Component</h1>
                {/* external css */}
                <span className="my-custom-span">{getData()}</span>
                {/* internal css */}
                <p style={h1Style}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, soluta. Autem nam, natus quidem sint ut sed! Id, non optio? Necessitatibus quia dolores qui voluptatem maxime facere quibusdam labore magni? </p>
            </div>
        )
    }
}

export default SecondComponent;