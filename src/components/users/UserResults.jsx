import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
//import { useEffect } from "react";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  // eslint-disable-next-line
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }

  // return !loading ? (
  //   <div className='grid grid-cols-8 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
  //     {users.map((user) => {
  //       return <h3>{user.login}</h3>;
  //     })}
  //   </div>
  // ) : (
  //   <h3>Loading...</h3>
  // );
}

export default UserResults;
