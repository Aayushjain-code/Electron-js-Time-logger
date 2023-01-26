/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { MdAddchart } from 'react-icons/md';
import useOnClickOutside from 'renderer/hooks/useOnClickOutside';
import { studyItems } from './menuItems';
import SideNavItemList from './SideNavItemList';
import * as S from './style';

function truncate(str: string | any[], n: number) {
  return str.length > n ? `${str.slice(0, n - 1)}...` : str;
}
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevOpen) => !prevOpen);

  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <S.SidebarContainer style={{ width: isOpen ? '197px' : '67px' }} ref={ref}>
      <div>
        <S.SidebarHeader>
          <div style={{ display: isOpen ? 'block' : 'none' }}>
            {' '}
            <MdAddchart fontSize={30} />
          </div>

          <div
            style={{
              display: isOpen ? 'none' : 'block',
              position: 'relative',
              left: '0.5rem',
            }}
          >
            <MdAddchart fontSize={30} />
          </div>
          <S.SidebarToggleControl
            onClick={toggle}
            style={{ left: isOpen ? '1rem' : '0.4rem' }}
          >
            {isOpen ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
          </S.SidebarToggleControl>
        </S.SidebarHeader>

        <SideNavItemList items={studyItems} iconType="svg" isOpen={isOpen} />
        <S.PaddedDivider />
      </div>
    </S.SidebarContainer>
  );
};

export default Sidebar;
