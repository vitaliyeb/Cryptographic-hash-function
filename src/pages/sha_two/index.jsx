import {toUint8Array, addLeadingZero} from './../../helpers'
import OutputCode from '../../components/OutputCode';

export default function() {

    const uint8Array = toUint8Array('Привет, мир');
    console.log(uint8Array);

    return (<div>
        <p>Преобразуем входящее сообщение в массив 8-битных целых чисел без знака.</p>
        <OutputCode>
           {Array.from(uint8Array).map(int => <span>{ addLeadingZero(int.toString(2)) }</span>)}
        </OutputCode>
       
        
        <p>преобразуем массив</p>
    </div>)
}