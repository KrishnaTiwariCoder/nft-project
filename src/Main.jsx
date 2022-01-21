import React from "react";
import "./Main.css";
import instagramLogo from "./assets/owner/instagram.png";
import twitterLogo from "./assets/owner/twitter.png";
import moreIcon from "./assets/owner/more.png";

const Main = ({ activePunk }) => {
  return (
    <div className="main ">
      <div className="main-content ">
        <div className="punk-highlight">
          <div className="punk-container">
            <img src={activePunk.image_url} alt="" className="selected-punk" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div className="punk-details">
            <div className="title ">{activePunk.name}</div>
            <span className="item-number ">•#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="owner-image-container ">
              <img
                src={activePunk.owner.profile_img_url}
                alt=""
                className="owner-image"
              />
            </div>
            <div className="owner-details">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="owner-handle">@krishnacoder</div>
              </div>
              <div className="onwer-link">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="onwer-link">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="onwer-link">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
