import React from "react";
import { useSelector } from "react-redux";
import { WidgetLgs } from "../../Styles/StylePages/Admin/WidgetLgs";
const WidgetLg = () => {
  const { AccountBuyMuch, usePostWeek } = useSelector((state) => state.info);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <>
      <WidgetLgs />
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Total posts of each user weekly</h3>
        <table className="widgetLgTable">
          <tbody>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Full Name</th>
              <th className="widgetLgTh">Username</th>
              <th className="widgetLgTh">Total Posts</th>
            </tr>
            {usePostWeek?.map((item, i) => {
              return (
                <tr className="widgetLgTr" key={i}>
                  {item?.user.map((data, i) => {
                    return (
                      <React.Fragment key={i}>
                        <td className="widgetLgUser">
                          <img
                            src={`${process.env.REACT_APP_PICTURE}${
                              data?.profilePic || img
                            }`}
                            alt={data?.firstName + " " + data?.lastName}
                            className="widgetLgImg"
                          />
                        </td>
                        <td className="widgetLgAmount">
                          {`${data?.username}`}
                        </td>
                      </React.Fragment>
                    );
                  })}
                  <td className="widgetLgAmount">{item?.count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WidgetLg;
