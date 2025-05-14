'use client';

export const dynamic = 'error';

import styles from './page.module.css';

interface VideoEntry {
  title: string;
  artist: string;
  file: string;
  url: string;
}

const videoData: VideoEntry[] = [
  {
    title: 'ALWAYS SEEM TO MISS HER - ROSEVILE SUCKS',
    artist: '',
    file: 'ALWAYS SEEMS TO MISS HER FINAL (2-16-25).mp4',
    url: 'https://www.youtube.com/watch?v=dfb0SEQA3d8'
  },
  {
    title: 'VISTA HOOP MIXTAPE',
    artist: '',
    file: 'VIS5A HOOP MIXTAPE (POSTED 3.24.25) v3.mp4',
    url: 'https://www.youtube.com/watch?v=WB3q_Zlh1dM'
  },
  {
    title: 'JAM OUT WITH VISTA',
    artist: '',
    file: 'RED HOT CHILI PEPPERS TEE  VIDEO FINAL.mp4',
    url: 'https://www.youtube.com/watch?v=v8laieFURhE'
  },
  {
    title: 'VISTA IN THE MAKING',
    artist: '',
    file: 'VISTA X PDL - MAKING VRO TEE .mp4',
    url: 'https://www.youtube.com/watch?v=_AuN7MFTWJU'
  },
  {
    title: 'HONEY BABY LIVE STREAM',
    artist: 'CHASE USA',
    file: 'CHASE PLATO 「HONEY BABY. I LOVE IT WHEN YOU CALL ME THAT !」(OFFICIAL LIVESTREAM).mp4',
    url: 'https://youtu.be/qPw1towQMMg'
  },
  {
    title: 'WISH YOU WHERE A GIRL',
    artist: 'CHASE USA',
    file: 'WYWAG 9-9-24 (FINAL).mp4',
    url: 'https://youtu.be/0oU-fI6ws4g'
  },
  {
    title: 'KILL YOUR FRIENDS',
    artist: 'CHASE USA',
    file: 'KYF FINAL.mp4',
    url: 'https://youtu.be/vBufSbB6_wI'
  },
  {
    title: 'CUP KISSER',
    artist: 'CHASE USA',
    file: 'CUP KISSER FINAL (YT VERSION).mp4',
    url: 'https://youtu.be/ciTbtj-onek'
  },
  {
    title: 'SWIPE STORY',
    artist: 'CHASE USA',
    file: 'SWIPE STORY UPLOAD READY 6-14-24.mp4',
    url: 'https://youtu.be/QL0rK0n5D4g'
  },
  {
    title: 'SET YOU FREE',
    artist: 'CHASE USA',
    file: 'SET YOU FREE FINAL  10-20-22.mp4',
    url: 'https://youtu.be/Bhko6rRoqDU'
  },
  {
    title: 'STRANGER THAN FICTION',
    artist: 'CHASE USA',
    file: 'PLEASE FOR THE LOVE OF GOD LETS BE DONE.mp4',
    url: 'https://youtu.be/W-jrl3PzJw8'
  },
  {
    title: 'ICE CREAM MAN',
    artist: 'CHASE USA',
    file: 'ICE CREAM MAN FINAL FINAL.mp4',
    url: 'https://youtu.be/XsWXgK1okwE'
  }
];

export default function MadeByVistaPage() {
  return (
    <div className={styles.container}>
      {videoData.map(({ title, artist, file, url }, idx) => {
        const src = `https://victor-videos.b-cdn.net/${encodeURIComponent(file)}`;
        const label = artist ? `${title} – ${artist}` : title;

        return (
          <div key={idx} className={styles.videoBlock}>
            <a href={url || '#'} target="_blank" rel="noopener noreferrer">
              <div className={styles.videoWrapper}>
                <video
                  className={styles.video}
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <h2 className={styles.videoTitle}>{label}</h2>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
