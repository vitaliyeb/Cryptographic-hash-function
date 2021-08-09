export default function(str, length = 8) {
    return (Array(length).fill(0).join('') + str).slice(-length);
}