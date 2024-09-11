import styled from "styled-components";

export const StyledContainer = styled.main`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 92vh;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        
        @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    }
`

export const StyledLeftSide = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    
    h1 {
        font-size: 30px;
        text-align: center;
    }

    p {
        font-size: 15px;
        text-align: center;
    }

    div {
        display: flex;
        padding: 10px;
        margin-top: 15px;

        button {
        display: flex;
        align-items: center;
        --hover-shadows: 2px 2px 10px #121212, -2px -2px 10px #121212;
        --accent: fuchsia;
        font-weight: bold;
        letter-spacing: 0.1em;
        border: none;
        border-radius: 1.1em;
        background-color: #a8a7a7;
        cursor: pointer;
        padding: 1em 2em;
        transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.1s,
        letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s;
        font-size: 9px;
        margin: 0px 10px 0px 10px;
        gap: 10px;

            img {
                width: 25px;
                
            }
        }

        button:hover {
        box-shadow: var(--hover-shadows);
        }

        button:active {
        box-shadow: 2px 2px 10px #121212, -2px -2px 10px #121212;
        background-color: white;
        transform: scale(0.95);
        color: #121212;
        }
    }
`

export const StyledRightSide = styled.section`
    img {
        width: 100%;
        @media (max-width: 768px) {
        width: 55%;
    }
    }
`
