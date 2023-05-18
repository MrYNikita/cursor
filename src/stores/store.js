import { configureStore } from '@reduxjs/toolkit';
import CoursesSlice from './slices/courses';

export const store = configureStore({
    reducer: {
        courses: CoursesSlice,
    },
});