import styled from "styled-components";
import { Button } from "components/CommonStyles/CommonStyles.styled";

export const StyledWrapperUser = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledButton = styled(Button)`
max-width: 100px;
padding: 8px 16px;
font-weight: 500;
`;
