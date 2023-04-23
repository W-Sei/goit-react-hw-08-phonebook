import styled from "styled-components";

export const StyledLoader = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background: ${({ theme }) => theme.colors.backgroundLoaderColor};
display: flex;
align-items: center;
justify-content: center;
`;