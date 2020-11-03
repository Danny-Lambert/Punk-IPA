import React, {useState} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.scss"

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { placeholder, updateSearchText } = props;

  const input = isOpen ? <input type="text" placeholder={placeholder} autoFocus={true} onInput={e => updateSearchText(e.target.value)} /> : null;

  return (
    <div className={styles.search}>
      {input}
      <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
        <button>search</button>
      </span>
    </div>
  );
};

export default SearchBar;
