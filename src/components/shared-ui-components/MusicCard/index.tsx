import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import { MusicCardWrapper, Wrapper } from "./style";
import { Typography } from "@mui/material";
import { addActiveMusic } from "@src/actions";
import { useDispatch } from "react-redux";
import { memo, useContext } from "react";
import MusicContext from "@src/context/MuiscList/musicContext";
import Flex from "@src/components/shared-layouts/Flex";

interface MusicCardProps {
  image: string;
  AlbumTitle: string;
  AlbumSubTitle: string;
  music: MusicType;
}

const MusicCard = (props: MusicCardProps) => {
  const { image, AlbumTitle, AlbumSubTitle, music } = props;

  const dispatch = useDispatch();

  const [{ setMusicState }] = useContext(MusicContext);

  const onPlayButtonClick = (music: MusicType) => {
    dispatch(addActiveMusic(music));
    setMusicState({
      playMusic: true,
    });
    return;
  };

  return (
    <Wrapper>
      <Card>
        <Flex>
          <MusicCardWrapper>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {AlbumTitle}
              </Typography>
              <Typography
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {AlbumSubTitle}
              </Typography>
            </CardContent>
            <Box sx={{ pl: 1, pb: 1 }}>
              <Flex alignitems="center">
                <IconButton
                  className="hidden-child"
                  onClick={() => {
                    onPlayButtonClick(music);
                  }}
                  aria-label="play/pause"
                >
                  <PlayArrowIcon
                    className="playButton"
                    sx={{ height: 38, width: 38, color: "black" }}
                  />
                </IconButton>
              </Flex>
            </Box>
          </MusicCardWrapper>
          <CardMedia
            component="img"
            sx={{ width: "25%" }}
            image={image}
            alt="Album Cover"
          />
        </Flex>
      </Card>
    </Wrapper>
  );
};

export default memo(MusicCard);
