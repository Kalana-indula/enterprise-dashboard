import {ColorModeContext, useMode} from "./theme.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./scenes/dashboard/index.tsx";
import Team from "./scenes/team/index.tsx";
import Contacts from "./scenes/contacts/index.tsx";
import Invoices from "./scenes/invoices/index.tsx";
import Form from "./scenes/form/index.tsx";
import Bar from "./scenes/bar/index.tsx";
import Pie from "./scenes/pie/index.tsx";
import Line from "./scenes/line/index.tsx";
import FAQ from "./scenes/faq/index.tsx";
import Calendar from "./scenes/calendar/index.tsx";
import Geography from "./scenes/geography/index.tsx";
import {useState} from "react";
import AppSidebar from "./scenes/global/AppSidebar.tsx";


const App = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState<boolean>(true);
    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <AppSidebar/>
                        <main className="content">
                            <Topbar />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="/invoices" element={<Invoices />} />
                                <Route path="/form" element={<Form />} />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/line" element={<Line />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/geography" element={<Geography />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}
export default App;
