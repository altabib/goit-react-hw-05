import css from "./ErrorMessage.module.css"

const ErrorMessage = ({ error }) => {
    return (
        <div>
             <p>{ error }</p>
        </div>
    )
};

export default ErrorMessage