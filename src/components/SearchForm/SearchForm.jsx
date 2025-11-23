import { useNavigate } from "react-router";

import styles from './SearchForm.module.scss'

import Search from '@/assets/images/icons/search.svg'
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();

  const [search, setSearсh] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/catalog/${encodeURIComponent(search.trim().toLowerCase())}`);
    } else {
      navigate('/catalog')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Найти'
        className={styles.input}
        value={search}
        onChange={e => {
          setSearсh(e.target.value)
        }}
      />
      <button type='submit' className={styles.search}>
        <img src={Search} alt="" width={20} height={20} />
      </button>
    </form>
  )
}

export default SearchForm