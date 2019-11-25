import React from 'react';
import styled from '@emotion/styled';
import COLORS from '../constants';
import { contentPadding } from './Content';
import Icon from '../Icons/Icon';
import UserAvatar from '../Avatars/UserAvatar';
import StatusIcon from '../Statuses/StatusIcon';
import { topDocumentPadding } from '../Utility/constants';

const TopBarStyled = styled.div`
  background-color: ${COLORS.white};
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;
  padding: 0 ${contentPadding} 0px ${contentPadding};
  display: flex;
  justify-content: space-between;
`;

const Logotype = styled.div`
  display: inline-flex;
  padding-top: ${topDocumentPadding};
`;

const LogoLabel = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.25px;
  margin-left: 23px;
`;

const TopLeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

const AvaBox = styled.div`
  position: relative;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const IconBox = styled.div`
  margin-right: 26px;
  position: relative;
`;

const TopBar = () => (
  <TopBarStyled>
    <Logotype>
      <Icon iconName="logo" height="16px" />
      <LogoLabel>
        Epic Admin Dashboard
      </LogoLabel>
    </Logotype>
    <TopLeftMenu>
      <IconBox>
        <Icon iconName="bell" />
        <StatusIcon color={COLORS.red} />
      </IconBox>
      {[1, 2, 3, 4].map((elem) => (
        <AvaBox key={elem}>
          <UserAvatar
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=200"
            square
            borderRadius="10px"
            size="26px"
          />
          <StatusIcon color={COLORS.green2} />
        </AvaBox>
      ))}
    </TopLeftMenu>
  </TopBarStyled>
);

export default TopBar;