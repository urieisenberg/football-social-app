import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

interface GlobalStyleProps {
  theme: ThemeProps;
}

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    font-family: 'Manrope', sans-serif;
    font-family: 'Quicksand', sans-serif;
}

html, body {
    background-color: ${({ theme }: GlobalStyleProps) => theme.background};
    color: ${({ theme }: GlobalStyleProps) => theme.text};
    scroll-behavior: smooth;
    overflow-x: hidden;
    scrollbar-width: thin; 
    --moz-osx-font-smoothing: grayscale;
    *::-webkit-scrollbar {
        width: 0.5rem;
        border-radius: 0.5rem;
    }
    *::-webkit-scrollbar-track {
        background: ${({ theme }: GlobalStyleProps) => theme.background};
    }
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }: GlobalStyleProps) => theme.text};
    }
    *::-webkit-scrollbar-thumb:hover {
        transition:all 0.2s ease-in-out;
    }
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}

`;

export default withTheme(GlobalStyle);
