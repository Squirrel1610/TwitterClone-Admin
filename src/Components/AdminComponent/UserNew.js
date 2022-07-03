import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Follow, LoadingImage } from "../../Imports/Index";
import {
  GetFollowerInitiate,
  GetFollowingInitiate,
} from "../../redux/Action/ActionInfoAllUser";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";

const initialState = {
  firstName: "",
  username: "",
  lastName: "",
  email: "",
  admin: "",
};
const UserNew = () => {
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const { allUsers, token } = useSelector((state) => state.authAdmin);
  const { following, follower } = useSelector((state) => state.info);
  const [dataFollow, setDataFollow] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(allUsers);
  useEffect(() => {
    if (id) {
      dispatch(GetFollowingInitiate(token.accessToken, id));
      dispatch(GetFollowerInitiate(token.accessToken, id));
      setOnEdit(true);
      allUsers?.forEach((product) => {
        if (product._id == id) {
          setUser(product);
          if (product.url === "") {
            setImages(product.url);
          } else {
            setImages(product);
          }
        }
      });
    } else {
      setOnEdit(false);
      setUser(initialState);
      setImages(false);
    }
    setIsOpenModal(false);
  }, [id, allUsers]);

  const handleViewFollowing = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
    setDataFollow(following);
  };

  const handleViewFollower = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
    setDataFollow(follower);
  };
  console.log(user);
  return (
    <>
      <UserListStyle />
      <div className="upload">
        <input type="file" name="file" id="file_up" />
        {loading ? (
          <div id="file_img">
            <LoadingImage />
          </div>
        ) : (
          <div id="file_img">
            <img
              src={`${process.env.REACT_APP_PICTURE}${user.profilePic}`}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="newUser">
        <h1 className="newUserTitle">View User</h1>
        <form>
          <div className="newUserItem">
            <label htmlFor="username">First Name</label>
            <input
              type="text"
              placeholder="john"
              name="firstName"
              value={user.firstName}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="username">Last Name</label>
            <input
              type="text"
              placeholder="john"
              name="lastName"
              value={user.lastName}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="hoten">User Name</label>
            <input
              type="text"
              placeholder="John Smith"
              id="firstName"
              name="hoten"
              value={user.username}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              name="email"
              id="email"
              value={user.email}
              disabled
            />
          </div>

          <button className="newUserButton" onClick={handleViewFollowing}>
            Following
          </button>
          <button className="newUserButton" onClick={handleViewFollower}>
            Follower
          </button>
        </form>
      </div>
      {isOpenModal && (
        <div>
          <Follow setIsOpenModal={setIsOpenModal} dataFollow={dataFollow} />
        </div>
      )}
    </>
  );
};

export default UserNew;
