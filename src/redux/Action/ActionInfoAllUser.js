import axios from "axios";
import * as types from "../ActionTypes";
//?get All Payment
export const GetAllPaymentStart = () => ({
  type: types.GET_ALL_PAYMENT_START,
});
export const GetAllPaymentSuccess = (token) => ({
  type: types.GET_ALL_PAYMENT_SUCCESS,
  payload: token,
});
export const GetAllPaymentFail = (error) => ({
  type: types.GET_ALL_PAYMENT_FAIL,
  payload: error,
});
//?get all Bill
export const GetAllBillStart = () => ({
  type: types.GET_ALL_BILL_START,
});
export const GetAllBillSuccess = (token) => ({
  type: types.GET_ALL_BILL_SUCCESS,
  payload: token,
});
export const GetAllBillFail = (error) => ({
  type: types.GET_ALL_BILL_FAIL,
  payload: error,
});
//? get all following
export const GetFollowingStart = () => ({
  type: types.GET_FOLLOWING_START,
});
export const GetFollowingSuccess = (data) => ({
  type: types.GET_FOLLOWING_SUCCESS,
  payload: data,
});
export const GetFollowingFail = (err) => ({
  type: types.GET_FOLLOWING_FAIL,
  payload: err,
});

//? get all Follower
export const GetFollowerStart = () => ({
  type: types.GET_FOLLOWER_START,
});
export const GetFollowerSuccess = (data) => ({
  type: types.GET_FOLLOWER_SUCCESS,
  payload: data,
});
export const GetFollowerFail = (err) => ({
  type: types.GET_FOLLOWER_FAIL,
  payload: err,
});
//?get all rating
export const GetAllRatingStart = () => ({
  type: types.GET_ALL_RATING_START,
});
export const GetAllRatingSuccess = (token) => ({
  type: types.GET_ALL_RATING_SUCCESS,
  payload: token,
});
export const GetAllRatingFail = (error) => ({
  type: types.GET_ALL_RATING_FAIL,
  payload: error,
});
//?get all info app
export const GetAllInfoStart = () => ({
  type: types.GET_ALL_APP_INFO_START,
});
export const GetAllInfoSuccess = (token) => ({
  type: types.GET_ALL_APP_INFO_SUCCESS,
  payload: token,
});
export const GetAllInfoFail = (error) => ({
  type: types.GET_ALL_APP_INFO_FAIL,
  payload: error,
});
//?get all bill Detail
export const GetAllBillDetailStart = () => ({
  type: types.GET_ALL_BILL_DETAIL_START,
});
export const GetAllBillDetailSuccess = (token) => ({
  type: types.GET_ALL_BILL_DETAIL_SUCCESS,
  payload: token,
});
export const GetAllBillDetailFail = (error) => ({
  type: types.GET_ALL_BILL_DETAIL_FAIL,
  payload: error,
});
//?customers buy the most
export const GetAccountMuchStart = () => ({
  type: types.GET_ACCOUNT_BUY_MUCH_START,
});
export const GetAccountMuchSuccess = (token) => ({
  type: types.GET_ACCOUNT_BUY_MUCH_SUCCESS,
  payload: token,
});
export const GetAccountMuchFail = (error) => ({
  type: types.GET_ACCOUNT_BUY_MUCH_FAIL,
  payload: error,
});

//? GET ONLY TWEET
export const getOnlyTweetStart = () => ({
  type: types.GET_ONLY_TWEET_START,
});
export const getOnlyTweetSuccess = (data) => ({
  type: types.GET_ONLY_TWEET_SUCCESS,
  payload: data,
});
export const getOnlyTweetFail = (err) => ({
  type: types.GET_ONLY_TWEET_FAIL,
  payload: err,
});

//? get reply
export const GetReplyStart = () => ({
  type: types.GET_REPLY_START,
});
export const GetReplySuccess = (data) => ({
  type: types.GET_REPLY_SUCCESS,
  payload: data,
});
export const GetReplyFail = (err) => ({
  type: types.GET_REPLY_FAIL,
  payload: err,
});

//? get retweet
export const GetRetweetStart = () => ({
  type: types.GET_RETWEET_START,
});
export const GetRetweetSuccess = (data) => ({
  type: types.GET_RETWEET_SUCCESS,
  payload: data,
});
export const GetRetweetFail = (err) => ({
  type: types.GET_RETWEET_FAIL,
  payload: err,
});

