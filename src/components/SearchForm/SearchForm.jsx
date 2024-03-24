import toast from 'react-hot-toast'
import css from './SearchForm.module.css'

const SearchForm = ({ onSearch }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const query = form.elements.query.value.trim()

        if(!query) {
            toast.error("Enter your search details", {position:'top-center'})
        }

        onSearch(query)
        form.reset()
    }

  return (
    <>
        <form onSubmit={handleSubmit} className={css.form}>
            <input 
            type="text"
            name='query'
            placeholder='search movie'
            className={css.input}
            />
            <button className={css.searchBtn} type='submit'>Search</button>
        </form>
    </>
  )
}

export default SearchForm