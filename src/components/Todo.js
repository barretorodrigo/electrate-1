import React from 'react';
import { PageHeader } from 'antd';
import AppMenu from './AppMenu';

const Todo = () => {
  return (
    <>
      <AppMenu selectedKey='3' />
      <PageHeader 
        title="A fazer"
        subTitle="Minha lista de tarefas"
      />
    </>
  );
}

export default Todo;