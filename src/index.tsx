import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import "./firebase/firebase.config"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faSquareRootAlt, faFlask, faEllipsisV, faUser, faArrowRight, faTimesCircle, faCheckCircle, faLaptopCode, faDatabase, faCoffee, faChevronDown, faTimes, faPenFancy, faPlus, faClipboard, faCheck, faQuestionCircle, faShieldAlt, faCog, faChevronUp, faTrashAlt, faUserFriends, faHome, faChalkboardTeacher, faSearch, faTasks, faChartLine, faChartPie, faArrowUp, faArrowDown, faBell } from '@fortawesome/free-solid-svg-icons'
import { AuthProvider } from './context/Auth';
library.add(faSquareRootAlt, faFlask, faEllipsisV, faUser, faArrowRight, faTimesCircle, faCheckCircle, faLaptopCode, faDatabase, faCoffee, faTwitter, faFacebook, faGithub, faChevronDown, faTimes, faPenFancy, faPlus, faClipboard, faCheck, faQuestionCircle, faShieldAlt, faCog, faChevronUp, faTrashAlt, faUserFriends, faHome, faChalkboardTeacher, faSearch, faTasks, faChartLine, faChartPie, faArrowUp, faArrowDown, faBell)


ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

