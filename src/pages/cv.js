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
                                <a href="https://www.codewars.com/users/Georg1992"><b>Codewars</b></a> <br />
                                <i>Ask for more if needed!</i>
                            </p>
                        </div>


                        <div className="text-left" style={{ marginTop: '20px' }}>
                            <h2><b>Language Skills</b></h2>
                            <p>
                                English (fluent) <br />
                                Russian (mother tongue) <br />
                                Finnish (upper intermediate) <br />
                                German (basic) <br />
                            </p>
                        </div>


                    </Col>
                    <Col xs="12" md="4">
                        <div >
                            <h2><b>Overview</b></h2>
                            <p >

                                I am a Technical Service Consultant with 3+ years of experience at RELEX Solutions, working extensively with distributed systems, cloud infrastructure, and backend technologies.
                                My expertise includes debugging complex production systems, working with JVM-based languages (Kotlin, Java), CI/CD pipelines, and monitoring tools. 
                                With strong problem-solving abilities and hands-on experience troubleshooting and resolving issues in enterprise software, I excel at maintaining service reliability and understanding system architectures.
                                I thrive in collaborative, international team environments and am eager to transition into a development role where I can apply my technical knowledge and passion for building robust software solutions.


                            </p>

                            <h2>
                                <b>Work History</b>
                            </h2>

                            <p>
                                <i>05.2025-present</i><br />
                                <b>Company:</b> RELEX Solutions <br />
                                <b>Position:</b> Technical Service Consultant <br />
                                Debugging production systems, configuring business rules and system settings, analyzing logs with monitoring tools, creating technical documentation, and collaborating with internal development teams.
                            </p>

                            <p>
                                <i>2023-05.2025</i><br />
                                <b>Company:</b> RELEX Solutions <br />
                                <b>Position:</b> Application Support Specialist <br />
                                Resolved technical issues in production environments and worked with GitLab CI/CD pipelines.
                            </p>

                            <p>
                                <i>12.2021-2023</i><br />
                                <b>Company:</b> RELEX Solutions <br />
                                <b>Position:</b> Application Support Analyst <br />
                                Investigated and debugged software issues in enterprise supply chain optimization systems.
                            </p>

                            <p>
                                <i>05.2021-09.2021</i> <br />
                                Company: Big Ear <br />
                                Position: Game Developer/Sound Engineer <br />
                            </p>

                            <p>
                                <i>09.2014-01.2016 (Civil Service)</i> <br />
                                Company: Lyhty Ry <br />
                                Position: Stage Assistant, Audio Engineer <br />
                            </p>

                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <div >

                            <h2><b>Technical Skills</b></h2>
                            <p>

                                <b>Programming Languages:</b> Kotlin, Java, Javascript (Node.js, React), C#, Bash <br />
                                <b>Frameworks & Libraries:</b> Node.js, React, Unity 3D <br />
                                <b>Cloud & Infrastructure:</b> Azure AD <br />
                                <b>CI/CD & DevOps:</b> GitLab CI/CD, Git <br />
                                <b>Monitoring & Observability:</b> Grafana, Datadog, Honeycomb <br />
                                <b>Development Tools:</b> Visual Studio Code, Android Studio, Jira, Cooper <br />
                                <b>Operating Systems:</b> Linux, Mac OSX, Windows
                            </p>

                            <h2><b>Education</b></h2>
                            <p>
                                Metropolia UAS (Espoo, Finland) <br />
                                Information Technology bachelor degree <br />
                                <i>2019-2023</i> <br />
                            </p>
                            <p>
                                Metropolia UAS (Espoo, Finland) <br />
                                Media Engineering bachelor degree <br />
                                108 ECTS <br />
                                <i>2010-2014 </i> <br />
                            </p>

                        </div>
                    </Col>
                </Row>
                

            </Container>

        </body>
    );

};
export default CV;




























































