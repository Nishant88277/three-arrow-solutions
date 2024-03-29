import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) =>
    props.colorChange && (
      props.currentTheme === "dark" ? "rgb(4, 12, 24)" : "white"
    )};
  z-index: 9;
  transform: translateY(-5px);
`;

export const Span = styled.div`
  font-size: 2rem;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.span`
  transition: 0.3s ease;
  color: white;
  border-radius: 60px;
  padding: 10px;
  font-size: 3rem;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const HeaderDiv = styled.div`
  position: absoluete;
  widht: 100%;
  height: 70px;
  z-index: 99;
`;
export const Wrapper = styled.div`
  position: relative;
  padding: 0px 24px;
  widht: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
`;

export const List = styled.li`
  :hover {
    ::before {
      background: var(--gradient-one);
    }
  }
  ::before {
    border-color: var(--gradient-one);
  }
`;

export const StyledTitle = styled.span`
  letter-spacing: 1px;
  font-size: 24px;
  background: linear-gradient(
    89.97deg,
    var(--gradient-one) 1.84%,
    var(--gradient-two) 102.67%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
