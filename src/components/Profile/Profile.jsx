import React from "react";
import MyPostsConteiner from "./MyPost/MyPostsConteiner";
import ProfailInfo from "./ProfailInfo/ProfailInfo";

const Profail = (props) => {
  console.log(props);
  return (
    <div>
      <ProfailInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateUserStatus}
      />
      <MyPostsConteiner />
    </div>
  );
};
export default Profail;
