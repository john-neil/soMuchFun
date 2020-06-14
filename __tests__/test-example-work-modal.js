import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from "../js/example-work-modal"


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const myExample = [
  {
    'title': "Click Here!",
    'href': "https://www.google.com/maps/place/29+Barnacle+Ln,+Cushing,+ME+04563/data=!4m2!3m1!1s0x4cadb8329ff27aab:0x1a2eda5dea4470b?sa=X&ved=2ahUKEwiw9pD9mYLqAhUMIjQIHWmDCxkQ8gEwAHoECAsQAQ",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/myVacationProperty.jpeg",
      'comment': ""
    }
  }
]

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myExample[0]}
    open={false}/>);
  let openComponent = shallow(<ExampleWorkModal example={myExample[0]}
    open={true}/>);

  let anchors = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("should link to our project", () =>{
  expect(anchors.props().href).toEqual(myExample[0].href);
  });

  it("Shoulld have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    })
});
