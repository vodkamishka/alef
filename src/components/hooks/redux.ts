import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { IInfo, saveInfoPreview, IPersonal, saveParentInfo } from '../../store/reducer';

export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector;

interface IUseDispatchHook {
  saveInfo: (info: IPersonal) => void;
  savePreview: (preview: IInfo[]) => void;
}

export const useDispatchHook = (): IUseDispatchHook => {
  const dispatch = useDispatch<AppDispatch>();
  const savePreview = (preview: IInfo[]) => dispatch(saveInfoPreview(preview));
  const saveInfo = (info: IPersonal) => dispatch(saveParentInfo(info));

  return { saveInfo, savePreview };
};
