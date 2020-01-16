import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';

interface dataProps {
  data: any
}

export default class extends Component<dataProps> {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/teapots/all');
    const data = await res.json();
    return { data }
  }

  render() {
    const {data} = this.props;
    return (
      <div>
        <h1>hello nest next!</h1>
        {
          data.map((item, i) => {
            return (
              <div key={i}>
                {item.name}
              </div>
            )
          })
        }
      </div>

    );
  }
}