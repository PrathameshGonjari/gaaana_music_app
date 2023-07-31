import { Grid } from '@mui/material';
import LoadingMusicCard from '@shared-ui-components/LoadingMusicCard';
import { FC } from 'react';
import { LoaderWrapper } from './style';

interface LoadingMusicListType {
    loading: boolean
}

const LoadingMusicList:FC<LoadingMusicListType> = ({ loading }) => {

    const skeletonArray = Array(12)?.fill("");

  return (
    <LoaderWrapper isloading={loading ? 1 : 0}>
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
  </LoaderWrapper>
  )
}

export default LoadingMusicList