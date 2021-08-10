import {toUint8Array, addLeadingZero} from './../../helpers'
import OutputCode from '../../components/OutputCode';

export default function() {
    const msg = 'hitest';
    const uint8Array = toUint8Array(msg);
    
    console.log(uint8Array);

    return (<div>
        <p>Преобразуем входящее сообщение в массив 8-битных целых чисел без знака.</p>
        <OutputCode>
           {Array.from(toUint8Array(msg)).map(int => <span>{ addLeadingZero(int.toString(2)) }</span>)}
        </OutputCode>
        <p>Заменим первый бит первого октета на 1 </p>
        <OutputCode>
            {msg + String.fromCharCode(0x80)}
           {Array.from(toUint8Array(msg + String.fromCharCode(0x80))).map(int => <span>{ addLeadingZero(int.toString(2)) }</span>)}
        </OutputCode>
        
        <p>преобразуем массив</p>
    </div>)
}