import { Container } from "@mui/material";
import NavigationBar from "@shared-ui-components/NavBar";
import MediaPlayer from "@shared-ui-components/MediaPlayer";
import MusicContext from "@src/context/MuiscList/musicContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const { activeMusic } = useSelector(
    (state: AppReducerState) => state.musicappreducer
  );

  const [{ setMusicState, musicState }] = useContext(MusicContext);
  const { playMusic } = musicState;

  const handleStop = () => {
    setMusicState((prev: ContextStateType) => {
      return {
        ...prev,
        playMusic: true,
      };
    });
  };

  const handlePlayPause = (playMusicState: boolean) => {
    setMusicState({
      playMusic: playMusicState,
    });
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
      <MediaPlayer
        playMusic={playMusic}
        activeMusic={activeMusic}
        handleStop={handleStop}
        handlePlayPause={handlePlayPause}
      />
    </div>
  );
};

export default DefaultLayout;