//? get detail tweet
export const GetDetailTweetStart = () => ({
  type: types.GET_DETAIL_TWEET_START,
});
export const GetDetailTweetSuccess = (data) => ({
  type: types.GET_DETAIL_TWEET_SUCESS,
  payload: data,
});
export const GetDetailTweetFail = (err) => ({
  type: types.GET_DETAIL_TWEET_FAIL,
  payload: err,
});

//? get chat
export const GetChatStart = () => ({
  type: types.GET_CHAT_START,
});
export const GetChatSuccess = (data) => ({
  type: types.GET_CHAT_SUCCESS,
  payload: data,
});
export const GetChatFail = (err) => ({
  type: types.GET_CHAT_FAIL,
  payload: err,
});

//? get detail chat
export const GetDetailChatStart = () => ({
  type: types.GET_DETAIL_CHAT_START,
});
export const GetDetailChatSuccess = (data) => ({
  type: types.GET_DETAIL_CHAT_SUCCESS,
  payload: data,
});
export const GetDetailChatFail = (err) => ({
  type: types.GET_DETAIL_CHAT_FAIL,
  payload: err,
});

//? get Message
export const GetMessageStart = () => ({
  type: types.GET_MESSAGE_START,
});
export const GetMessageSuccess = (data) => ({
  type: types.GET_MESSAGE_SUCCESS,
  payload: data,
});
export const GetMessageFail = (err) => ({
  type: types.GET_MESSAGE_FAIL,
  payload: err,
});

//? get detail Message
export const GetDetailMessageStart = () => ({
  type: types.GET_DETAIL_MESSAGE_START,
});
export const GetDetailMessageSuccess = (data) => ({
  type: types.GET_DETAIL_MESSAGE_SUCCESS,
  payload: data,
});
export const GetDetailMessageFail = (err) => ({
  type: types.GET_DETAIL_MESSAGE_FAIL,
  payload: err,
});
//? GET_LIST_POST_WEEK_ADMIN_
export const GetListPostUserWeekStart = () => ({
  type: types.GET_LIST_POST_WEEK_ADMIN_START,
});
export const GetListPostUserWeekSuccess = (data) => ({
  type: types.GET_LIST_POST_WEEK_ADMIN_SUCCESS,
  payload: data,
});
export const GetListPostUserWeekFail = (err) => ({
  type: types.GET_LIST_POST_WEEK_ADMIN_FAIL,
  payload: err,
});

//! Get All Payment
export const GetAllPaymentInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllPaymentStart());
    await axios
      .get(`/payment`)
      .then((product) => {
        dispatch(GetAllPaymentSuccess(product.data));
      })
      .catch((error) => {
        dispatch(GetAllPaymentFail(error.data));
      });
  };
};

