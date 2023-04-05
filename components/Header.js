import style from '../src/styles/Header.module.css'

export function Header() {

    return (
        <div className={style.wrapper}>
            <h1 className={style.headertitle}>Welcome to my page!</h1>
        </div>
    );
}