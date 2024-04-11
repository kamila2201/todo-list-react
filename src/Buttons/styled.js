import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    font-size: 20px;
    border: none;
    color: teal;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:disabled {
        color: #bdb8b8;
    }

    @media (max-width:768px) {
            flex-basis: 100%;
            margin: 10px;
    }
`;