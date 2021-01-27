import React from "react";
import Loader from "../../Comand/Loader";
import classes from "./ProfailInfo.module.css";
import ProfailStatusWithHooks from "../Status/ProfailStatus";
import { arrImg } from "../../Util/Constans/Constans";
const ProfailInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  console.log(props);
  return (
    <div>
      <div className={classes.wrapper}>
        <div>
          <img
            src={arrImg[Math.round(Math.random() * (10 - 0) + 0)]}
            alt="ЧТО ТО ПОШЛО НЕ ТАК"
          />
        </div>
        <div>
          <ProfailStatusWithHooks
            fullName={props.profile.fullName}
            status={props.status}
            updateStatus={props.updateStatus}
            id={props.profile.userId}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfailInfo;
