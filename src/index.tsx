import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faChevronDown, faTimes, faPenFancy, faPlus, faClipboard, faCheck, faQuestionCircle, faShieldAlt, faCog, faChevronUp, faTrashAlt, faUserFriends, faHome, faChalkboardTeacher, faSearch, faTasks, faChartLine, faChartPie, faArrowUp, faArrowDown, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faChevronDown, faTimes, faPenFancy, faPlus, faClipboard, faCheck, faQuestionCircle, faShieldAlt, faCog, faChevronUp, faTrashAlt, faUserFriends, faHome, faChalkboardTeacher, faSearch, faTasks, faChartLine, faChartPie, faArrowUp, faArrowDown, faBell)


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
