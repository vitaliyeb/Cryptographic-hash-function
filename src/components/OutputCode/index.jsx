import style from './style.module.css'


export default function({ children }) {
    console.log(style);
    return (
        <pre className={style.codeView}>{ children }</pre>
        )
}