import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Click Here!",
    'href': "https://www.google.com/maps/place/29+Barnacle+Ln,+Cushing,+ME+04563/data=!4m2!3m1!1s0x4cadb8329ff27aab:0x1a2eda5dea4470b?sa=X&ved=2ahUKEwiw9pD9mYLqAhUMIjQIHWmDCxkQ8gEwAHoECAsQAQ",
    'desc': "After a long, productive, and rewarding career in the software industry, I dream of getting the heck out of the city, ideally to this vacation property on the coast of Maine.  It's an ocean-front family compound with both a cottage and a boathouse, so it can sleep upwards of thirty people in a pinch.  It has west-facing views so you see the sunset.  Even better, it's extremely rural and you cannot ask for better social distancing.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/myVacationProperty.jpeg",
      'comment': ""
    }
  },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
