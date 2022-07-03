import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { AiOutlineArrowUp, MdArrowDownward } from "../../Imports/Icons";
import { FeaturedInfo } from "../../Styles/StylePages/Admin/FeaturedInfo";
const FeaturedInfos = () => {
  const { total } = useSelector((state) => state.products);
  return (
    <>
      <FeaturedInfo>
        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">All Chats</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                &nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={total?.chats[0]?.count}
                  duration={1.75}
                  separator=","
                />
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">All Users</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                &nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={total?.users[0]?.count}
                  duration={1.75}
                  separator=","
                />
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">All Posts</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                &nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={total?.posts[0]?.count}
                  duration={1.75}
                  separator=","
                />
              </span>
            </div>
          </div>
        </div>
      </FeaturedInfo>
    </>
  );
};

export default FeaturedInfos;
