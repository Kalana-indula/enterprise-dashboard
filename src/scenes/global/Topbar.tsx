import {Box, IconButton, InputBase, useTheme} from "@mui/material";
import {ColorModeContext, tokens} from "../../theme";
import {useContext} from "react";
import {GridSearchIcon} from "@mui/x-data-grid";
import {NotificationsOutlined,SettingsOutlined,PersonOutlined, LightModeOutlined, DarkModeOutlined} from "@mui/icons-material";

const Topbar = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const colorMode=useContext(ColorModeContext);

    return (
        <>
            <Box display="flex" justifyContent="space-between" padding={2}>
                {/*      Search bar          */}
                    <Box display="flex"
                         bgcolor={colors.primary[400]}
                         borderRadius="3px"
                    >
                        <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
                        <IconButton type="button" sx={{p:1}}>
                            <GridSearchIcon/>
                        </IconButton>
                    </Box>

                {/*  Icons  */}
                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined/>
                        ):(
                            <LightModeOutlined/>
                        )}
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlined/>
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined/>
                    </IconButton>
                    <IconButton>
                        <PersonOutlined/>
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}
export default Topbar;
