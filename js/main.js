import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Zoom",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/myVacationProperty.jpeg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
