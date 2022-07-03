import { createGlobalStyle } from "styled-components";
export const UserLists = createGlobalStyle`
.userList {
    flex: 4;
  }
  
  .userListUser {
    display: flex;
    align-items: center;
  }
  
  .userListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .userView{
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      background-color: #3bb077;
      color: white;
      cursor: pointer;
      margin-right: 20px;
  }
  
  .userListDelete{
      color: red;
      cursor: pointer;
  }
`;