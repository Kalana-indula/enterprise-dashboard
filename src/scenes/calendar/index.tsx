import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import type {
    DateSelectArg,
    EventClickArg,
    EventApi,
} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

    const handleDateClick = (selected: DateSelectArg) => {
        const title = window.prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.startStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected: EventClickArg) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <Box sx={{ m: 2 }}>
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* CALENDAR SIDEBAR */}
                <Box
                    sx={{
                        flex: "1 1 20%",
                        backgroundColor: colors.primary[400],
                        p: 2,
                        borderRadius: 1,
                    }}
                >
                    <Typography variant="h5">Events</Typography>

                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    my: 1,
                                    borderRadius: 0.5,
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {event.start
                                                ? formatDate(event.start, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                                : null}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box sx={{ flex: "1 1 100%", ml: 2 }}>
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: "12315", title: "All-day event", date: "2022-09-14" },
                            { id: "5123", title: "Timed event", date: "2022-09-28" },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
