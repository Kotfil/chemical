import { VideoGrid, VideoWrapper } from '@/app/components/gallery-section/gallery-video/gallery-video.styles';
import { videosListMock } from '@/mock/videos-list.mock';

export const GalleryVideo = () => {
  return (
    <VideoGrid>
      {videosListMock.map((video, i) => (
        <VideoWrapper key={i}>
          <video src={video.src} poster={video.poster} controls preload="metadata">
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
      ))}
    </VideoGrid>
  );
};
