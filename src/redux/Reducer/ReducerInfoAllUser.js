import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  payment: [],
  bill: [],
  rating: [],
  infoApp: [],
  billDetail: [],
  AccountBuyMuch: [],
  following: [],
  follower: [],
  onlyTweet: [],
  reply: [],
  retweet: [],
  detailTweet: [],
  chat: [],
  detailChat: [],
  message: [],
  detailMessage: [],
  usePostWeek: [],
};
const ReducerInfoAllUser = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PAYMENT_START:
    case types.GET_ALL_BILL_START:
    case types.GET_ALL_RATING_START:
    case types.GET_ALL_APP_INFO_START:
    case types.GET_ALL_BILL_DETAIL_START:
    case types.GET_ACCOUNT_BUY_MUCH_START:
    case types.GET_FOLLOWING_START:
    case types.GET_FOLLOWER_START:
    case types.GET_ONLY_TWEET_START:
    case types.GET_REPLY_START:
    case types.GET_RETWEET_START:
    case types.GET_DETAIL_TWEET_START:
    case types.GET_CHAT_START:
    case types.GET_DETAIL_CHAT_START:
    case types.GET_DETAIL_MESSAGE_START:
    case types.GET_MESSAGE_START:
    case types.GET_LIST_POST_WEEK_ADMIN_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ALL_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        payment: action.payload.data,
      };
    case types.GET_DETAIL_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        detailChat: action.payload.data,
      };
    case types.GET_DETAIL_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        detailMessage: action.payload.data,
      };
    case types.GET_DETAIL_TWEET_SUCESS:
      return {
        ...state,
        loading: false,
        detailTweet: action.payload.data,
      };
    case types.GET_ONLY_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        onlyTweet: action.payload.data,
      };
    case types.GET_REPLY_SUCCESS:
      return {
        ...state,
        loading: false,
        reply: action.payload.data,
      };
    case types.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.data,
      };
    case types.GET_RETWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        retweet: action.payload.data,
      };
    case types.GET_ALL_BILL_SUCCESS:
      return {
        ...state,
        loading: false,
        bill: action.payload.data,
      };
    case types.GET_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chat: action.payload.data,
      };
    case types.GET_FOLLOWER_SUCCESS:
      return {
        ...state,
        loading: false,
        follower: action.payload.data,
      };
    case types.GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        loading: false,
        following: action.payload.data,
      };
    case types.GET_ALL_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        rating: action.payload.data,
      };
    case types.GET_ALL_APP_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        infoApp: action.payload.data,
      };
    case types.GET_ALL_BILL_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        billDetail: action.payload.data,
      };
    case types.GET_ACCOUNT_BUY_MUCH_SUCCESS:
      return {
        ...state,
        loading: false,
        AccountBuyMuch: action.payload,
      };
    case types.GET_LIST_POST_WEEK_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        usePostWeek: action.payload.data,
      };
    case types.GET_ONLY_TWEET_FAIL:
    case types.GET_DETAIL_MESSAGE_FAIL:
    case types.GET_MESSAGE_FAIL:
    case types.GET_CHAT_FAIL:
    case types.GET_DETAIL_TWEET_FAIL:
    case types.GET_ALL_PAYMENT_FAIL:
    case types.GET_ALL_BILL_FAIL:
    case types.GET_ALL_RATING_FAIL:
    case types.GET_ALL_BILL_DETAIL_FAIL:
    case types.GET_ACCOUNT_BUY_MUCH_FAIL:
    case types.GET_FOLLOWING_FAIL:
    case types.GET_FOLLOWER_FAIL:
    case types.GET_REPLY_FAIL:
    case types.GET_RETWEET_FAIL:
    case types.GET_DETAIL_CHAT_FAIL:
    case types.GET_LIST_POST_WEEK_ADMIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ReducerInfoAllUser;
