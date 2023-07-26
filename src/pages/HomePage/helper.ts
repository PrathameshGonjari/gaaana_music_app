/* eslint-disable @typescript-eslint/no-explicit-any */
import services from "../../services";

export const initialMusic = {
  artistName: "",
  trackName: "",
  artworkUrl100: "",
  previewUrl: "",
  trackId: 0,
};

export const getMusic = async (filter: FilterType) => {
  const custom_path =
    "?" +
    new URLSearchParams({
      ...filter,
      offset: filter?.offset?.toString(),
      limit: filter?.limit?.toString(),
    })?.toString();

  try {
    const {
      data: { data, status },
    } = (await services.post(`search${custom_path}`, {})) as {
      data: { data: { results: [] }; status: number };
    };
    if (status === 200) {
      return { data, success: true };
    } else {
      return { data: null, success: false };
    }
  } catch (err) {
    return { error: err || "Something Went Wrong" };
  }
};

let timeId: any = 0;
export const debounceCell = (debFunction: any, value: string, time: number) => {
  if (timeId) {
    clearTimeout(timeId);
  }
  return new Promise(async (response) => {
    timeId = setTimeout(async () => {
      const res = await debFunction(value);
      response(res);
    }, time);
  });
};

export const handleSearch = async (
  e: React.ChangeEvent<HTMLInputElement>,
  filter: FilterType
) => {
  const value = e?.target?.value;
  const onSearchCB = async (searchValue: string) => {
    const newFilters = { ...filter, term: searchValue };
    const musicResponse = await getMusic(newFilters);
    return { musicList: musicResponse };
  };

  const {
    musicList: {
      data: { results },
      success,
    },
  } = (await debounceCell(onSearchCB, value, 500)) as {
    musicList: { data: { results: MusicListTypes[] }; success: boolean };
  };
  const updatedFilter = { ...filter, offset: 0, term: value };

  if (success) {
    return { updatedFilter, results };
  } else {
    return { updatedFilter: filter, results: [] };
    //show error message
  }
};
