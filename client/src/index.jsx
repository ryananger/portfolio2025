import React from "react";
import {createRoot} from "react-dom/client";
import st from 'ryscott-st';

import App from './components/App.jsx';

const root = createRoot(document.getElementById("root"));

root.render(<App />);
