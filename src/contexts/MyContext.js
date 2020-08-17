import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const NameContext = createContext();
export const UsernameContext = createContext();
export const PostsContext = createContext();
export const FollowersContexxt = createContext();
export const FollowingContext = createContext();

export const ContextProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("Syahrul Safarila");
  const [username, setUsername] = useState("sysafarila");
  const [posts, setPosts] = useState(50);
  const [followers, setFollowers] = useState("666K");
  const [following, setFollowing] = useState(2);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <NameContext.Provider value={[name, setName]}>
        <UsernameContext.Provider value={[username, setUsername]}>
          <PostsContext.Provider value={[posts, setPosts]}>
            <FollowersContexxt.Provider value={[followers, setFollowers]}>
              <FollowingContext.Provider value={[following, setFollowing]}>
                {props.children}
              </FollowingContext.Provider>
            </FollowersContexxt.Provider>
          </PostsContext.Provider>
        </UsernameContext.Provider>
      </NameContext.Provider>
    </AuthContext.Provider>
  );
};
