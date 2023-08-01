import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Wrapper } from "../MusicCard/style";
import { LoadingCardWrapper } from "./style";
import Flex from "@shared-layouts/Flex";

const LoadingMusicCard = () => {
  const SkeletonWidth = ["100", "80", "60", "40"];

  return (
    <Wrapper>
      <Card>
        <Flex>
        <LoadingCardWrapper>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {SkeletonWidth?.map((width: string) => (
              <Skeleton key={width} variant="text" width={`${width}%`} />
            ))}
          </CardContent>
          <Flex alignitems="center" >
          <Box sx={{ pl: 1, pb: 1 }}>
            <Skeleton variant="circular" width={38} height={38} />
          </Box>
          </Flex>
        </LoadingCardWrapper>
        <Skeleton variant="rectangular" width={180} height={180} />
        </Flex>
      </Card>
    </Wrapper>
  );
};

export default LoadingMusicCard;
