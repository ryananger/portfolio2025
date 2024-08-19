import React from "react";
import {createRoot} from "react-dom/client";
import st from 'ryscott-st';

import App from './components/App.jsx';
import AppMobile from './components/AppMobile.jsx';

const isMobile = st.isMobile = window.innerHeight > window.innerWidth;

const root = createRoot(document.getElementById("root"));

if (isMobile) {
  root.render(<AppMobile/>);
} else {
  root.render(<App />);
}
