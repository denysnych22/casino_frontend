import type {FormEvent} from "react";

export default function RegisterForm ({onSubmit}: {onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>}) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="#name"></label>
            <input name={'name'} id={'name'} type="text"/>
            <label htmlFor="#email"></label>
            <input name={'email'} id={'email'} type="email"/>
            <label htmlFor="#password"></label>
            <input name={'password'} id={'password'} type="password"/>
            <button>Create an Account</button>
        </form>
    )
}