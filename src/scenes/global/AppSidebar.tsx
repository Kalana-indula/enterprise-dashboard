import {Box, IconButton, Typography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import {tokens} from "../../theme";
import {type ReactNode, useState} from "react";
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {
    BarChartOutlined,
    CalendarTodayOutlined,
    ContactsOutlined, HelpOutlineOutlined,
    HomeOutlined, MapOutlined,
    MenuOutlined,
    PeopleOutlined, PersonOutlined, PieChartOutlineOutlined,
    ReceiptOutlined, TimelineOutlined
} from "@mui/icons-material";

interface ItemProps {
    title: string;
    to: string;
    icon: ReactNode;
    selected: string;
    setSelected: (title: string) => void;
}

const Item = ({title,to,icon,selected,setSelected}:ItemProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={ <Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
}

const AppSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("Dashboard");
    return (
        <>
            <Box
                sx={{
                    "& .ps-sidebar-container": {
                        backgroundColor: `${colors.primary[400]} !important`,
                    },
                    "& .ps-menu-button": {
                        backgroundColor: "transparent !important",
                    },
                    "& .ps-menu-button:hover": {
                        color: "#868dfb !important",
                        backgroundColor: "transparent !important",
                    },
                    "& .ps-active": {
                        color: "#6870fa !important",
                    },
                    "& .ps-sidebar-root": {
                        border: "none !important",
                    },
                }}
            >

                <Sidebar collapsed={isCollapsed}>
                    <Menu>
                        {/*  Logo and menu icon  */}
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlined/> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        ADMINS
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlined/>
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={`../../assets/user.png`}
                                        style={{cursor: "pointer", borderRadius: "50%"}}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <Typography
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{m:"10px 0 0 0"}}
                                    >
                                        Ed Roh
                                    </Typography>
                                    <Typography variant="h5" color={colors.greenAccent[500]}>
                                        VP Fancy Admin
                                    </Typography>
                                </Box>
                            </Box>
                        )}

                        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                            <Item
                                title="Dashboard"
                                to="/"
                                icon={<HomeOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{m:"15px 0 5px 20px"}}
                            >
                            Data
                            </Typography>
                            <Item
                                title="Manage Team"
                                to="/team"
                                icon={<PeopleOutlined />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Contacts Information"
                                to="/contacts"
                                icon={<ContactsOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Invoices Balances"
                                to="/invoices"
                                icon={<ReceiptOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Pages
                            </Typography>
                            <Item
                                title="Profile Form"
                                to="/form"
                                icon={<PersonOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Calendar"
                                to="/calendar"
                                icon={<CalendarTodayOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="FAQ Page"
                                to="/faq"
                                icon={<HelpOutlineOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Charts
                            </Typography>
                            <Item
                                title="Bar Chart"
                                to="/bar"
                                icon={<BarChartOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Pie Chart"
                                to="/pie"
                                icon={<PieChartOutlineOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Line Chart"
                                to="/line"
                                icon={<TimelineOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Geography Chart"
                                to="/geography"
                                icon={<MapOutlined/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>
                    </Menu>
                </Sidebar>
            </Box>
        </>
    )
}
export default AppSidebar;
