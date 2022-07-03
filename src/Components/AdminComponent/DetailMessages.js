import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { DetailMessage, SidebarAdmins, TopBar } from "../../Imports/Index";

const DetailMessages = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <DetailMessage />
      </div>
    </>
  );
};

export default DetailMessages;
