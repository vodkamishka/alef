import React from 'react';
import PersonalData from '../personal-data/personal-data';
import Forms from '../forms/forms';
import './form-component.sass';
import { IForms } from '../../interface';

const FormComponent = (props: IForms) => {
  return (
    <div className="form-component">
      <PersonalData {...props} />
      <Forms {...props} />
    </div>
  );
};

export default FormComponent;
