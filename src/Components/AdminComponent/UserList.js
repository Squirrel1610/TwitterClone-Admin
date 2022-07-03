import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import "moment/locale/vi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserLists } from "../../Styles/StylePages/Admin/UserLists";

const UserList = () => {
  const { allUsers } = useSelector((state) => state.authAdmin);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "hoten",
      headerName: "Full Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.profilePic || img}
              alt=""
            />
            {params.row.firstName + " " + params.row.lastName}
          </div>
        );
      },
    },
    {
      field: "username",
      headerName: "UserName",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 250 },

    {
      field: "createdAt",
      headerName: "Date Create",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {moment(`${params.row.createdAt}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Date UpdateAt",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {moment(`${params.row.updatedAt}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/newUser/" + params.row._id}>
              <button className="userView">
                <i className="fa fa-eye" style={{ cursor: "pointer" }} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <>
      <UserLists />
      <div className="userList">
        <DataGrid
          getRowId={(r) => r._id}
          rows={allUsers}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default UserList;
