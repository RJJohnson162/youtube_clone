import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";
import ChannelDetail from "./ChannelDetail";

const ChannelCard = ({ channelDetail }) => (
    <Box
        sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "320px" },
            height: "326px",
            margin: "auto",
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                }}
            >
                <CardMedia
                    image={
                        ChannelDetail?.snippet?.thumbnails?.high?.url ||
                        demoProfilePicture
                    }
                    sx={{
                        borderRadius: "50%",
                        height: "180px",
                        width: "180px",
                        mb: 2,
                        border: "1px solid #e3e3e3",
                    }}
                    alt={channelDetail?.snippet?.title}
                />
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle
                        sx={{ fontSize: 14, color: "gray", ml: "5px" }}
                    />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography
                        sx={{
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "gray",
                        }}
                    >
                        {parseInt(
                            channelDetail?.statistics?.subscriberCount
                        ).toLocaleString("en-US")}{" "}
                        Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
);

export default ChannelCard;
