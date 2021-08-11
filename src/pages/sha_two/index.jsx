import {toUint8Array, addLeadingZero} from './../../helpers'
import OutputCode from '../../components/OutputCode';

export default function() {
    const msg = 'hi';
    const generate = (function* (msg) {
        let firstBuffer = toUint8Array(msg);
        yield firstBuffer;
        let buffer = new Uint8Array([...firstBuffer, 128]);
        yield buffer;
    })(msg);

    console.log();

    return (<div>
        <p>Преобразуем входящее сообщение в массив 8-битных целых чисел без знака.</p>
        <OutputCode>
            {Array.from(generate.next().value).map((i, k) => <span key={k}>{ addLeadingZero(i.toString(2)) }</span>)}
        </OutputCode>
        <p>Заменим первый бит первого октета на 1 </p>
        <OutputCode>
            {/* { console.log(generate.next().value) } */}
            {Array.from(generate.next().value).map(int => <span>{ addLeadingZero(int.toString(2)) }</span>)}
        </OutputCode>
        
        <p>преобразуем массив</p>
    </div>)
}