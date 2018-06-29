import React from "react";
import value from "./value";
//functional components without react-dom or RN primitive components
//are sharable among web and native, leaving actual rendering to
//the respective platform
export default ({ children }) => children({ value, c: 1 });
