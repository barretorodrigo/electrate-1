import React from 'react';
import { Menu } from 'antd';
import {
  BarChartOutlined,
  CalculatorOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';

const AppMenu = () => {
  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} theme={'dark'}>
        <Menu.Item
          key="1"
          icon={<CalculatorOutlined />}
        >
          Calculadora
        </Menu.Item>

        <Menu.Item
          key="2"
          icon={<BarChartOutlined />}
        >
          IMC
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<UnorderedListOutlined />}
        >
          ToDo
        </Menu.Item>

      </Menu>
    </>
  )
}

export default AppMenu;