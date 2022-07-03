import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Follow } from "../../Imports/Index";
import { getDetailMessageInitiate } from "../../redux/Action/ActionInfoAllUser";
import { FollowStyle } from "../../Styles/StylePages/Admin/FollowStyle";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";

const initialState = {
  firstName: "",
  username: "",
  lastName: "",
  email: "",
  admin: "",
};
const DetailMessage = () => {
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [user, setUser] = useState(initialState);
  const { allUsers, token } = useSelector((state) => state.authAdmin);
  const { detailMessage } = useSelector((state) => state.info);
  const [dataFollow, setDataFollow] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDetailMessageInitiate(id, token.accessToken));
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
    setDataFollow(detailMessage.readBy);
  };

  console.log(detailMessage, "chatt");
  return (
    <>
      <UserListStyle />
      <FollowStyle />
      {detailMessage && (
        <div className="newUser">
          <h1 className="newUserTitle">View Message</h1>
          <form>
            <div className="newUserItem">
              <label htmlFor="username">ID</label>
              <input
                type="text"
                placeholder="john"
                name="firstName"
                value={detailMessage?._id}
                disabled
              />
            </div>
            <div className="newUserItem">
              <label htmlFor="username">Content</label>
              <input
                type="text"
                placeholder="john"
                name="lastName"
                value={detailMessage?.content}
                disabled
              />
            </div>
            <div className="newUserItem">
              <label htmlFor="hoten">Created At</label>
              <input
                type="text"
                placeholder="John Smith"
                id="firstName"
                name="hoten"
                value={moment(`${detailMessage?.createdAt}`).format(
                  "Do MMM YYYY"
                )}
                disabled
              />
            </div>
            <div className="newUserItem">
              <label>
                Message from: &nbsp;
                <Link to={"/chat/" + detailMessage?.chat}>
                  {detailMessage?.chat}
                </Link>
              </label>
            </div>
            <div className="newUserItem">
              <label>
                Send by: &nbsp;
                <Link
                  to={"/newUser/" + detailMessage?.sender?._id}
                  className="user"
                >
                  <img
                    src={detailMessage?.sender?.profilePic || img}
                    alt="avatar"
                    className="user_img"
                    style={{ borderRadius: "50%" }}
                  />
                  {detailMessage?.sender?.username}
                </Link>
              </label>
            </div>
            <button className="newUserButton" onClick={handleViewFollowing}>
              Get list users viewed message
            </button>
          </form>
        </div>
      )}
      {isOpenModal && (
        <div>
          <Follow setIsOpenModal={setIsOpenModal} dataFollow={dataFollow} />
        </div>
      )}
    </>
  );
};

export default DetailMessage;
