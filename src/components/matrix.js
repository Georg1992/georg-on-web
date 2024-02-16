import React, { useRef, useEffect } from "react";

const renderMatrix = (ref, color, width, height) => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = 800;

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array.from({ length: columns }, () => 1);

    const render = () => {
        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = color ? color : "#0F0";
        context.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    return render;
};

const MatrixRainingLetters = (props) => {
    const ref = useRef();
    const keyName = "mrl-" + props.key;
    const thisClassName = "mrl-container " + props.custom_class;

    useEffect(() => {
        const bodyWidth = document.body.clientWidth;
        const bodyHeight = document.body.clientHeight;

        const render = renderMatrix(ref, props.color, bodyWidth, bodyHeight);
        const intervalId = setInterval(render, 30);

        return () => clearInterval(intervalId);
    }, [props.color]);

    return <canvas key={keyName} className={thisClassName} ref={ref} />;
};

export default MatrixRainingLetters;