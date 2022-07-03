import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { DetailChat, SidebarAdmins, TopBar } from "../../Imports/Index";

const DetailChats = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <DetailChat />
      </div>
    </>
  );
};

export default DetailChats;
