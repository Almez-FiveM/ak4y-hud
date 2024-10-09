import ReactPlayer from 'react-player/youtube'
import { useSelector } from "react-redux";
import { selectMenu, updateMenuData } from "../../Store/store";
import { useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { usePlayer } from '../../Contexts/PlayerContext';

const Youtube = () => {
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();
  const { player, setPlayer } = usePlayer();
  const [videoTitle, setVideoTitle] = React.useState('');
  const [videoArtist, setVideoArtist] = React.useState('');
  const [videoThumbnail, setVideoThumbnail] = React.useState('');
  const onEnded = () => {
    console.log('Video Ended', menu.media.queuedSongs, menu.media.queuedSongs.length);
    if (menu.media.queuedSongs.length > 0) {
      let newMedia = {
        ...menu.media,
        currentURL: menu.media.queuedSongs[0].url,
      }
      dispatch(updateMenuData('media', newMedia));
      dispatch({ type: 'REMOVE_SONG_FROM_QUEUE', payload: 0 });
    } else {
      dispatch(updateMenuData('media', {
        ...menu.media,
        thumbnail: 'https://files.catbox.moe/i5bfz3.png',
        currentURL: '',
        currentSong: {
          ...menu.media.currentSong,
          songName: 'NO MEDIA',
          artist: 'Artist',
          duration: 0,
          currentTime: 0
        }
      }));
    }
  };

  const onProgress = (event: any) => {
    let playedSeconds = Math.floor(event.playedSeconds);
    let newMedia = {
      ...menu.media,
      thumbnail: videoThumbnail,
      currentSong: {
        ...menu.media.currentSong,
        currentTime: playedSeconds,
        songName: videoTitle,
        artist: videoArtist,
      }
    }
    dispatch(updateMenuData('media', newMedia));
  }

  const onDuration = (event: any) => {
    let duration = Math.floor(event);
    let newMedia = {
      ...menu.media,
      currentSong: {
        ...menu.media.currentSong,
        duration: duration
      }
    }
    dispatch(updateMenuData('media', newMedia));
  }

  const onPlayerReady = (event: any) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    let player = event.player.player.player;
    player.playVideo();
    setPlayer(player);
    player.setVolume(menu.media.volume);
    let videoData = player.getVideoData();
    let thumbnail = `https://img.youtube.com/vi/${videoData.video_id}/0.jpg`;
    setVideoTitle(videoData.title);
    setVideoArtist(videoData.author);
    setVideoThumbnail(thumbnail);
  };

  const onError = (event: any) => {
    console.log("Error", event);
  }

  useEffect(() => {
    if (player && menu.media.currentURL) {
      player.setVolume(menu.media.volume);
    }
  }, [menu]);

  // reset media on mount
  useEffect(() => {
    dispatch(updateMenuData('media', {
      ...menu.media,
      thumbnail: 'https://files.catbox.moe/i5bfz3.png',
      currentURL: '',
      queuedSongs: [],
      currentSong: {
        ...menu.media.currentSong,
        songName: 'NO MEDIA',
        artist: 'Artist',
        duration: 0,
        currentTime: 0
      }
    }));
  }, []);

  return (
    <>
      {menu.media.currentURL && (
        <ReactPlayer url={menu.media.currentURL} width={0} height={0} playing={true} onReady={onPlayerReady} onEnded={onEnded} onError={onError} onProgress={onProgress} onDuration={onDuration} />
      )}
    </>
  )
}

export default Youtube;