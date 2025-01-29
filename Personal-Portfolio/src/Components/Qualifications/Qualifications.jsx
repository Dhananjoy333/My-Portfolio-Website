import React, { useState } from 'react'
import "./qualifications.css"

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1)
    
        const toggleTab = (index)=>{
            setToggleState(index)
        };

  return (
    <section className='qualification section'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex education__text" 
                : "qualification__button button--flex education__text"
                }
                onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
 
                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex experience__text" 
                : "qualification__button button--flex experience__text"
                }
                onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ?
                    "qualification__content qualification__content-active"
                    : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">10th Standard</h3>
                            <span className="qualification__subtitle">The Reality Public School (91.6%)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2016-2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">12th Standard</h3>
                            <span className="qualification__subtitle">St. Francis D'Assisi High School (79.8%)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2018-2020
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Graduation</h3>
                            <span className="qualification__subtitle">NIT Nagaland</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">AI/ML</h3>
                            <span className="qualification__subtitle">IIT Guwahati</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2025 - Present
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ?
                    "qualification__content qualification__content-active"
                    : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack Web Dev</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">DSA</h3>
                            <span className="qualification__subtitle">Self taught</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2024 - Present
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">AI/ML</h3>
                            <span className="qualification__subtitle">IIT Guwahati</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2025 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications