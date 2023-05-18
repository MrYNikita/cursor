/* eslint-disable no-unused-vars */
import Course from "../../classes/Course";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import courseTutorial from "../../courses/tutorialUser/course";
import courseManagmentAccounting from "../../courses/managmentAccounting/course";
import courseTutorialPublisher from "../../courses/tutorialPublisher/course";

const initialState = {
    sequence: [
        courseTutorial,
        courseTutorialPublisher,
        courseManagmentAccounting,
    ]
};

export const CoursesSlice = createSlice({

    name: 'courses',
    initialState,
    reducers: {
        /** @arg {PayloadAction<number>} action */
        getCourse: (state, action) => {
            return new Course(...state.sequence[action.payload]);
        },
    },

});

export const { getCourse, setCourse } = CoursesSlice.actions;

export default CoursesSlice.reducer;