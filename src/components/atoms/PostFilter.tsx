import React from 'react';
import styled from 'styled-components';
import camelCase from 'camelcase';

interface IProps {
  name: string;
  setFilter(name: string): void;
  currentFilter: string;
}

const PostFilter = ({ name, setFilter, currentFilter }: IProps) => {
  const clickHandler = () => {
    if (currentFilter === name || name === 'all') {
      setFilter('all');
    } else {
      setFilter(name);
    }
  };

  return (
    <Badge
      className={(currentFilter === name) ? 'active' : undefined}
      onClick={clickHandler}
      data-testid={`filter${camelCase(name, { pascalCase: true })}`}
    >
      {name}
    </Badge>
  );
};

const Badge = styled.span.attrs(props => ({
  className: props.className,
}))`
  display: inline-block;
  padding: 0px 1.15rem;
  font-weight: 200;
  text-transform: capitalize;
  &::after {
    content: '';
    display: block;
    height: 4px;
    width: 0%;
    margin-top: -8px;
    background: #e94e1b;
    transition: all 0.3s ease 0s;
  }
  &:hover {
    border-bottom: none;
    cursor: pointer;
    &::after {
      width: 100%;
    }
  }
  &.active {
    color: #EE4406FC;
  }
`;

export default PostFilter;
