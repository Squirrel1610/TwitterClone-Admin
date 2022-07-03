import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { SidebarAdmins, TopBar, TweetDetail } from "../../Imports/Index";

const TweetsDetail = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <TweetDetail />
      </div>
    </>
  );
};

export default TweetsDetail;
