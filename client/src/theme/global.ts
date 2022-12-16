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

.withSidebar {
    margin-left: 7rem;
}


.logout {
    color: ${({ theme }: GlobalStyleProps) => theme.error};
}

`;

export default withTheme(GlobalStyle);
