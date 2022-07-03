import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPaymentInitiate,
  GetAllInfoAppInitiate,
} from "../redux/Action/ActionInfoAllUser";

const InfoAllUserApi = (Token, callback) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (Token) {
  //     // dispatch(GetAllPaymentInitiate());
  //     dispatch(GetAllInfoAppInitiate({ token: Token }));
  //   }
  // }, [Token, callback]);

  return {};
};

export default InfoAllUserApi;
