import React from "react";
import style from "./FormControl.module.css";
export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={style.boxForm}>
      <textarea
        {...props}
        {...input}
        className={`${style.login} ${hasError ? style.error : " "}`}
      />
      <div>
        {meta.error && meta.touched && (
          <span className={style.errorText}>Заполни поле верно</span>
        )}
      </div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div>
      <input
        {...props}
        {...input}
        className={`${style.login} ${hasError ? style.error : " "}`}
      />
      <div>
        {meta.error && meta.touched && (
          <span className={style.errorText}>Заполни поле верно</span>
        )}
      </div>
    </div>
  );
};
