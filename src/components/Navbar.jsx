import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
            display: "flex",
            position: "sticky",
            background: "#000",
            top: 0,
            zIndex: 10,
            justifyContent: "space-between",
        }}
    >
        <Link
            to="/"
            style={{
                filter: "hue-rotate(65deg) brightness(300%) contrast(250%)",
                display: "flex",
                alignItems: "center",
            }}
        >
            <img src={logo} alt="logo" height={45} />
        </Link>

        <Typography
            fontSize={{ xs: "30px", md: "60px" }}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                ml: "2px",
            }}
        >
            <Box color="#fff">fun</Box>
            <Box color="yellow">tube</Box>
        </Typography>
        <SearchBar />
    </Stack>
);

export default Navbar;
