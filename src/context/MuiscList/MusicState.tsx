import { useMemo, useState } from "react";
import MusicContext from "./musicContext";

export const initialState: ContextStateType = {
  playMusic: false,
};

const MusicState = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [musicState, setMusicState] = useState<ContextStateType>(initialState);

  const stateValue = useMemo(
    () => [{ musicState, setMusicState }],
    [musicState, setMusicState]
  );

  return (
    <MusicContext.Provider value={stateValue}>{children}</MusicContext.Provider>
  );
};

export default MusicState;
