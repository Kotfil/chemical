import { getLocaleDict } from '@/app/i18n-service';
import { GalleryVideoItem } from '@/app/components/gallery-section/gallery-video-list/gallery-video-list.types';
import { VideoGrid } from '@/app/components/gallery-section/gallery-video-list/gallery-video.styles';
import React from 'react';
import { GalleryVideoView } from '@/app/components/gallery-section/gallery-video-list/gallery-video-view/gallery-video-view';

export const GalleryVideoList = async () => {
  const { dict } = await getLocaleDict();
  const galleryVideoList = dict.gallery_section.gallery_video_list as GalleryVideoItem[];

  return (
    <VideoGrid>
      {galleryVideoList.map((video, i) => (
        <GalleryVideoView key={i} video={video} />
      ))}
    </VideoGrid>
  );
};
