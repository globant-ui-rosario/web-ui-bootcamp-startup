import React, { Component } from 'react'
import HouseContent from '../Level 2/HouseContent'
import querystring from 'query-string';

export default class House extends Component {
  constructor(props){
    super(props);
    this.state = {
      houses: [],
      title: 'House'
    }
  }

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/houses';
    const params = {
        key: '$2a$10$UAdBgMAn4QwVG1Lmesy/IOcgM83yWR.5k9Q7rfUvSx/7vn58LmblK',
    }
    const qs = querystring.stringify(params);
    fetch(`${url}?${qs}`)
      .then(response => response.json())
      .then((result) => {
          this.setState({
              loading: true,
              houses: result
          });
      });
  }

  render() {
    const { houses } = this.state
    const { houseName, displayContent, scrolled, houseClassName } = this.props

    return (
      <div id={this.props.id}>
      {houses.map((house) => {
        if (house.name === houseName){
          return (
            <div style={{display: displayContent}}>
              <ul className={`${houseClassName}-${scrolled}`}>
                <HouseContent
                  classNameTitle={'-house'}
                  title={'House:'}
                  content={` ${house.name}`}
                />
                <HouseContent
                  classNameTitle={'-founder'}
                  title={'Founder: '}
                  content={`${house.founder}`}
                />
                <HouseContent
                  classNameTitle={'-mascot'}
                  title={'Mascot: '}
                  content={`${house.mascot.slice(0, 1).toUpperCase()}${house.mascot.slice(1, 10)}`}
                />
                <HouseContent
                  classNameTitle={'-houseghost'}
                  title={'Ghost: '}
                  content={`${house.houseGhost}`}
                />
                <HouseContent
                  classNameTitle={'-headofhouse'}
                  title={'Head: '}
                  content={`${house.headOfHouse}`}
                />
                <HouseContent
                  classNameTitle={'-values'}
                  title={'Values:'}
                  content=
                  {house.values.map((value) => {
                    return (
                      <div>{value}</div>
                    );
                  })}/>
                <HouseContent 
                  classNameTitle={'-colors'}
                  title={'Colors:'}
                  content=
                  {house.colors.map((color)=> {
                    return (
                      <div>{color}</div>
                    );
                  })}/>
              </ul>
            </div>
          );
        }
      })}
      </div>
    );
  }
}