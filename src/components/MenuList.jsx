import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, UserOutlined, SolutionOutlined, PhoneOutlined } from '@ant-design/icons';

const MenuList = ({ darkTheme }) => {
    const navigate = useNavigate();

    const getIconByName = (name) => {
        switch (name) {
            case "Ana Sayfa":
                return <HomeOutlined />;
            case "Hakkımda":
                return <UserOutlined />;
            case "Hizmetlerimiz":
                return <SolutionOutlined />;
            case "İletişim":
                return <PhoneOutlined />;
            default:
                return null;
        }
    };

    const menulist = [
        {
            key: "home",
            icon: getIconByName("Ana Sayfa"),
            name: "Ana Sayfa",
            path: "/"
        },
        {
            key: "about",
            icon: getIconByName("Hakkımda"),
            name: "Hakkımda",
            path: "/about"
        },
        {
            key: "services",
            icon: getIconByName("Hizmetlerimiz"),
            name: "Hizmetlerimiz",
            path: "/services"
        },
        {
            key: "contact",
            icon: getIconByName("İletişim"),
            name: "İletişim",
            path: "/contact"
        },
    ];

    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
            {menulist.map((item) => (
                item.submenu ? (
                    <Menu.SubMenu key={item.key} icon={item.icon} title={item.name}>
                        {item.submenu.map((subItem) => (
                            subItem.subsubmenu ? (
                                <Menu.SubMenu key={subItem.key} title={subItem.name}>
                                    {subItem.subsubmenu.map((subSubItem) => (
                                        <Menu.Item key={subSubItem.key} onClick={() => navigate(subSubItem.path)}>
                                            {subSubItem.name}
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            ) : (
                                <Menu.Item key={subItem.key} onClick={() => navigate(subItem.path)}>
                                    {subItem.name}
                                </Menu.Item>
                            )
                        ))}
                    </Menu.SubMenu>
                ) : (
                    <Menu.Item key={item.key} icon={item.icon} onClick={() => navigate(item.path)}>
                        {item.name}
                    </Menu.Item>
                )
            ))}
        </Menu>
    )
}

export default MenuList;
