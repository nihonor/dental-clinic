import React from 'react'
import Client from '../clien/Client'
import Line from '../line/Line'

const About = () => {
  return (
    <>
    <div>
    <div className=" flex justify-center text-center ">
          <div >
            <h5 className="text-btncolor">Practice Advice</h5>
            <h1 className="text-5xl font-bold text-white px-4">
              Each and every client is important
            </h1>
            <div className="text-white p-10 font-semibold">
              Problems trying to resolve teh conflict between
              <div>
                the two major realms of Classical physics:Newtonian mechanics
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center gap-4">
          <Line/>
        <Client/>
        <Client/>
        <Line/>
        </div>
       

      
    </div>
    </>
    
  )
}

export default About
