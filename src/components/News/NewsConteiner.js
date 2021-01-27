import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../redux/news-reducer";
import News from "./News";
class NewsConteiner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWeather();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <News {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps, { getWeather })(NewsConteiner);
