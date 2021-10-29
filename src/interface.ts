import { IInfo, IPersonal } from './store/reducer';

export interface IForms {
  info: IPersonal;
  setInfo: (info: { name: string; age: string }) => void;
  forms: IInfo[];
  setForms: (forms: IInfo[]) => void;
}
