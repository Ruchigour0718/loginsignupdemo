import React from "react";
import images1 from "../images/images1.jpeg";
import images2 from "../images/images2.jpeg";
import images4 from "../images/images4.jpeg";

const Blogdetail = () => {
  return (
    <div>
      <h1  className="text-center text-success my-5">Bootstrape Card</h1>
      <div className="container">
        <div className="row-md-3">
          <div className="card-group">
            <div className="card">
              <img src={images1} className="card-img-top" alt="first" />
              <div className="card-body">
                <h5 className="card-title">Team Bond </h5>
                <p className="card-text">
                 
Team bonding is an ongoing process through which teams become closer and build trust and ease of communication. Bonding involves increasing loyalty to one another and to the team. One popular way of helping this process is through positive shared experiences in the form of fun activities.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <img src={images2} className="card-img-top" alt="second" />
              <div className="card-body">
                <h5 className="card-title">Best Team work</h5>
                <p className="card-text">
                The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don’t play together, the club won’t be worth a dime.”
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <img src={images4} className="card-img-top" alt="third" />
              <div className="card-body">
                <h5 className="card-title"> “Success is not final; failure is not fatal: it is the courage to continue that counts.”</h5>
                <p className="card-text">
                  ThChurchill lead Britain through one of its darkest periods. With enemies threatening to advance across the English Channel, bombing London daily, the pressure to survive was paramount. But Churchill, like any entrepreneur worth their salt, understood that failure was part of the process. One learned from their mistakes, and the greatest lesson was that there was always another day to fight on.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
