import spch_rcg from '../assets/svg/projects/speech recognition.png'
import chatbot from '../assets/svg/projects/chatbot.png'
import super_resolution from '../assets/svg/projects/super_resolution.png'
import eight from '../assets/svg/projects/eight.svg'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Speech Recognition',
        projectDesc: 'This project about processing human speech into a written format',
        tags: ['Python', 'Raspberry Pi', 'Tensorflow'],
        code: 'https://github.com/AI-General/Speech-Recognition',
        demo: '',
        image: spch_rcg
    },
    {
        id: 2,
        projectName: 'ChatBot-GPT',
        projectDesc: 'This project is about chatBot using gpt-3',
        tags: ['GPT3', 'Python', 'OpenAI API'],
        code: 'https://github.com/AI-General/chatbot-gpt',
        demo: 'https://pandora-web.netlify.app/',
        image: chatbot
    },
    {
        id: 3,
        projectName: 'Image Super Resolution',
        projectDesc: 'This project aims at developing Practical Algorithms for General Image/Video Restoration.',
        tags: ['GAN', 'Data processing', 'Python'],
        code: 'https://github.com/AI-General/Super-GAN',
        demo: 'https://travel-agency-fc58b.web.app/',
        image: super_resolution
    },
    // {
    //     id: 4,
    //     projectName: 'Travel Agency',
    //     projectDesc: 'This project about travel agency management.',
    //     tags: ['React', 'CSS', 'Material Ui'],
    //     code: 'https://github.com/said7388/Travel-Agency-client',
    //     demo: 'https://travel-agency-fc58b.web.app/',
    //     image: eight
    // }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/