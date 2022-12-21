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
        width: 6.5px;
        height: 8px;
    }
    *::-webkit-scrollbar-track {
        background: ${({ theme }: GlobalStyleProps) => theme.background};
        border-radius: 4px;
    }
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }: GlobalStyleProps) => theme.text};
        border-radius: 4px;
        box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);     

    }
    *::-webkit-scrollbar-thumb:hover {
        transition:all 0.2s ease-in-out;
    }
    *::-webkit-scrollbar-thumb:active {
        background: ${({ theme }: GlobalStyleProps) => theme.primary};
    }
    
}

.withSidebar {
    margin-left: 7rem;
}


.logout {
    color: ${({ theme }: GlobalStyleProps) => theme.error};
}

`;

export default withTheme(GlobalStyle);
