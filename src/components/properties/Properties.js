import React from "react";
import { ImLocation2 } from "react-icons/im";
import "./Properties.css";
const Properties = () => {
  return (
    <div className="properties__screeen">
      <h1>New Offers</h1>
      <div className="gridprop">
        <div className="gridele">
          <div className="roomimg">
            <h5>75m2</h5>
          </div>
          <div className="discription">
            <p>
              Apartment revonated by peaky blinders and vins club organization
            </p>
          </div>
          <div className="location">
            <ImLocation2 className="reacticon" />
            <h3>wakefield, England</h3>
          </div>
          <div className="price">$25,000 / m2</div>
        </div>
        <div className="gridele">
          <div className="roomimg1">
            <h5>52m2</h5>
          </div>
          <div className="discription">
            <p>
              Apartment revonated by peaky blinders and vins club organization
            </p>
          </div>
          <div className="location">
            <ImLocation2 className="reacticon" />
            <h3>wakefield, England</h3>
          </div>
          <div className="price">
            <p>$25,000 / m2</p>
          </div>
        </div>
        <div className="gridele">
          <div className="roomimg2">
            <h5>80m2</h5>
          </div>
          <div className="discription">
            <p>
              Apartment revonated by peaky blinders and vins club organization
            </p>
          </div>
          <div className="location">
            <ImLocation2 className="reacticon" />
            <h3>wakefield, England</h3>
          </div>
          <div className="price">$25,000 / m2</div>
        </div>
        <div className="gridele">
          <div className="roomimg3">
            <h5>65m2</h5>
          </div>
          <div className="discription">
            <p>
              Apartment revonated by peaky blinders and vins club organization
            </p>
          </div>
          <div className="location">
            <ImLocation2 className="reacticon" />
            <h3>wakefield, England</h3>
          </div>
          <div className="price">$25,000 / m2</div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
