import React from 'react';

class ExampleWorkBubble extends React.Component {

  render() {
    let example = this.props.example; // to shorten the code below
    return (
        <div className="section__exampleWrapper"
          onClick={ (evt) => this.props.openModal(evt, example) }>
          <div className="section__example">
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
