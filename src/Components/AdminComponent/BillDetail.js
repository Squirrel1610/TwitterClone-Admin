import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import "moment/locale/vi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
const BillDetail = () => {
  const { chat } = useSelector((state) => state.info);

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    { field: "isGroupChat", headerName: "Group chat", width: 150 },
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
      field: "latestMessage",
      headerName: "Latest Message",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row?.latestMessage?.content}
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
            <Link to={"/chat/" + params.row._id}>
              <button className="productListEdit">View</button>
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
          rows={chat}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default BillDetail;
