import React, {useState} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.scss"
import Cards from "../Cards"

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { placeholder, searchFilter } = props;

  const input = isOpen ? <input type="text" placeholder={placeholder} onInput={e => searchFilter(e.target.value)} /> : null;

    console.log (input);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.search}>
      {input}
      <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
        <button>search</button>
        <input type="text" 
        placeholder="Search here" 
        onChange={(event) => {setSearchTerm(event.target.value)}}/>
    
      </span>
    </div>
  );
};

export default SearchBar;
