import { Close, Person } from "@material-ui/icons";
import { motion } from "framer-motion/dist/es/index";
import { Link } from "react-router-dom";
import { FollowStyle } from "../../Styles/StylePages/Admin/FollowStyle";

const Follow = ({ setIsOpenModal, dataFollow, isOnScreen = false }) => {
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <FollowStyle />
      <div className="follow-backdrop" style={{ height: "auto" }}></div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="follow-container"
        style={isOnScreen && { top: "6vw" }}
      >
        <div className="heading">
          <Person />
          <span>{dataFollow.length}</span>
          <div className="cancel-btn " onClick={handleCloseModal}>
            <Close />
          </div>
        </div>
        <div className="users">
          {dataFollow.length > 0 &&
            dataFollow.map((item, index) => (
              <Link to={"/newUser/" + item._id} className="user" key={index}>
                <div className="user_img">
                  <img src={item.profilePic} alt="avatar" />
                </div>
                <div className="username">{item.username}</div>
              </Link>
            ))}
        </div>
      </motion.div>
    </>
  );
};

export default Follow;
