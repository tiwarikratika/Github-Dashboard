import React from 'react'
import './StatsBox.css'

function StatsBox() {
    return (
        <div className="row">
        <div className="col">
          <div className="stats-card">
            <h3>POSTS</h3>
            <p>2390</p>
            <p className="percentage">+4.7%</p>
          </div>
        </div>
      
        <div className="col">
          <div className="stats-card">
            <h3>PAGES</h3>
            <p>182</p>
            <p className="percentage">+12.7%</p>
          </div>
        </div>
        
        <div className="col">
          <div className="stats-card">
            <h3>COMMENTS</h3>
            <p>8147</p>
            <p className="percentage">+3.8%</p>
          </div>
        </div>
        
        <div className="col">
          <div className="stats-card">
            <h3>CUSTOMERS</h3>
            <p>29</p>
            <p className="percentage">+3%</p>
          </div>
        </div>
      </div>
    )
}

export default StatsBox
