import React from 'react'
import './style.css'
import male from './male.jpg'
import female from './female.jpg'

const Persons = (props) => {

    return(
        <div>
          { props.person ? (
            <div class="our-team">
            <div class="picture">
              <img class="img-fluid" alt="" src={male}/>
            </div>
            <div class="team-content">
              <h3 class="name">{props.person.name}</h3>
              <h4 class="title">{props.person.age}</h4>
            </div>
            <ul class="social">
              {props.person.gender}
            </ul>
          </div>
          ): null }  
        </div>
    )
}
export default Persons