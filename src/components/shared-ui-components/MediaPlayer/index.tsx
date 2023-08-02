/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  CardMedia,
  IconButton,
  Paper,
  Slider,
  Typography,
  useTheme,
} from "@mui/material";
import Flex from "@src/components/shared-layouts/Flex";
import { FC, memo, useEffect, useRef, useState } from "react";

import Forward10Icon from "@mui/icons-material/Forward10";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Replay10Icon from "@mui/icons-material/Replay10";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { IconStyle, MediaContainerWrapper, TinyText } from "./style";

interface MediaPlayerType {
  playMusic: boolean;
  activeMusic: MusicType;
  handleStop: () => void;
  handlePlayPause: (playMusicState: boolean) => void;
}

const MediaPlayer: FC<MediaPlayerType> = ({
  playMusic,
  activeMusic,
  handleStop,
  handlePlayPause,
}) => {
  const theme = useTheme();
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState<number>(0); //seconds
  const audioPlayer: any = useRef(); //refrence for audion component
  const progressBar: any = useRef(); //refrence for progress bar
  const animationRef: any = useRef(); //refrence for animation

  // audioPlayer.volume = 0.75;

  useEffect(() => {
    const seconds: number = Math.floor(audioPlayer?.current?.duration);
    if (seconds && !isNaN(seconds)) {
      setDuration(seconds);
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    handleTrackChange();
  }, [activeMusic?.trackId]);

  const handleTrackChange = () => {
    audioPlayer?.current?.pause(); //pause the audio
    cancelAnimationFrame(animationRef.current);
    handlePlayPause(true);
    togglePlayPause(playMusic);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer?.current?.currentTime;
    setPosition(Math.floor(progressBar?.current?.value));
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = (event: any) => {
    const value = event?.target?.value;
    audioPlayer.current.currentTime = value;
    setPosition(Math.floor(Number(value)));
  };

  const handleStopButton = () => {
    handleStop();
    audioPlayer?.current?.pause();
    progressBar.current.value = 0;
    audioPlayer.current.currentTime = 0;
    setPosition(Math.floor(0));
  };

  const togglePlayPause = (playMusic: boolean) => {
    if (!audioPlayer?.current && !activeMusic?.previewUrl) return;
    const getPlayMusicState = (playMusic: boolean) => {
      if (playMusic) {
        audioPlayer?.current?.play(); //play the audio
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer?.current?.pause(); //pause the audio
        cancelAnimationFrame(animationRef.current);
      }
      return !playMusic;
    };
    const playMusicState = getPlayMusicState(playMusic);
    handlePlayPause(playMusicState);
  };

  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const forwardMusic = () => {
    progressBar.current.value = Number(progressBar?.current?.value + 10);
    audioPlayer.current.currentTime = progressBar?.current?.value;
    setPosition(Math.floor(progressBar?.current?.value));
  };

  const replayMusic = () => {
    progressBar.current.value = Number(progressBar?.current?.value - 10);
    audioPlayer.current.currentTime = progressBar?.current?.value;
    setPosition(Math.floor(progressBar?.current?.value));
  };

  const SliderStyle = {
    color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
    height: 4,
    "& .MuiSlider-thumb": {
      width: 8,
      height: 8,
      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
      "&:before": {
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
      },
      "&:hover, &.Mui-focusVisible": {
        boxShadow: `0px 0px 0px 8px ${
          theme.palette.mode === "dark"
            ? "rgb(255 255 255 / 16%)"
            : "rgb(0 0 0 / 16%)"
        }`,
      },
      "&.Mui-active": {
        width: 20,
        height: 20,
      },
    },
    "& .MuiSlider-rail": {
      opacity: 0.28,
    },
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <audio
        ref={audioPlayer}
        src={activeMusic?.previewUrl}
        preload="metadata"
      ></audio>
      <Flex justifycontent="center" alignitems="center">
        <Box sx={{ my: 1 }}>
          <Flex justifycontent="center" alignitems="center">
            <CardMedia
              component="img"
              sx={{ width: 100, height: 80, borderRadius: 2 }}
              image={activeMusic?.artworkUrl100}
              alt="Album Cover"
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                ml: 2,
                maxWidth: { sm: 350 },
              }}
            >
              <Typography variant="h6" color="primary">
                {activeMusic?.trackName}
              </Typography>
              <Typography color="primary">{activeMusic?.artistName}</Typography>
            </Box>
          </Flex>
        </Box>
        <Box sx={{ ml: 2 }}>
          <MediaContainerWrapper>
            <Flex justifycontent="center" alignitems="center">
              <IconButton onClick={replayMusic}>
                <Replay10Icon sx={IconStyle} />
              </IconButton>
              <Flex
                justifycontent="center"
                alignitems="center"
                className="playPauseButton"
              >
                <IconButton
                  onClick={() => togglePlayPause(playMusic)}
                  aria-label="play/pause"
                >
                  {playMusic ? (
                    <PlayArrowIcon sx={IconStyle} />
                  ) : (
                    <PauseCircleIcon sx={IconStyle} />
                  )}
                </IconButton>
                {!playMusic && (
                  <IconButton
                    onClick={handleStopButton}
                    aria-label="play/pause"
                  >
                    <StopCircleIcon sx={IconStyle} />
                  </IconButton>
                )}
              </Flex>
              <IconButton onClick={forwardMusic}>
                <Forward10Icon sx={IconStyle} />
              </IconButton>
            </Flex>
          </MediaContainerWrapper>
          <Box>
            <Slider
              ref={progressBar}
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={changeRange}
              sx={SliderStyle}
            />
            <Box sx={{ mt: -2 }}>
              <Flex justifycontent="space-between" alignitems="center">
                <TinyText>{formatDuration(position)}</TinyText>
                <TinyText>-{formatDuration(duration - position)}</TinyText>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Paper>
  );
};

export default memo(MediaPlayer);
