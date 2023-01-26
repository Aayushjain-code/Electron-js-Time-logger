import * as S from './style';

interface INavItem {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element | string;
}

interface ISideNavItemList {
  items: INavItem[];
  isOpen: boolean;
  iconType: 'svg' | 'custom';
}

const SideNavItemList = ({ iconType, items, isOpen }: ISideNavItemList) => {
  return (
    <>
      {items.map((item) => (
        <S.NavTab
          to={item.path}
          key={item.id}
          className="link"
          isopen={isOpen.toString()}
        >
          <S.NavTabIcon isOpen={isOpen}>
            {iconType === 'svg' ? (
              item.icon
            ) : (
              <span className={item.icon}></span>
            )}
          </S.NavTabIcon>
          <S.NavTabText isOpen={isOpen}>{item.name}</S.NavTabText>
        </S.NavTab>
      ))}
    </>
  );
};

export default SideNavItemList;
