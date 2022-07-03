import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailMessageInitiate } from "../../redux/Action/ActionInfoAllUser";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
const Payments = () => {
  const { message } = useSelector((state) => state.info);
  const { token } = useSelector((state) => state.authAdmin);

  const dispatch = useDispatch();

  console.log(message, "msgg");

  const handleSetData = (data) => {
    dispatch(getDetailMessageInitiate(data?._id, token.accessToken));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    { field: "content", headerName: "Content", width: 350 },
    {
      field: "sender",
      headerName: "Username",
      width: 250,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.sender.username}</div>;
      },
    },
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
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/message/" + params.row._id}>
              <button
                className="productListEdit"
                onClick={() => handleSetData(params.row)}
              >
                View
              </button>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <>
      <ProductStyle />
      <div className="productList">
        <DataGrid
          getRowId={(r) => r._id}
          rows={message}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Payments;
