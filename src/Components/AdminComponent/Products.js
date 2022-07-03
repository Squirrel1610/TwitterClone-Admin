import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { GetOnlyTweetInitiate } from "../../redux/Action/ActionInfoAllUser";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";

const Products = () => {
  const { token } = useSelector((state) => state.authAdmin);
  const { onlyTweet } = useSelector((state) => state.info);
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOnlyTweetInitiate(token.accessToken));
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      return await swal({
        title: "Are you sure you want delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`/product/delete/${id}`, {
            headers: { Authorization: `Bearer ${token.accessToken}` },
          });
          setCallback(!callback);
          setLoading(false);
          swal("Delete successfully, wait Loading... 😉 !", {
            icon: "success",
          });
        } else {
          swal("Thank you for 😆'!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "content", headerName: "Content", width: 300 },
    {
      field: "postedBy",
      headerName: "Posted By",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.postedBy.profilePic}
              alt=""
            />
            {params.row.postedBy.username}
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 200,
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
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/tweetDetail/" + params.row._id}>
              <button className="productListEdit">
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
      <ProductStyle />
      <div className="productList">
        <Link to="/newproduct">
          <button className="userAddButton">Create</button>
        </Link>
        <DataGrid
          getRowId={(r) => r._id}
          rows={onlyTweet}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Products;
