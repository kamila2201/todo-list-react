import styled, {css} from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    align-items: center;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({$done}) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    color: #fff;
    transition: filter .3s;

    ${({$remove}) => $remove && css`
        background-color: ${({ theme }) => theme.color.red};

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
    `}

    ${({$toggleDone}) => $toggleDone && css`
        background-color: ${({ theme }) => theme.color.green};

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
    `}
`;