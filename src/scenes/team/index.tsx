import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {DataGrid, type GridColDef, type GridRenderCellParams} from "@mui/x-data-grid";
import {AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined} from "@mui/icons-material";
import Header from "../../components/Header.tsx";
import {mockDataTeam} from "../../data/mockData.ts";

type TeamRow = {
    id: number;
    name: string;
    age: number;
    phone: string;
    email: string;
    access: "admin" | "manager" | "user";
};

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<TeamRow>[] = [
        {field: "id", headerName: "ID"},

        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },

        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },

        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },

        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: (params: GridRenderCellParams<TeamRow>) => {
                const {access} = params.row;

                return (
                    <Box
                        sx={{
                            width: "60%",
                            m: "0 auto",
                            p: "5px",
                            display: "flex",
                            justifyContent: "center",
                            borderRadius: "4px",
                            backgroundColor:
                                access === "admin"
                                    ? colors.greenAccent[600]
                                    : access === "manager"
                                        ? colors.greenAccent[700]
                                        : colors.greenAccent[700],
                        }}
                    >
                        {access === "admin" && <AdminPanelSettingsOutlined/>}
                        {access === "manager" && <SecurityOutlined/>}
                        {access === "user" && <LockOpenOutlined/>}

                        <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <>
            <Box m="20px">
                <Header title={`TEAM`} subtitle={`Managing the Team Members`}/>
                <Box
                    m="40px 0 0 0"
                    height="75vh"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                >

                {/*data of the table */}
                    <DataGrid checkboxSelection rows={mockDataTeam} columns={columns}/>
                </Box>
            </Box>
        </>
    )
}
export default Team;
