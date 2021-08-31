import React from "react";
import "./Feed.css";
import StatsBox from './StatsBox'
import UserOverview from "./UserOverview";
import DraftRow from "./DraftRow";

function Feed() {

    return (
        
        <div className = "feed">
        <div className="feed_header">
        <p className="subheading">DASHBOARD</p>
        <p className="heading">Blog Overview</p>

        <StatsBox text="POSTS"/>
        
        <UserOverview/>
        <DraftRow/>
        


        </div>
        </div>
        
    );
}

export default Feed;