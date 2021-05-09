import React from "react";
import "./UserCard.css";

const UserCard = ({user}) => {
  return (
    <div>
      
        <div class="card">
          <div class="additional">
            <div class="user-card">
                </div>
            <div class="more-info">
              <h1>{user.name}</h1>
              <div class="coords">
                <span>Username:{user.username}</span>
                
              </div>
              <div class="coords">
                <span>Email:{user.email}</span>
                <br/>
                <span>Phone:{user.phone}</span>
              </div>
              <div class="stats">
                <div>
                  <div class="title">Website:{user.website}</div>
                  <div>Address:{user.address.street} {user.address.suite}</div>
                  
                </div>
                
              
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default UserCard;
