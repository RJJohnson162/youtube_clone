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
                            "linear-gradient(90deg, rgba(245,255,8,0.8092915616294211) 0%, rgba(205,215,40,0.953477608141049) 32%, rgba(148,132,30,0.9782838096914366) 53%, rgba(105,65,3,0.8744078406991884) 77%, rgba(2,0,36,1) 100%, rgba(0,0,0,1) 100%, rgba(121,9,9,1) 100%, rgba(0,212,255,0.4744078406991885) 100%)",
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
