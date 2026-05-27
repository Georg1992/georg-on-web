import React from "react";
import profilepic from '../images/profilepic.jpg'
import { Row, Col, Container, Image } from "react-bootstrap";

const CV = () => {
    return (

        <body>
            <Container fluid className="p-3 ">
                <Row>
                    <Col className="text-center justify-content-center"
                        xs="12"
                        md="4"
                        style={{ wordWrap: 'break-word' }}
                    >
                        <div >
                            <Image
                                rounded
                                src={profilepic}
                                className="img-fluid"
                                style={{ maxWidth: '50%', minWidth: '250px' }}



                            />
                            <h2 style={{ marginTop: '20px' }}> <b>Georg Vassilev</b></h2>

                            <p >
                                Kajenkuja 8 23D 00500 Helsinki <br />
                                040 825 3839  <br />
                                selftitled1@gmail.com <br />

                            </p>

                        </div>

                        <div className="text-left">
                            <p>
                                <h5><b>Links:</b></h5>
                                <a href="https://github.com/Georg1992" ><b>GitHub</b></a> <br />
                                <a href="https://www.georg-vassilev.com"><b>My website</b></a> <br />
                            </p>
                        </div>


                        <div className="text-left" style={{ marginTop: '20px' }}>
                            <h2><b>Languages</b></h2>
                            <p>
                                English — Fluent <br />
                                Russian — Native <br />
                                Finnish — Basic <br />
                                German — Basic <br />
                            </p>
                        </div>


                    </Col>
                    <Col xs="12" md="4">
                        <div >
                            <h2><b>Overview</b></h2>
                            <p >

                                Technical specialist with 4+ years at RELEX Solutions in production reliability for distributed systems and JVM/backend services.
                                I lead incident response and root-cause analysis through observability tooling, partner with engineering on durable fixes, and develop in Kotlin, Java, and JavaScript.


                            </p>

                            <h2>
                                <b>Work History</b>
                            </h2>

                            <p>
                                <i>05.2025–Present</i><br />
                                <b>Company:</b> RELEX Solutions <br />
                                <b>Position:</b> Senior Application Specialist <br />
                                Lead production incident response and technical investigations across distributed enterprise systems; perform root-cause analysis using logs, metrics, and traces in Grafana, Datadog, and Honeycomb; drive issue mitigation and resolution with engineering teams; configure platform settings and business rules; document findings, runbooks, and operational context for reliability follow-up.
                            </p>

                            <p>
                                <i>2024-05.2025</i><br />
                                <b>Company:</b> RELEX Solutions <br />
                                <b>Position:</b> ISRE Engineer (Technical Service Consultant) <br />
                                Owned production incident response and reliability investigations for enterprise supply chain platforms; analyzed failures through observability tooling; produced runbooks and technical documentation; partnered with development on root-cause analysis, fixes, and post-incident follow-up.
                            </p>

                            <p>
                                <i>2023-2024</i><br />
                                <b>Company:</b> RELEX Solutions <br />
                                <b>Position:</b> Application Support Specialist <br />
                                Investigated and resolved production issues in distributed enterprise environments; debugged JVM-based services; supported deployments and GitLab CI/CD pipelines.
                            </p>

                            <p>
                                <i>12.2021-2023</i><br />
                                <b>Company:</b> RELEX Solutions <br />
                                <b>Position:</b> Application Support Analyst <br />
                                Investigated and debugged software issues in enterprise supply chain optimization systems.
                            </p>

                            <p>
                                <i>05.2021–09.2021</i> <br />
                                <b>Company:</b> Big Ear <br />
                                <b>Position:</b> Game Developer/Sound Engineer <br />
                            </p>

                            <p>
                                <i>09.2014–01.2016 (Civil Service)</i> <br />
                                <b>Company:</b> Lyhty Ry <br />
                                <b>Position:</b> Stage Assistant, Audio Engineer <br />
                            </p>

                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <div >

                            <h2><b>Technical Skills</b></h2>
                            <p>

                                <b>Programming Languages:</b> Kotlin, Java, JavaScript, Bash, C#, SQL <br />
                                <b>Backend & Systems:</b> JVM services, REST APIs, distributed systems <br />
                                <b>Reliability & Operations:</b> Incident management, root-cause analysis, troubleshooting, operational reliability <br />
                                <b>Monitoring & Observability:</b> Grafana, Datadog, Honeycomb (logs, metrics, traces) <br />
                                <b>CI/CD & DevOps:</b> GitLab CI/CD, Git <br />
                                <b>Cloud & Platforms:</b> Azure AD, Linux, macOS, Windows <br />
                                <b>Development:</b> Node.js, React, Android (Kotlin), Unity 3D; Visual Studio Code, Android Studio, Jira, Cooper <br />
                                <b>AI-Assisted Development Workflows:</b> Cursor, LLM-based code review/debugging
                            </p>

                            <h2><b>Education</b></h2>
                            <p>
                                Metropolia UAS (Espoo, Finland) <br />
                                Information Technology, bachelor's degree <br />
                                <i>2019–2023</i> <br />
                            </p>
                            <p>
                                Metropolia UAS (Espoo, Finland) <br />
                                Media Engineering, bachelor's degree <br />
                                108 ECTS <br />
                                <i>2010–2014</i> <br />
                            </p>

                            <h2><b>Selected Technical Projects</b></h2>

                            <p>
                                <b>Android multi-track audio engine (personal)</b> — Kotlin, Jetpack Compose, JNI, C++, Oboe; active development <br />
                                • Realtime playback/recording engine with multi-track scheduling, loop timing, and transport synchronization across Kotlin and native C++ audio layers. <br />
                                • Core playback and transport systems implemented; broader editing and workflow features remain in active development.
                            </p>

                            <p>
                                <b>Exchange market analysis and automation system (personal)</b> — WebSockets, exchange APIs, SQLite, event-driven architecture <br />
                                • Processes realtime market data streams and coordinates analysis, state management, and automation workflows across multiple system components. <br />
                                • Designed around long-running reliability concerns including reconnect handling, deterministic processing, local persistence, and state consistency across live feeds.
                            </p>

                        </div>
                    </Col>
                </Row>
                

            </Container>

        </body>
    );

};
export default CV;




























