//! Get All Bill
export const GetAllBillInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllBillStart());
    await axios
      .get(`/bill/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAllBillSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllBillFail(error.data));
      });
  };
};
//! Get All Following
export const GetFollowingInitiate = (token, id) => async (dispatch) => {
  dispatch(GetFollowingStart());
  await axios
    .get(`/api/admin/user/${id}/followingList`, {
      headers: { Authorization: token },
    })
    .then((following) => {
      dispatch(GetFollowingSuccess(following.data));
    })
    .catch((error) => {
      dispatch(GetFollowingFail(error.data));
    });
};
//! Get All Follower
export const GetFollowerInitiate = (token, id) => async (dispatch) => {
  dispatch(GetFollowerStart());
  await axios
    .get(`/api/admin/user/${id}/followersList`, {
      headers: { Authorization: token },
    })
    .then((following) => {
      dispatch(GetFollowerSuccess(following.data));
    })
    .catch((error) => {
      dispatch(GetFollowerFail(error.data));
    });
};
//! Get All rating
export const GetAllRatingInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllRatingStart());
    await axios
      .get(`/rating/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAllRatingSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllRatingFail(error.data));
      });
  };
};
//! Get all info app
export const GetAllInfoAppInitiate = ({ token }) => {
  return async function (dispatch) {
    dispatch(GetAllInfoStart());
    await axios
      .get(`/api/admin/user/getAllCustomer`, {
        headers: { Authorization: `${token}` },
      })
      .then((category) => {
        dispatch(GetAllInfoSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllInfoFail(error.data));
      });
  };
};
//! Get all Bill Detail
export const GetAllBillDetailInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllBillDetailStart());
    await axios
      .get(`/billDetail/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAllBillDetailSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllRatingFail(error.data));
      });
  };
};
//!Customers buy the most
export const GetAccountMuchInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAccountMuchStart());
    await axios
      .get(`/bill/sortTransaction`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAccountMuchSuccess(category.data.data));
      })
      .catch((error) => {
        dispatch(GetAccountMuchFail(error.data));
      });
  };
};

//! Get only tweet post
export const GetOnlyTweetInitiate = (token) => async (dispatch) => {
  dispatch(getOnlyTweetStart);
  await axios
    .get("/api/admin/post/getAll", {
      headers: { Authorization: token },
    })
    .then((data) => {
      dispatch(getOnlyTweetSuccess(data.data));
    })
    .catch((err) => {
      dispatch(getOnlyTweetFail(err));
    });
};

//! Get replies
export const getRepliesInitiate = (token) => async (dispatch) => {
  dispatch(GetReplyStart());
  await axios
    .get("api/admin/post/replyTo/get", {
      headers: { Authorization: token },
    })
    .then((data) => {
      dispatch(GetReplySuccess(data.data));
    })
    .catch((err) => {
      dispatch(GetReplyFail(err));
    });
};

//! Get retweet
export const getRetweetInitiate = (token) => async (dispatch) => {
  dispatch(GetRetweetStart());
  await axios
    .get("/api/admin/post/retweetData/get", {
      headers: { Authorization: token },
    })
    .then((data) => {
      dispatch(GetRetweetSuccess(data.data));
    })
    .catch((err) => {
      dispatch(GetRetweetFail(err));
    });
};

//! Get detail tweet
export const getDetailTweetInitiate = (token, id) => async (dispatch) => {
  dispatch(GetDetailTweetStart());
  await axios
    .get(`/api/admin/post/${id}/info`, {
      headers: { Authorization: token },
    })
    .then((data) => {
      dispatch(GetDetailTweetSuccess(data.data));
    })
    .catch((err) => {
      dispatch(GetDetailTweetFail(err));
    });
};

//! Get chat
export const getChatInitiate =
  ({ token }) =>
  async (dispatch) => {
    dispatch(GetChatStart());
    await axios
      .get("/api/admin/chat/getAll", {
        headers: { Authorization: token },
      })
      .then((data) => {
        dispatch(GetChatSuccess(data.data));
      })
      .catch((error) => {
        dispatch(GetChatFail(error));
      });
  };

//! Get detail chat
export const getDetailChatInitiate = (id, token) => async (dispatch) => {
  dispatch(GetDetailChatStart());
  await axios
    .get(`/api/admin/chat/${id}/info`, {
      headers: { Authorization: token },
    })
    .then((data) => {
      dispatch(GetDetailChatSuccess(data.data));
    })
    .catch((err) => {
      dispatch(GetDetailChatFail(err));
    });
};

//! Get message
export const getMessageInitiate =
  ({ token }) =>
  async (dispatch) => {
    dispatch(GetMessageStart());
    await axios
      .get("/api/admin/message/getAll", {
        headers: { Authorization: token },
      })
      .then((data) => {
        dispatch(GetMessageSuccess(data.data));
      })
      .catch((error) => {
        dispatch(GetMessageFail(error));
      });
  };

//! Get Detail Message
export const getDetailMessageInitiate = (id, token) => async (dispatch) => {
  dispatch(GetDetailMessageStart());
  await axios
    .get(`/api/admin/message/${id}/info`, {
      headers: { Authorization: token },
    })
    .then((data) => {
      dispatch(GetDetailMessageSuccess(data.data));
    })
    .catch((err) => {
      dispatch(GetDetailMessageFail(err));
    });
};
//! Get Detail Message
export const GetListPostUserWeekInitiate =
  ({ token }) =>
  async (dispatch) => {
    dispatch(GetListPostUserWeekStart());
    await axios
      .get(`/api/admin/statistics/listTotalPostsOfEachUserInAWeek`, {
        headers: { Authorization: token },
      })
      .then((data) => {
        dispatch(GetListPostUserWeekSuccess(data.data));
      })
      .catch((err) => {
        dispatch(GetListPostUserWeekFail(err));
      });
  };
