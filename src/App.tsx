import React, {useEffect} from 'react';
import Router from './Router';
import {useDispatch} from "react-redux";
import {loadUser} from "./store/actions/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
      <Router />
  );
}

export default App;
