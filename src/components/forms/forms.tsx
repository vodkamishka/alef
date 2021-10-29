import React from 'react';
import './forms.sass';
import { useHistory } from 'react-router-dom';
import { useDispatchHook } from '../hooks/redux';
import { IInfo } from '../../store/reducer';
import { IForms } from '../../interface';

const Forms = React.memo((props: IForms) => {
  const history = useHistory();
  const { info, forms, setForms } = props;

  const { saveInfo, savePreview } = useDispatchHook();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: string, key: string) => {
    const newForms = forms.reduce(
      (r: IInfo[], el: IInfo) =>
        el.id === index ? [...r, { ...el, [key]: e.target.value }] : [...r, el],
      []
    );
    setForms(newForms);
  };

  // eslint-disable-next-line consistent-return
  const save = () => {
    const isEmpty = forms.some((el) => el.name === '' || el.age === '');
    if (isEmpty || info.name === '' || info.age === '') return alert('Заполните пустые поля');
    savePreview(forms);
    saveInfo(info);
    history.push('/alef/preview');
  };

  const deleteForm = (id: string) => {
    const newForms = forms.reduce((r: IInfo[], el: IInfo) => (el.id === id ? r : [...r, el]), []);
    setForms(newForms);
  };

  return (
    <form className="forms">
      {forms.length > 0 && (
        <>
          {forms.map((form: IInfo) => (
            <div className="forms_form" key={form.id}>
              <div className="input-frame">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange(e, form.id, 'name')}
                />
                <div className="label">имя</div>
              </div>
              <div className="input-frame">
                <input
                  type="number"
                  value={form.age}
                  onChange={(e) => handleChange(e, form.id, 'age')}
                />
                <div className="label">возраст</div>
              </div>
              <button type="button" onClick={() => deleteForm(form.id)}>
                Удалить
              </button>
            </div>
          ))}
          <button type="button" className="forms_save" onClick={save}>
            <div>Сохранить</div>
          </button>
        </>
      )}
    </form>
  );
});

export default Forms;
