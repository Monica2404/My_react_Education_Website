import React from "react";
import Title from "../../common/Title/Title";
import "./hero.css"
const Hero =()=> {
    return (
        <div>
           <section className='hero'>
            <div className='container'>
                <div className='row'>
                    <Title/>
                    < Title subtitle='WELCOME TO FUTURE SKILLS' title='Best Online Education Expertise' />
                    <div className='button'>
                     <button className='primary-btn'>
                        GET STARTED NOW<i className='fa fa-long-arrow-alt-right'></i>
                     </button>
                     <button>
                        VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                     </button>
                     </div>
                </div>
            </div>
           </section>
           <div className='margin'></div>
        </div>
    )
}
export default Hero