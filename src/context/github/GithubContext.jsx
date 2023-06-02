import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // // Clear users from state
  // const clearUsers = () =>
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });

  // // Set Loading
  // const setLoading = () =>
  //   dispatch({
  //     type: "SET_LOADING",
  //     loading: true,
  //   });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
