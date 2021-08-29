import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const checked = React.useRef();

  function handleChange() {
    props.handleChange(checked.current.checked);
  }

  return (
    <label htmlFor="shortfilm" className="filtercheckbox">
      <input ref={checked} id="shortfilm" type="checkbox" name="shortfilm" onChange={handleChange} className="filtercheckbox__invisible" defaultChecked />
      <span className="filtercheckbox__visible-container">
        <span className="filtercheckbox__visible"></span>
      </span>
      <span className="filtercheckbox__text">Короткометражки</span>
    </label>
  );
}
  
export default FilterCheckbox;