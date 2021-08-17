import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label htmlFor="shortfilm" className="filtercheckbox">
      <input id="shortfilm" type="checkbox" name="shortfilm" value="short" className="filtercheckbox__invisible" />
      <span className="filtercheckbox__visible-container">
        <span className="filtercheckbox__visible"></span>
      </span>
      <span className="filtercheckbox__text">Короткометражки</span>
    </label>
  );
}
  
export default FilterCheckbox;