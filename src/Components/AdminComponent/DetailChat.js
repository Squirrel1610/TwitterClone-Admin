import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Follow } from "../../Imports/Index";
import { getDetailChatInitiate } from "../../redux/Action/ActionInfoAllUser";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";

const initialState = {
  firstName: "",
  username: "",
  lastName: "",
  email: "",
  admin: "",
};
const DetailChat = () => {
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [user, setUser] = useState(initialState);
  const { allUsers, token } = useSelector((state) => state.authAdmin);
  const { detailChat } = useSelector((state) => state.info);
  const [dataFollow, setDataFollow] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDetailChatInitiate(id, token.accessToken));
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
    setDataFollow(detailChat.users);
  };

  console.log(detailChat, "chatt");
  return (
    <>
      <UserListStyle />
      <div className="newUser">
        <h1 className="newUserTitle">View Chat</h1>
        <form>
          <div className="newUserItem">
            <label htmlFor="username">ID</label>
            <input
              type="text"
              placeholder="john"
              name="firstName"
              value={detailChat._id}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="username">Is Group Chat</label>
            <input
              type="text"
              placeholder="john"
              name="lastName"
              value={detailChat.isGroupChat}
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
              value={moment(`${detailChat.createdAt}`).format("Do MMM YYYY")}
              disabled
            />
          </div>
          <button className="newUserButton" onClick={handleViewFollowing}>
            Get users list in this group chat
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

export default DetailChat;
