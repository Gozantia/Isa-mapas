import React , { Fragment } from 'react'

const About = () => {
    return (
    // props.match.params.name
    <Fragment>
      <h1>About</h1>
      <FakeText />
    </Fragment>
  )
  };
    
export default About; 

const FakeText = () => (
    <p>
Trompas and motas, colombia-san-andres, colombia-san-andres, colombia-san-andres  </p>
    )