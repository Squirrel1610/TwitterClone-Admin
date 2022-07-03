import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllUserInitiate } from "../redux/Action/ActionAdmin";
const AdminApi = (Token, callback) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Token) {
      dispatch(GetAllUserInitiate({ token: Token }));
    }
  }, [Token, callback]);
  return {
    call: [call, setCall],
  };
};

export default AdminApi;
