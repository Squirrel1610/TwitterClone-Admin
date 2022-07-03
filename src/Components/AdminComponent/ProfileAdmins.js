import { PermIdentity } from "@material-ui/icons";
import axios from "axios";
import "moment/locale/vi";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { UserStyle } from "../../Styles/StylePages/Admin/UserStyle";
const initialState = {
  firstName: "",
  lastName: "",
};
const ProfileAdmins = () => {
  const { Admin, allUsers, token } = useSelector((state) => state.authAdmin);
  const state = useContext(GlobalState);
  const [images, setImages] = useState(null);
  const [onEdit, setOnEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const [callback, setCallback] = state.callback;
  console.log(Admin);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
  useEffect(() => {
    if (Admin) {
      setUser({ ...Admin });
      if (Admin.url === "") {
        setImages(Admin.url);
      } else {
        setImages(Admin);
      }
    }
  }, [Admin, allUsers]);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      if (file.size > 1024 * 1024)
        // 1mb
        return swal("Size too large!", {
          icon: "error",
        });
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return swal("File format is incorrect.", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      await axios
        .post(`/api/admin/user/upload/profilePicture`, formData, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `${token.accessToken}`,
          },
        })
        .then((item) => {
          setImages(item?.data?.url);
        })
        .catch((err) => {
          console.log(err);
        });
      setCallback(!callback);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .patch(
          "/api/admin/user/profile",
          { ...user },
          {
            headers: {
              Authorization: `${token.accessToken}`,
            },
          }
        )
        .then((item) => {
          console.log(item);
        })
        .catch((error) => {
          console.log(error);
        });

      setCallback(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <>
      <UserStyle />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">{`Profile Admin: ${Admin.lastName} ${Admin.firstName}`}</h1>
          <Link to={`/changePassword/${Admin.id}`}>
            <button className="userAddButton">Change Password</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={`${process.env.REACT_APP_PICTURE}${
                  Admin.profilePic || img
                }`}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {`${Admin.lastName}  ${Admin.firstName} (Admin)`}
                </span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{Admin.username}</span>
              </div>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{`${Admin.lastName}  ${Admin.firstName}`}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit Admin</span>
            <form className="userUpdateForm" onSubmit={handleSubmit}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder=""
                    name="username"
                    value={user.username}
                    className="userUpdateInput"
                    disabled
                  />
                </div>
                <div className="userUpdateItem">
                  <label>firstName</label>
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    disabled
                  />
                </div>
                <br />
                <br />
                <div className="userUpdateRight">
                  <button className="userUpdateButton">Change Admin</button>
                </div>
              </div>

              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <div className="upload">
                    <div id="file_img">
                      {images == null ? (
                        <img src={images || img} alt="" />
                      ) : (
                        <img
                          src={`${process.env.REACT_APP_PICTURE}${Admin.profilePic}`}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
                <input
                  type="file"
                  name="file"
                  id="file_up"
                  onChange={handleUpload}
                />
                <button className="userUpdateButton">
                  <input type="file" name="file" onChange={handleUpload} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAdmins;
