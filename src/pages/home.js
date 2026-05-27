import React from "react";
import { Link } from "react-router-dom";
import Graphics from "../components/graphics";
import "./home.css";

const FOCUS = [
    "production reliability — RELEX Solutions",
    "multi-track audio engine — Kotlin, JNI, Oboe",
    "event-driven automation — WebSockets, SQLite",
];

const HOME = () => {
    return (
        <div className="home-root">
            <div className="home-canvas-wrap" aria-hidden="true">
                <Graphics />
            </div>

            <div className="home-content">
                <header className="home-hero">
                    <h1 className="home-name">Georg Vassilev</h1>
                    <p className="home-tag">systems · reliability · realtime software</p>
                    <p className="home-sub">
                        Production troubleshooting, realtime systems, and event-driven software.
                    </p>
                    <nav className="home-links" aria-label="Primary">
                        <Link to="/cv">CV</Link>
                        <span className="home-links-sep">/</span>
                        <a
                            href="https://github.com/Georg1992"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </nav>
                </header>

                <section className="home-focus" aria-label="Current focus">
                    <h2 className="home-focus-label">current focus</h2>
                    <ul className="home-focus-list">
                        {FOCUS.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default HOME;
