import React from "react";
import ReactPlayer from "react-player";

interface Props {
  url: string;
}

const YouTubePlayer: React.FC<Props> = ({url}) => {
  return <ReactPlayer url={url} controls={true} width="100%" height="100%" />;
};

export default YouTubePlayer;
