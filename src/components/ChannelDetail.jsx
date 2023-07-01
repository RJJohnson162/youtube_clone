import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
            setChannelDetail(data?.items[0])
        );

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(255,8,82,1) 9%, rgba(164,34,34,1) 32%, rgba(88,23,56,1) 64%, rgba(65,3,105,1) 82%, rgba(2,0,36,1) 100%, rgba(0,0,0,1) 100%, rgba(121,9,9,1) 100%, rgba(0,212,255,1) 100%)",
                        zIndex: 10,
                        height: "300px",
                    }}
                />

                <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;
