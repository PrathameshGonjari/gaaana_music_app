export const initialState = {
  list: [],
  filter: {
    term: "top 100",
    offset: 0,
    limit: 12,
  },
  activeMusic: {},
  loading: false,
};

const musicappreducer = (state = initialState, action: MusicActionType) => {
  switch (action.type) {
    case "MUSIC_LIST":
      const { musicList } = action.payload;
      return {
        ...state,
        list: musicList,
      };

    case "LOAD_MUSIC_LIST":
      const { loadMoreMusicList } = action.payload;
      return {
        ...state,
        list: [...state.list, ...loadMoreMusicList],
      };

    case "FILTER":
      const { filter } = action.payload;
      return {
        ...state,
        filter,
      };

    case "ACTIVE_MUSIC":
      const { activeMusic } = action.payload;
      return {
        ...state,
        activeMusic,
      };

    case "LOADING":
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };

    default:
      return state;
  }
};

export default musicappreducer;
