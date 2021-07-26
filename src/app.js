import React, { useState } from 'react';
import { Menu } from 'antd';
import Calc from './components/Calc';
import Imc from './components/Imc';
import Todo from './components/Todo';
import { BarChartOutlined, CalculatorOutlined, UnorderedListOutlined } from '@ant-design/icons';

const App = () => {

  const [pageControl, setPageControl] = useState('calc');

  const Content = () => {
    switch (pageControl){
      case 'calc':
        return <Calc />
      case 'imc':
        return <Imc />
      case 'todo':
        return <Todo />
    }
  }

  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} theme={'dark'}>
        <Menu.Item
          key="1"
          onClick={() => setPageControl('calc')}
          icon={<CalculatorOutlined />}
        >
          Calculadora
        </Menu.Item>

        <Menu.Item
          key="2"
          onClick={() => setPageControl('imc')}
          icon={<BarChartOutlined />}
        >
          IMC
        </Menu.Item>

        <Menu.Item
          key="3"
          onClick={() => setPageControl('todo')}
          icon={<UnorderedListOutlined />}
        >
          ToDo
        </Menu.Item>

      </Menu>
      <Content />
    </>
  )
}

export default App;

