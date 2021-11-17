import React, {Component} from 'react'

interface IProps {
    name?: string;
}

export const Home: React.FC<IProps> = (props) => {
    const {
        name,
    } = props
    return <div>
        {name}
        Home Page
    </div>
}

export default Home
