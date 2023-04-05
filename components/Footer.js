import style from '../src/styles/Footer.module.css'

export function Footer() {

    return (
        <div className={style.wrapper}>
            <p className={style.copyright}>Designed by Adrian Paun. Copyright @2023 All Rights Reserved</p>
        </div>
    );
}