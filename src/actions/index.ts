export const addMusic = (musicList: MusicListTypes[]) => {
  return {
    type: "MUSIC_LIST",
    payload: { musicList },
  };
};

export const addUserData = (userData: ActionDataType) => {
  return {
    type: "ADD_USER_DATA",
    payload: { userData },
  };
};

export const addUserToken = (userToken: string) => {
  return {
    type: "ADD_USER_TOKEN",
    payload: { userToken },
  };
};

export const addActiveMusic = (activeMusic: MusicType) => {
  return {
    type: "ACTIVE_MUSIC",
    payload: { activeMusic },
  };
};

export const handleFilter = (filter: FilterType) => {
  return {
    type: "FILTER",
    payload: { filter },
  };
};

export const handleLoading = (loading: boolean) => {
  return {
    type: "LOADING",
    payload: { loading },
  };
};

export const handleLoadMoreMusicList = (loadMoreMusicList: []) => {
  return {
    type: "LOAD_MUSIC_LIST",
    payload: { loadMoreMusicList },
  };
};

export const removeUserData = () => {
  return {
    type: "REMOVE_USER_DATA",
  };
};
