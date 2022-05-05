import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const initialForm = {
        name: 'Giuliano',
        email: 'giulian123@gmail.com',
        password: '123456',
        password2: '123456'
    }
    const [{ name, email, password, password2 }, handleInputChange] = useForm(initialForm);

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(name, email, password));
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (validator.isEmail(email) === false) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password is not valid or password is not equal to password2'));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input
                    autoComplete='off'
                    type='text'
                    placeholder='Name'
                    name="name"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    autoComplete='off'
                    type='text'
                    placeholder='Email'
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    autoComplete='off'
                    type='password'
                    placeholder='Password'
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    autoComplete='off'
                    type='password'
                    placeholder='Confirm password'
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type='submit'
                // disabled={true}
                >
                    Register
                </button>
                <Link
                    className="link"
                    to='/auth/login'
                >
                    Already registered?
                </Link>
            </form>

        </>
    )
}
