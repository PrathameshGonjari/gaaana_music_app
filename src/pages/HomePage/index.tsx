import Flex from "@shared-layouts/Flex";
import {
  addActiveMusic,
  addMusic,
  handleFilter,
  handleLoadMoreMusicList,
  handleLoading,
} from "@src/actions";

import useIntersectionDetection from "@src/hooks/useIntersectionDetection";
import { initialState } from "@src/store/musicappreducer";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSearchBar from "./CustomSearchBar";
import LoadingMusicList from "./LoadingMusicList";
import MusicList from "./MusicList";
import { getMusic, handleSearch } from "./helper";
import UseScroll from "@src/constants/useScroll";

const HomePage = () => {
  const { filter, loading, list } = useSelector(
    (state: AppReducerState) => state.musicappreducer
  );

  const offSetRef = useRef(0);
  const filterRef = useRef(filter);
  const triggerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    onFirstRender();
  }, []);

  const onFirstRender = () => {
    UseScroll(0, 0);
    const initialFilterState = initialState?.filter;
    dispatch(handleFilter(initialFilterState));
    filterRef.current = initialFilterState;
    dispatch(handleLoading(true));
    laodMusic(filter);
  };

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
      const musicList = data?.data?.results;
      dispatch(addMusic(musicList));
      dispatch(addActiveMusic(musicList[0]));
    } else {
      //show error message
    }
    dispatch(handleLoading(false));
  };

  const onLoadMore = async () => {
    if (loading) return;
    offSetRef.current = offSetRef.current + 25;
    dispatch(handleLoading(true));
    const updatedFilter = {
      ...filterRef.current,
      offset: offSetRef.current,
    };
    filterRef.current = updatedFilter;
    dispatch(handleFilter(updatedFilter));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = (await getMusic(filter)) as any;
    if (res?.success) {
      dispatch(handleLoadMoreMusicList(res?.data?.results));
    } else {
      // show error message
    }
    dispatch(handleLoading(false));
  };

  useIntersectionDetection({ triggerRef, callBack: onLoadMore });

  return (
    <Flex direction="column" style={{ marginTop: 100 }}>
      <CustomSearchBar filter={filter} onFilterChange={onSearch} />
      <MusicList list={list} />
      <Flex ref={triggerRef}>
        <LoadingMusicList loading={loading} />
      </Flex>
    </Flex>
  );
};

export default HomePage;
