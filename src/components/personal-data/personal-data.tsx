import React from 'react';
import './personal-data.sass';

import plus from '../../assets/icons/plus.svg';

import { IForms } from '../../interface';

const PersonalData = (props: IForms) => {
  const { info, setInfo, forms, setForms } = props;

  const { name, age } = info;

  const handleClick = (): void => {
    const newForm = { name: '', age: '', id: String(Date.now()) };
    const children = JSON.parse(JSON.stringify(forms));
    children.push(newForm);
    setForms(children);
  };

  return (
    <form className="personal-data">
      <div className="title">Персональные данные</div>
      <div className="input-frame">
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInfo({ ...info, name: e.target.value })
          }
        />
        <div className="label">имя</div>
      </div>
      <div className="input-frame">
        <input
          type="number"
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInfo({ ...info, age: e.target.value })
          }
        />
        <div className="label">возраст</div>
      </div>
      <div className="personal-data_children">
        <div className="form_title">Дети (макс. 5)</div>
        <button
          type="button"
          className={
            forms.length === 5
              ? 'personal-data_add-child personal-data_add-child__disabled'
              : 'personal-data_add-child'
          }
          onClick={handleClick}
          disabled={forms.length === 5}
        >
          <img src={plus} alt="plus" />
          <div>Добавить ребенка</div>
        </button>
      </div>
    </form>
  );
};

export default PersonalData;
