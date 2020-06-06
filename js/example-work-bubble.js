import React from 'react';

class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example; // to shorten the code below
    return (
        <div className="section__exampleWrapper">
          <div className="section__example">
            // "example screenshot of a project involving code"
            <img
                className="section__exampleImage"
                alt={ example.image.desc }
                src={ example.image.src }
            />
            <dl className="color--cloud">
              <dt className="section__exampleTitle section__text--centered">
                { example.title }
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
    )
  }
}

export default ExampleWorkBubble
