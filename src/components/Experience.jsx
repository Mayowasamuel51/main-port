import css from '../assests/css.png'
import github from '../assests/github.png'
import graphql from '../assests/graphql.png'
import html from '../assests/html.png'
import javascript from '../assests/javascript.png'
import nextjs from '../assests/nextjs.png'
import node from '../assests/node.png'
import reactImage from '../assests/react.png'
import tailwind from '../assests/tailwind.png'
import laravel from "../assests/portfolio-images/laravel.png"
const Experience = () => {
    const technologies = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: graphql,
            title: 'GraphQL',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: node,
            title: 'Node',
            style: 'shadow-lime-300'
        },

        {
            id: 10,
            src: laravel,
            title: 'Laravel',
            style: 'shadow-lime-300'
        },
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full pt-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies that I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {/* i am mapping throug the technologies been used */}
                    {technologies.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Experience;