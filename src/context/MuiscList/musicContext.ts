import { createContext } from "react";

interface initialStateType {
 musicState: ContextStateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMusicState: any;
}

const MusicContext = createContext<initialStateType[]>([]);

export default MusicContext;