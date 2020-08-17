import React, { useContext, useEffect, useState } from "react";
import {
  NameContext,
  UsernameContext,
  PostsContext,
  FollowersContexxt,
  FollowingContext,
} from "../contexts/MyContext";
import Middleware from "./Middleware";
import PostsTab from "../components/PostsTab";
import VideosTab from "../components/VideosTab";
import SavedTab from "../components/SavedTab";

const Profile = () => {
  const [name] = useContext(NameContext);
  const [username] = useContext(UsernameContext);
  const [posts] = useContext(PostsContext);
  const [followers] = useContext(FollowersContexxt);
  const [following] = useContext(FollowingContext);
  // Tab
  const [postsTab, setPostsTab] = useState(true);
  const [videosTab, setVideosTab] = useState(false);
  const [savedTab, setSavedTab] = useState(false);
  useEffect(() => {
    document.title = "Profile";
  });

  const toPost = () => {
    setPostsTab(true);
    setVideosTab(false);
    setSavedTab(false);
  };
  const toVideos = () => {
    setPostsTab(false);
    setVideosTab(true);
    setSavedTab(false);
  };
  const toSaved = () => {
    setPostsTab(false);
    setVideosTab(false);
    setSavedTab(true);
  };
  return (
    // <Middleware>
    <div className="container py-3">
      <div className="row justify-content-between justify-content-md-center">
        <div className="col-md-2 mr-5">
          <img
            src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/64991096_350082912348586_6371558304006537216_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110&_nc_ohc=tzRbeYk4EAQAX_tkvwb&oh=ec54e260132cb5217356f613a7c64be6&oe=5F63C0EC"
            alt="Profile"
            className="rounded-circle"
            style={{ height: "10rem" }}
          />
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center">
            <h2 className="font-weight-light">{username}</h2>
            <div>
              <button className="btn btn-sm btn-outline-secondary mx-2">
                Edit Profile
              </button>
            </div>
            {/* <div> */}
            <span className="material-icons pb-1">settings</span>
            {/* </div> */}
          </div>
          <div className="d-flex my-2">
            <div className="mr-3">
              <span className="font-weight-bold">{posts}</span> Posts
            </div>
            <div className="mr-3">
              <span className="font-weight-bold">{followers}</span> Followers
            </div>
            <div className="mr-3">
              <span className="font-weight-bold">{following}</span> Following
            </div>
          </div>
          <div>
            <p className="font-weight-bold m-0">{name}</p>
            <p className="m-0">Manusia Bumi</p>
            <a href="https://github.com/sysafarila">
              https://github.com/sysafarila
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <h5
          className={postsTab ? "border-bottom border-primary mx-3" : "mx-3"}
          onClick={toPost}
          style={{ cursor: "pointer" }}
        >
          Posts
        </h5>
        <h5
          className={videosTab ? "border-bottom border-primary mx-3" : "mx-3"}
          onClick={toVideos}
          style={{ cursor: "pointer" }}
        >
          Video
        </h5>
        <h5
          className={savedTab ? "border-bottom border-primary mx-3" : "mx-3"}
          onClick={toSaved}
          style={{ cursor: "pointer" }}
        >
          Saved
        </h5>
      </div>
      {postsTab ? <PostsTab /> : ""}
      {videosTab ? <VideosTab /> : ""}
      {savedTab ? <SavedTab /> : ""}
    </div>
    // </Middleware>
  );
};

export default Profile;
