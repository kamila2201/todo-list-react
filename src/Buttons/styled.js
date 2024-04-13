import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    font-size: 20px;
    border: none;
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-basis: 100%;
            margin: 10px;
    }
`;