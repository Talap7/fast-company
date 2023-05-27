import React, { useState, useEffect } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validateConfig = {
        email: {
            isRequired: {
                message: "Почта должна быть полной"
            },
            isEmail: {
                message: "Email введен некоректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль должен быть полным"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать заглавную букву"
            },
            isConstainDigit: {
                message: "Пароль дожен содержать цифры"
            },
            minLength: {
                message: "Длина пароля не должна быть меньше 8 знаков"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    const isValid = Object.keys(errors).length === 0;

    return <form onSubmit={handleSubmit}>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6  offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <TextField
                        label={"Электронная почта"}
                        type={"text"}
                        name={"email"}
                        value={data.email}
                        onChange={handleChange}
                        error={errors.email}

                    />
                    <TextField
                        label={"Пароль"}
                        type={"password"}
                        name={"password"}
                        value={data.password}
                        onChange={handleChange}
                        error={errors.password}

                    />
                    <button disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
                </div>
            </div>
        </div>
    </form>;
};

export default Login;
