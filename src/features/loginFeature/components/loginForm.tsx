import type {FormEvent} from "react";

export default function LoginForm ({onSubmit}: {onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>}) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="#email"></label>
            <input name={'email'} id={'email'} type="email"/>
            <label htmlFor="#password"></label>
            <input name={'password'} id={'password'} type="password"/>
            <button>Log in</button>
        </form>
    )
}