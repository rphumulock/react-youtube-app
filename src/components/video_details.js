import React from 'react';

const VideoDetails = (props) => {
    if (!props.video) {
        return (
            <div>Loading. . . </div>
        );
    }

    const url = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="video-embed embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{props.video.snippet.title}</div>
                <div>{props.video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetails;