import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/MyContext";
import { Redirect } from "react-router-dom";

const Profile = () => {
  const [auth] = useContext(AuthContext);
  useEffect(() => {
    document.title = "Profile";
  });
  if (auth === true) {
    return (
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
              <h2 className="font-weight-light">sysafarila</h2>
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
                <span className="font-weight-bold">52</span> Posts
              </div>
              <div className="mr-3">
                <span className="font-weight-bold">525</span> Followers
              </div>
              <div className="mr-3">
                <span className="font-weight-bold">5</span> Following
              </div>
            </div>
            <div>
              <p className="font-weight-bold m-0">Syahrul Safarila</p>
              <p className="m-0">Manusia Bumi</p>
              <a href="https://github.com/sysafarila">
                https://github.com/sysafarila
              </a>
            </div>
          </div>
        </div>
        <hr />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        adipisci accusamus quidem ad quos ea error, dolor eos. Fuga obcaecati
        repellat soluta dolorum quam ratione molestias provident sequi aut quia.
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default Profile;
