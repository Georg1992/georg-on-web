import React from "react";
import Graphics from "../components/graphics";

const HOME = () => {
    return (
        <div
            className="graphic-container"
            style={{
                position: "relative",
                minHeight: "100vh",
                background: "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    paddingTop: "10vh",
                }}
            >
                <Graphics />
            </div>
        </div>
    );
};

export default HOME;
