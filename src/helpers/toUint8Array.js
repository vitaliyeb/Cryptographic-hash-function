export default function (str) { 
    if(typeof str !== 'string') throw new Error('Argument type is not string');
    return new TextEncoder().encode(str);
}