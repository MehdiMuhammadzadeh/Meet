import './MainHeader.css'

const MainHeader = (props) =>{
    return (
        <header className='bg-teal-500'>
            {props.children}
        </header>
    )
    
}

export default MainHeader;