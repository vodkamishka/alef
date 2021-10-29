import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import FormComponent from '../form-component/form-component';
import Preview from '../preview/preview';

import './app.sass';
import Frame from '../../pages/frame/frame';
import { IInfo, IPersonal } from '../../store/reducer';

const App: FC = () => {
  const [forms, setForms] = useState<IInfo[]>([]);
  const [info, setInfo] = useState<IPersonal>({
    name: '',
    age: '',
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/alef/form" exact>
            <Frame>
              <FormComponent forms={forms} setForms={setForms} info={info} setInfo={setInfo} />
            </Frame>
          </Route>
          <Route path="/alef/preview" exact>
            <Frame>
              <Preview />
            </Frame>
          </Route>
          <Redirect to="/alef/form" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
