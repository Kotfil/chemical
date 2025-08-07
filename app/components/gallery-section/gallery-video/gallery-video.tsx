import { VideoGrid, VideoWrapper } from '@/app/components/gallery-section/gallery-video/gallery-video.styles';

const videosList = ['/assets/video/1.mov', '/assets/video/2.mp4', '/assets/video/3.mp4', '/assets/video/4.mov'];

export const GalleryVideo = () => {
  return (
    <VideoGrid>
      {videosList.map((src, i) => (
        <VideoWrapper key={i}>
          <video src={src} controls preload="metadata" style={{ width: '100%', height: 'auto' }}>
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
      ))}
    </VideoGrid>
  );
};
