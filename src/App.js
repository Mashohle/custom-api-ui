import React, { useEffect } from "react";
import { themeChange } from 'theme-change'

// Redux
import { useSelector, useDispatch } from "react-redux";
import { activeUser } from "./store/auth/auth-actions";

// routes
import Router from "./routes";

const App = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


  useEffect(() => {
    themeChange(false)
    // dispatch(activeUser());
  }, [dispatch])

  if (isAuthenticated) {
    // Populate the store
  }

  return (
    <Router isAuthenticated={isAuthenticated} />
  )
}

export default App
