import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.color.silver};
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
    font-weight: 700;
`;

export const Body = styled.div`
 border-top: 2px solid ${({ theme }) => theme.color.alto};
    padding: 20px;
`;