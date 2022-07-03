import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAccountNewInitiate,
  GetProfileAdminInitiate,
  InfoAdminInitiate,
  RefreshTokenInitiate,
} from "../redux/Action/ActionAdmin";
import { ProductApi, AdminApi, InfoAllUserApi } from "../Imports/Index";
import {
  GetAccountMuchInitiate,
  getChatInitiate,
  GetListPostUserWeekInitiate,
  getMessageInitiate,
} from "../redux/Action/ActionInfoAllUser";
import {
  CompareMothBeforeInitiate,
  CompareMothTotalCancelBeforeInitiate,
  CompareMothTotalNotReceivedBeforeInitiate,
  ProductTotalCancelInitiate,
  ProductTotalInitiate,
  ProductTotalMothInitiate,
  ProductTotalNotReceivedInitiate,
  VoucherAllInitiate,
} from "../redux/Action/ActionProduct";
export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const { Admin, token } = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        dispatch(RefreshTokenInitiate({ tokenAdmin: Admin.accessToken }));
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, [callback]);
  var Token = token?.accessToken;
  useEffect(() => {
    if (token?.accessToken) {
      dispatch(GetAccountNewInitiate({ token: token.accessToken }));
      dispatch(ProductTotalMothInitiate({ token: token.accessToken }));
      dispatch(ProductTotalInitiate({ token: token.accessToken }));
      dispatch(GetProfileAdminInitiate({ token: token.accessToken }));
      dispatch(getMessageInitiate({ token: token.accessToken }));
      dispatch(getChatInitiate({ token: token.accessToken }));
      dispatch(GetListPostUserWeekInitiate({ token: token.accessToken }));
    }
  }, [token.accessToken, callback]);
  const data = {
    callback: [callback, setCallback],
    AdminApi: AdminApi(Token, callback),
    // ProductApi: ProductApi(callback),
    // InfoAllUserApi: InfoAllUserApi(Token, callback),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
