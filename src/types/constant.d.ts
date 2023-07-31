type ChildrenType = string | JSX.Element;

declare interface ContextStateType {
  playMusic: boolean
}

interface ActionDataType {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
}

interface UserDataType {
  userData: ActionDataType;
  userToken: string;
}

declare interface MusicAppDataType {
  list: Array;
  filter: FilterType;
  activeMusic: MusicType;
  loading: boolean;
  loadMoreMusicList?: Array;
  musicList?: Array;
}
declare interface UserActionType {
  type: string;
  payload: UserDataType;
}

declare interface AppReducerState {
  musicappreducer: MusicAppDataType;
  userappreducer: UserDataType;
}

declare interface FilterType {
  term: string;
  offset: number;
  limit: number;
}

declare interface MusicListTypes {
  artworkUrl100: string;
  trackName: string;
  artistName: string;
  trackId: number;

}

declare interface MusicType extends MusicListTypes {
  previewUrl: string;
}

declare interface MusicActionType {
  type: string;
  payload: MusicAppDataType;
}

declare interface SearchBarProps {
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  filter: FilterType;
}