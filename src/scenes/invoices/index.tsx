import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
    DataGrid,
    type GridColDef,
    type GridRenderCellParams,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

type InvoiceRow = {
    id: number;
    name: string;
    phone: string;
    email: string;
    cost: number | string; // mock data often uses string like "21.24"
    date: string;
};

const Invoices: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<InvoiceRow>[] = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params: GridRenderCellParams<InvoiceRow, InvoiceRow["cost"]>) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.value}
                </Typography>
            ),
        },
        { field: "date", headerName: "Date", flex: 1 },
    ];

    return (
        <Box sx={{ m: 2 }}>
            <Header title="INVOICES" subtitle="List of Invoice Balances" />

            <Box
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
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices as InvoiceRow[]}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Invoices;
