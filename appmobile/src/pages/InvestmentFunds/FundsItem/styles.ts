import styled, { css } from 'styled-components/native';
import { color, colorLight } from '../../../styles/colors';

interface ChangeColor {
  isClosed: boolean;
}

export const Container = styled.View<ChangeColor>`
  flex: 1;
  background: ${color.WHITE};
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${color.BORDER};

  ${props =>
    props.isClosed &&
    css`
      background: ${colorLight.WHITE};
      border-color: ${colorLight.WHITE};
    `}
`;

export const TopContent = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom-color: ${color.BORDER};
  border-bottom-width: 1px;
`;

export const Title = styled.Text<ChangeColor>`
  flex: 1;
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: ${color.BLACK};

  ${props =>
    props.isClosed &&
    css`
      color: ${colorLight.BLACK};
    `}
`;

export const Type = styled.Text<ChangeColor>`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${color.BLACK};
  padding: 5px 0 15px 0;
  text-transform: uppercase;

  ${props =>
    props.isClosed &&
    css`
      color: ${colorLight.BLACK};
    `}
`;

export const Space = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

export const BottomContent = styled.View`
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
`;

export const TextValue = styled.Text<ChangeColor>`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: ${color.BLACK};

  ${props =>
    props.isClosed &&
    css`
      color: ${colorLight.BLACK};
    `}
`;

export const MinimumValue = styled.Text<ChangeColor>`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${color.BLACK};

  ${props =>
    props.isClosed &&
    css`
      color: ${colorLight.BLACK};
    `}
`;
