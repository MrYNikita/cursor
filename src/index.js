import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './stores/store';
import { StyleGlobal } from './Style';
import StyleAnimations from './styles/root/animations';
import StyleBorders from './styles/root/borders';
import StyleBoxShadows from './styles/root/boxShadows';
import StyleColors from './styles/root/colors';
import StyleScrollbar from './styles/root/scrollbar';
import StyleAll from './styles/selectors/all';
import StyleBody from './styles/selectors/body';
import StyleImg from './styles/selectors/img';
import StyleSvg from './styles/selectors/svg';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <React.StrictMode>

        {/* Стили */}
        <StyleGlobal />
        <StyleColors />
        <StyleBorders />
        <StyleScrollbar />
        <StyleBoxShadows />
        <StyleAnimations />

        {/* Стили селекторов */}
        <StyleAll />
        <StyleImg />
        <StyleSvg />
        <StyleBody />

        <Provider store={store}>
            <App />
        </Provider>

    </React.StrictMode>

);