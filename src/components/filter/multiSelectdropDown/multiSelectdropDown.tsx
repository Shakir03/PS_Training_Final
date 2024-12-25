import React from 'react';
import { CheckPicker } from 'rsuite';
import './multiSelectdropDown.scss';

interface PokemonDataType {
  label: string;
  value: string;
  url: string;
}

interface AppMultiSelectDropDownProps {
  label: string;
  onChangeHandler: (value: any[], event: React.SyntheticEvent) => void;
  data: PokemonDataType[];
  placeholder?: string;
  isOpen?: boolean;
  onCloseHandler?: () => void;
  onCleanHandler?: (event: React.SyntheticEvent) => void;
  onOpenHandler?: () => void;
}

const AppMultiSelectDropDown: React.FC<AppMultiSelectDropDownProps> = ({ label, onChangeHandler, data, ...props }) => {
  return (
    <>
      <div className="multiselect-dropdown-wrapper">
        <div className="dropdown-label">
          <span>{label}</span>
        </div>
        <div className={`${props.isOpen ? 'is-dropdown-open' : ''} check-picker-wrap`}>
          <CheckPicker block placeholder={props.placeholder} onChange={onChangeHandler} size="lg" onOpen={props.onOpenHandler} onClose={props.onCloseHandler} onClean={props.onCleanHandler} data={data} searchable={false} style={{ width: 224 }} />
        </div>
      </div>
    </>
  );
};

export default AppMultiSelectDropDown;
