import React from 'react';

import { useSelectorHook } from '../hooks/redux';
import { IInfo } from '../../store/reducer';
import './preview.sass';

const Preview = () => {
  const { data } = useSelectorHook((state) => state);
  const {
    info: { name, age },
    children,
  } = data;
  return (
    <div className="preview">
      <div className="title">Персональные данные</div>
      <div className="preview_title">{name && age ? `${name}, ${age} лет` : null}</div>
      <div className="title">Дети</div>
      {children.map(
        (child: IInfo) =>
          child.name &&
          child.age && (
            <div key={child.id} className="preview_wrapper">
              <div className="preview_child">{`${child.name}, ${child.age} лет`}</div>
            </div>
          )
      )}
    </div>
  );
};

export default Preview;
