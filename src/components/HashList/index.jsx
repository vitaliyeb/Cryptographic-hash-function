import { Link } from "react-router-dom"

const HFList = [
    {
        topic: 'SHA-2',
        to: '/sha-2'
    },
]

const HashSection = ({topic, to}, idx) => {
    return (<div key={idx}>
        <Link to={to} >{ topic }</Link>
    </div>)
}


export default function() {

    return (<div>
        { HFList.map(HashSection) }
    </div>)
}