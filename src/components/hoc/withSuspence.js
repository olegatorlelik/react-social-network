import React, { Suspense } from "react";
export const WithSuspence = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};
