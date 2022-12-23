import React from 'react';
import {Link} from "react-router-dom";
import NavTabs from '../components/NavTabs';


export default function About() {

  // const [image, setImage]= useState('')
  return (
    
      
    <div>
        <h1>About Page</h1>
        <img className='img-fluid' img src='https://media.licdn.com/dms/image/C5603AQGs0renR193FA/profile-displayphoto-shrink_800_800/0/1517058810355?e=1677110400&v=beta&t=EnBsqxjqzQxmNyQE8tTNRxIfvv2IxD3O5n2ujNimm8I' alt='profile image'></img>
        <p>
          Hello, my name is Sharrod Willanova, I am a recent graduate from the University of Washington's EdX coding bootcamp.
          I am currently looking for a position as a junior fullstack developer, also I am available for website design and other programming needs.


          For any other questions you can contact me here:
          {/* <Link to="Contact" className='nav-link'></Link> */}
          //  TODO: Add a comment explaining what this logic is doing




        </p>
      </div>
  );
}
