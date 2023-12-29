import React from 'react'
import { Container } from '../components'
import coding from '../assets/images/coding-home.png'
// import background from '../assets/images/bg-img.jpg'

const HomePage = () =>
{
    return (

        <div className='bg'>
            <Container >

                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,90.7C384,117,480,203,576,208C672,213,768,139,864,122.7C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
                <div className='home-section' >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className='display-2'>
                                    <span className='display-2--intro'>Hey I'm Prashant!</span>
                                    <span className='display-2--description h1-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum quo odio molestiae dicta quam.</span>
                                </h1>
                            </div>
                            <div className="col-md-6">

                                <img className='img-fluid' src={coding} alt="" />

                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,170.7C480,160,600,96,720,80C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
            </Container>
        </div>
    )
}

export default HomePage