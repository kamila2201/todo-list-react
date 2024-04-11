import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    color: #fff;
    background-color: teal;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }
`;


