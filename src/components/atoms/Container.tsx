import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1140px;
  max-width: 94%;
  margin: 0 auto;
  min-height: ${props => props.setHeight ? props.setHeight : 'auto'};
`;

interface IProps {
  children: React.ReactNode;
  setHeight?: string;
}

const Container = ({ children, setHeight }: IProps) => <Wrapper setHeight={setHeight}>{children}</Wrapper>;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  setHeight: PropTypes.string,
};

export default Container;
