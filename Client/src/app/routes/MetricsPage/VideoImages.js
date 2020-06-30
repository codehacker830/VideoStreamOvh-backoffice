import React from "react";

import Aux from "util/Auxiliary.js"

const VideoImages = ({ data }) => {
    const videoImageList = data;
    return (
        <Aux>
            <h2 className="jr-entry-title d-flex flex-row">Top Treding</h2>
            <ul className="jr-agents-list">
                {videoImageList.map((video, index) =>
                    <li key={index}>
                        <div className="jr-profileon">
                            <div className="jr-profileon-thumb"><img alt="..." src={video.cover} /></div>
                            <div className="jr-profileon-content">
                                <h5 className="mb-0 text-truncate">{video.title}</h5>
                                <p className="mb-0 jr-fs-sm text-truncate"><i className={`zmdi zmdi-star text-orange`} /> {video.rating}
                                    <span> | </span> {video.views} views
                                </p>
                            </div>
                        </div>
                    </li>
                )
                }
            </ul>
        </Aux>
    );
};

export default VideoImages;
