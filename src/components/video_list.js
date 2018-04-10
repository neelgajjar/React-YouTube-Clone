import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
  const vidoeItems = props.videos.map((video) =>{
       return (
       <VideoListItem 
         onVideoSelect={props.onVideoSelect}
         key={video.etag} 
         video={video} /> 
       );
   });

    return (
        <ui className="col-md-4 list-group">
         {vidoeItems}
        </ui>
    );
};

export default VideoList;