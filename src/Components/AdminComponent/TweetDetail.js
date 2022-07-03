import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailTweetInitiate } from "../../redux/Action/ActionInfoAllUser";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";
import Follow from "./Follow";

const initialState = {
  firstName: "",
  username: "",
  lastName: "",
  email: "",
  admin: "",
};
const TweetDetail = () => {
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [user, setUser] = useState(initialState);
  const { allUsers, token } = useSelector((state) => state.authAdmin);
  const { detailTweet } = useSelector((state) => state.info);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDetailTweetInitiate(token.accessToken, id));
      setOnEdit(true);
      allUsers.forEach((product) => {
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

  const handleSetLikes = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
    setDataModal(detailTweet?.likes);
  };

  const handleSetRetweet = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
    setDataModal(detailTweet?.retweetUsers);
  };
  return (
    <>
      <UserListStyle />
      <div className="newUser">
        <h1 className="newUserTitle">View Tweet</h1>
        <form>
          <div className="newUserItem">
            <label htmlFor="username">Content</label>
            <input
              type="text"
              placeholder="john"
              name="username"
              value={detailTweet?.content || detailTweet?.retweetData}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="username">Posted by</label>
            <input
              type="text"
              placeholder="john"
              name="lastName"
              value={detailTweet?.postedBy?.username}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="username">Retweet Data</label>
            <input
              type="text"
              placeholder=""
              name="retweetData"
              value={detailTweet?.retweetData}
              disabled
            />
          </div>
          <button className="newUserButton" onClick={handleSetLikes}>
            Likes List
          </button>
          <button className="newUserButton" onClick={handleSetRetweet}>
            Retweets List
          </button>
        </form>
      </div>
      {isOpenModal && (
        <div>
          <Follow setIsOpenModal={setIsOpenModal} dataFollow={dataModal} />
        </div>
      )}
    </>
  );
};

export default TweetDetail;
