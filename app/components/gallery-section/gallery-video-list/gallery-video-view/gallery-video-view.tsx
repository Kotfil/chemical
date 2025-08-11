import { VideoWrapper } from '@/app/components/gallery-section/gallery-video-list/gallery-video.styles';
import React, { FC } from 'react';
import { GalleryVideoViewProps } from '@/app/components/gallery-section/gallery-video-list/gallery-video-view/gallery-video-view.types';

export const GalleryVideoView: FC<GalleryVideoViewProps> = ({ video }) => {
  return (
    <VideoWrapper>
      <h3 className="font-blogger pb-2 text-base italic">{video.title}</h3>
      <video src={video.src} poster={video.poster} controls preload="metadata">
        Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  );
};
