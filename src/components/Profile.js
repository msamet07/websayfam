import React,{useContext} from "react";
import { DataContext } from "../context/DataContext";

const Profile = () => {

  const { content } = useContext(DataContext);

  return (
    <div id="profile" className="profile">
      <section>
        <h2 className="title">{content.profile}</h2>
        <div className="profileContainer">
          <div className="profileCard">
            <h2>Profile</h2>
            <div className="infos">
              <div>
                <p>Birthday: </p>
                <p>City: </p>
                <p>Position: </p>
                <p>Education:</p>
              </div>
              <div>
                <p>15.06.1993</p>
                <p>Antalya</p>
                <p>Full Stack Developer</p>
                <p>
                Firat University,
                Automotive Engineering, Graduate, 2017
                </p>
              </div>
            </div>
          </div>
          <div className="about">
            <h2>About Me</h2>
            <p>{content.aboutmeinfo}</p>
          </div>
        </div>
      </section>
      <div className="lineeContainer1">
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Profile;
