import { Menu } from 'antd'
import React from 'react'
import { AppstoreOutlined, AreaChartOutlined, BarsOutlined, HomeOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons'

const MenuList = ({darkTheme}) => {
    const menulist = [
        {
            key: "home",
            icon: <HomeOutlined />,
            name: "Home"
        },
        {
            key: "activity",
            icon: <AppstoreOutlined />,
            name: "Activity"
        },
        {
            key: "tasks",
            icon: <BarsOutlined />,
            name: "Tasks",
            submenu: [
                { key: "task-1", name: "Task 1" },
                { key: "task-2", name: "Task 2" },
                {
                    key: "task-3",
                    name: "Subtasks",
                    subsubmenu: [
                        { key: "subtask-1", name: "Subtask 1" },
                        { key: "subtask-2", name: "Subtask 2" }
                    ]
                },
            ]
        },
        {
            key: "progress",
            icon: <AreaChartOutlined />,
            name: "Progress"
        },
        {
            key: "payment",
            icon: <PayCircleOutlined />,
            name: "Payment"
        },
        {
            key: "setting",
            icon: <SettingOutlined />,
            name: "Setting"
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
                                        <Menu.Item key={subSubItem.key}>
                                            {subSubItem.name}
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            ) : (
                                <Menu.Item key={subItem.key}>
                                    {subItem.name}
                                </Menu.Item>
                            )
                        ))}
                    </Menu.SubMenu>
                ) : (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.name}
                    </Menu.Item>
                )
            ))}
        </Menu>
    )
}

export default MenuList;
