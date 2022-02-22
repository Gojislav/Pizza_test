import React, { Suspense } from "react";
import Home from "./containers/Home";

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Home />
    </Suspense>
  );
};

export default App;
