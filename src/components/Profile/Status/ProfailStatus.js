import React, { useEffect, useState } from "react";
import style from "./Status.module.css";
const ProfailStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activedEditMode = () => {
    setEditMode(true);
  };

  const deactivedAditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChenge = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <div>
        <div>
          <div className={style.info}>
            {!editMode ? (
              <div className={style.itemsStatus}>
                {
                  <span
                    onDoubleClick={activedEditMode}
                    className={style.statusUser}
                  >
                    {props.status +
                      " " +
                      "Здесь должен был быть статус но что то пошло не так"}
                  </span>
                }
              </div>
            ) : (
              <input
                autoFocus={true}
                placeholder="Обновить статус"
                onBlur={deactivedAditMode}
                onChange={(e) => onStatusChenge(e)}
                value={status}
              />
            )}
            <span className={style.discriptionUser}>
              <span className={style.infoUser}>Имя:</span> {props.fullName}
            </span>
            <span className={style.discriptionUser}>
              <span className={style.infoUser}>Индификационный номер:</span>
              {props.id}
            </span>
            <span className={style.discriptionUser}>
              <span className={style.infoUser}>Возраст:</span>{" "}
              {Math.round(Math.random() * (50 - 20) + 0)}
            </span>
            <span className={style.discriptionUser}>
              <span className={style.infoUser}>Город:</span> Минск
            </span>
            <span className={style.discriptionUser}>
              <span className={style.infoUser}>Телефон:</span> +37529999999{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfailStatusWithHooks;
