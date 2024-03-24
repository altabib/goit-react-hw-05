import css from "./SearchForm.module.css";
import { Formik, Form, Field } from "formik";
import toast from 'react-hot-toast';



const SearchForm = ({ onSearch }) => {

  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      return toast.error("Enter search text");
    }
      onSearch(values.query);
      actions.resetForm();
  };
  return (
    <div className={css.searchForm}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search movie"
          ></Field>
          <button className={css.btnSearch} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm