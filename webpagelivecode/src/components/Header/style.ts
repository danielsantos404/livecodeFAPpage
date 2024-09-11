import styled from "styled-components";

export const StyledHeader = styled.section`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        padding: 5px;

        i {
            display: flex;
            align-items: center;
            padding: 5px;

            img {
                width: 30px;
            }
        }
    }

    nav {
        display: flex;
        align-items: center;

        ul {
            gap: 10px;
            display: flex;
            align-items: center;
            list-style: none;
            padding: 10px;
            font-size: 11px;
            font-weight: bold;
        }

        button {
        display: flex;
        align-items: center;
        --hover-shadows: 2px 2px 10px #121212, -2px -2px 10px #121212;
        --accent: fuchsia;
        font-weight: bold;
        letter-spacing: 0.1em;
        border: none;
        border-radius: 2em;
        background-color: #a8a7a7;
        cursor: pointer;
        padding: 1em 3em;
        transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.1s,
        letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s;
        font-size: 11px;
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

