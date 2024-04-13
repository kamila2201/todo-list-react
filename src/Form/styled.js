import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    padding: 10px;
    color: #fff;
    background-color: ${({ theme }) => theme.color.teal};;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }
`;


