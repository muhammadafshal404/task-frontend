import { styles } from "./styles";
import Menu from "../common/Menu";
import MenuItem from "../common/MenuItem";
import { combineStyles } from "../../utils";
import { useContext, useState } from "react";
import logo from "../../assets/logo/logo.png";
import DrawerComponent from "../common/Drawer";
import { useLogout } from "../../hooks/useLogout";
import { ConfigProvider, Grid, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { MENU_ITEM_KEYS, ROUTES } from "../../utils/constant";
import { ConfigConsumerProps } from "antd/lib/config-provider";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function HeaderComponent() {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();

  const [selectedRoute, setSelectedRoute] = useState(MENU_ITEM_KEYS.ROOT);
  const themeConfiguration = useContext(ConfigProvider.ConfigContext);
  const [headerDrawerOpen, setHeaderDrawerOpen] = useState<boolean>(false);
  const { md } = Grid.useBreakpoint();
  const { logout } = useLogout();

  const MenuItems = (
    <>
      <MenuItem
        key={MENU_ITEM_KEYS.ROOT}
        onClick={(value) => setSelectedRoute(() => value?.key)}
      >
        <Link to={ROUTES.ROOT}>Dashboard</Link>
      </MenuItem>
      <MenuItem
        key={MENU_ITEM_KEYS.CATEGORIES}
        onClick={(value) => setSelectedRoute(() => value?.key)}
      >
        <Link to={ROUTES.CATEGORY}>Categories</Link>
      </MenuItem>
      <MenuItem
        key={MENU_ITEM_KEYS.CARS}
        onClick={(value) => setSelectedRoute(() => value?.key)}
      >
        <Link to={ROUTES.CAR}>Cars</Link>
      </MenuItem>
    </>
  );

  const getHeaderHamburgerStyle = (themeConfig: ConfigConsumerProps) => ({
    color: themeConfig?.theme?.token?.colorPrimary,
  });

  const gotoDashbaord = () => {
    navigate(ROUTES.ROOT);
  };

  return (
    <Header style={styles.header}>
      <div
        style={combineStyles([
          styles.headerLeftItemsContainer,
          {
            justifyContent: md ? "flex-start" : "space-between",
          },
        ])}
      >
        <div style={styles.logoContainer} onClick={gotoDashbaord}>
          <img src={logo} width={100} />
        </div>
        {md ? (
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[MENU_ITEM_KEYS.ROOT]}
            selectedKeys={[selectedRoute]}
            style={styles.menu}
          >
            {MenuItems}
          </Menu>
        ) : (
          <div onClick={() => setHeaderDrawerOpen(true)}>
            <MenuOutlined style={getHeaderHamburgerStyle(themeConfiguration)} />
          </div>
        )}
      </div>
      <div style={styles.headerRightIconsContainer}>
        {!user ? (
          ""
        ) : (
          <LogoutOutlined onClick={logout} style={styles.headerIcons} />
        )}
      </div>
      <DrawerComponent
        title="Resource Ally"
        open={headerDrawerOpen}
        onClose={() => setHeaderDrawerOpen(false)}
      >
        {
          <Menu
            onClick={() => setHeaderDrawerOpen(false)}
            mode="vertical"
            defaultSelectedKeys={[MENU_ITEM_KEYS.ROOT]}
            selectedKeys={[selectedRoute]}
            style={styles.headerDrawer}
          >
            {MenuItems}
          </Menu>
        }
      </DrawerComponent>
    </Header>
  );
}
