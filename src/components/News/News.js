import React from "react";
import Loader from "../Comand/Loader";
import style from "./News.module.css";
const News = (props) => {
  if (props.weather.state) {
    return (
      <div>
        <div className={style.wrapper}>
          <span className={style.title}>
            Страна: {props.weather.state.data.location.country}
          </span>
          <span className={style.title}>
            Город: {props.weather.state.data.location.region}
          </span>
          <span className={style.title}>
            Время: {props.weather.state.data.current.observation_time}
          </span>
          <span className={style.title}>
            Местное время: {props.weather.state.data.location.localtime}
          </span>
          <h1 className={style.titleDiscription}>Погода</h1>
          <span className={style.weather}>
            Температура: {props.weather.state.data.current.temperature}
          </span>
          <span className={style.weather}>
            Ощущается: {props.weather.state.data.current.feelslike}
          </span>
          <span className={style.weather}>
            Скорость ветра: {props.weather.state.data.current.wind_speed}
          </span>
          <span className={style.weather}>
            Направление ветра: {props.weather.state.data.current.wind_dir}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <Loader />{" "}
      </div>
    );
  }
};

export default News;
