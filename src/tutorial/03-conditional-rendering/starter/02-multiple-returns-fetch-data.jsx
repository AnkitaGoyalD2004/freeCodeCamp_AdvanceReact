import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user = await resp.json();
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <h2>There was an Error</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      ></img>
      <h2>{user.name}</h2>
      <h4>Works At {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;

// Data Fetching
// --> in this we usually have three options
// loading --> waiting for data to arrive (display loading state)
//error --> there was an error (display error message)
// success --> recieved data(display data)


// donot place the hook inside of the if condition and also be careful if you have multiple returns basically 
//if you have jsx returned based on some condition donot place useeffect after them make 
