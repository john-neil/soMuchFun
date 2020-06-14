import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Click Here!",
    'href': "https://www.google.com/maps/place/29+Barnacle+Ln,+Cushing,+ME+04563/data=!4m2!3m1!1s0x4cadb8329ff27aab:0x1a2eda5dea4470b?sa=X&ved=2ahUKEwiw9pD9mYLqAhUMIjQIHWmDCxkQ8gEwAHoECAsQAQ",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/myVacationProperty.jpeg",
      'comment': ""
    }
  },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
