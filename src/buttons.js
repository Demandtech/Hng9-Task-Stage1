import {Link} from 'react-router-dom'

function Buttons (){
    return (
        <div className='btnContainer'>
            <a
                href='https://twitter.com/Demandtvs/'
                className='btn'
                id='twitter'
            >
                Twitter Link
            </a>
            <a
                href='https://training.zuri.team'
                className='btn'
                id='btn__zuri'
            >
                Zuri Team
            </a>
            <a
                href='http://books.zuri.team'
                className='btn'
                id='books'
            >
                Zuri Books
            </a>
            <a
                href='https://books.zuri.team'
                className='btn'
                id='book__python'
            >
                Python Books
            </a>
            <a
                href=' https://background.zuri.team'
                className='btn'
                id='pitch'
                title='Proper background check on all our candidate'
            >
                Background Check for coders
            </a>
            <a
                href='https://books.zuri.team/design-rules'
                className='btn'
                id='book__design'
                title='Get your latest design books'
            >
                Desin Book
            </a>
            <Link
                className='btn'
                id='contact'
                to='./contact'
            >
                Contact Me
            </Link>
        </div>
    )
}


export default Buttons