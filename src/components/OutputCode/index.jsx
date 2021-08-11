import style from './style.module.css'


export default function({ children }) {
    return (
        <pre className={style.codeView}>{ children }</pre>
        )
}