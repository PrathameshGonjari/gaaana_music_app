import { Box, Grid, Paper } from "@mui/material";
import Flex from "@shared-layouts/Flex";
import LoadingMusicCard from "@shared-ui-components/LoadingMusicCard";
import MusicCard from "@shared-ui-components/MusicCard";
import SearchBar from "@shared-ui-components/SearchBar";
import {
  addActiveMusic,
  addMusic,
  handleFilter,
  handleLoadMoreMusicList,
  handleLoading,
} from "@src/actions";
import { initialState } from "@src/store/musicappreducer";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusic, handleSearch } from "./helper";

const HomePage = () => {
  const { filter, loading, list } = useSelector(
    (state: AppReducerState) => state.musicappreducer
  );

  const offSetRef = useRef(0);
  const filterRef = useRef(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    onFirstRender()
  }, []);

  const onFirstRender = () => {
    const initialFilterState = initialState?.filter;
    dispatch(handleFilter(initialFilterState));
    filterRef.current = initialFilterState;
    dispatch(handleLoading(true));
    laodMusic(filter);
  }

  const scroolFuntion = async () => {
    const windowInnerHeight = window.innerHeight;
    const documentElementScrollTop = document.documentElement.scrollTop;
    const documentElementScrollHeight = document.documentElement.scrollHeight;
    const isScroll =
      windowInnerHeight + documentElementScrollTop + 1 >=
      documentElementScrollHeight;

    try {
      if (isScroll) {
        offSetRef.current = offSetRef.current + 25;
        dispatch(handleLoading(true));
        const updatedFilter = {
          ...filterRef.current,
          offset: offSetRef.current,
        };
        filterRef.current = updatedFilter;
        dispatch(handleFilter(updatedFilter));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = (await getMusic(updatedFilter)) as any;
        if (res?.success) {
          dispatch(handleLoadMoreMusicList(res?.data?.results));
        } else {
          // show error message
        }
        dispatch(handleLoading(false));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroolFuntion);
    return () => window.removeEventListener("scroll", scroolFuntion);
  }, []);

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleLoading(true));
    const { updatedFilter, results } = await handleSearch(e, filter);
    dispatch(handleLoading(false));
    dispatch(addMusic(results));
    filterRef.current = updatedFilter;
    offSetRef.current = 0;
    dispatch(handleFilter(updatedFilter));
  };

  const laodMusic = async (filter: FilterType) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (await getMusic(filter)) as any;
    if (data?.success) {
      const musicList = data?.data?.results
      dispatch(addMusic(musicList));
      dispatch(addActiveMusic(musicList[0]));
    } else {
      //show error message
    }
    dispatch(handleLoading(false));
  };

  const skeletonArray = Array(12)?.fill("");

  return (
    <Flex direction="column" style={{ marginTop: 100 }}>
      <Paper
        sx={{ position: "fixed", left: 5, right: 5, top: 70 }}
        elevation={3}
      >
        <SearchBar filter={filter} onFilterChange={onSearch} />
      </Paper>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {list?.map((music: MusicType, index: number) => {
            const key = `key_${index}_${music?.trackId}`;
            return (
              <Grid item xs={2} sm={4} md={4} key={key}>
                <MusicCard
                  music={music}
                  image={music.artworkUrl100}
                  AlbumTitle={music.trackName}
                  AlbumSubTitle={music.artistName}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {loading && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {skeletonArray?.map((_: unknown, index: number) => {
            const key = `key_${index}`;
            return (
              <Grid item xs={2} sm={4} md={4} key={key}>
                <LoadingMusicCard />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Flex>
  );
};

export default HomePage;
