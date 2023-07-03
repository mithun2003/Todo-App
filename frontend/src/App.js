import './App.css';

import TodoApp from './screens/TodoApp';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginUser from './screens/LoginUser';
import SignupUser from './screens/SignupUser';
import LogoutUser from './components/LogoutUser';
import PublicRoute from './utils/PublicRoute';
import ProtectedRoute from './utils/ProtectedRoute';
function App() {
  console.log(process.env);
  return (
    <Router>
          <Routes>
 
            <Route element={<PublicRoute />}>
                  <Route exact path='/user/login' element={<LoginUser />} />
                  <Route exact path='/user/signup' element={<SignupUser />} /> 
            </Route>
            <Route element={<ProtectedRoute />}>
            <Route exact path='/' element={<TodoApp />} />
              <Route exact path='/user/logout' element={<LogoutUser />} />
            </Route>
              {/* <Route exaczt path='/trash' element={<TrashTodo />} />
              
            {/* <TodoApp/> */}
            {/* <TrashTodo/> */}
          </Routes>
    </Router>
  );
}

export default App;
