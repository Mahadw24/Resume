import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Githubproject from './Githubproject.png'
import Grocerybud from './GrocerybudProject.png'
import Navbar from './NavbarProject.png'
import Cart from './CartProject.png'
import Cocktail from './CocktailProject.png'
import { UserOutlined } from '@ant-design/icons';

const data = {
    fname: 'Mahad',
    lname: 'Waseem',
    avatarIcon:<UserOutlined/>,
    links:[
        {
            github:'https://github.com/Mahadw24',
            linkledin:'https://www.linkedin.com/in/mahad-waseem-b79322221/',
        },
    ],
    navLinks:[
        'Home',
        'About',
        'Projects', 
        'Skills', 
        'Education'
    ],
    info:[
        {
            icon:<PhoneIcon/>,
            value:'03234935073',
        },
        {
            icon:<LocationOnIcon/>,
            value:'Ferozpur Road Lahore',
        },
    ],
    socialIcon:[
        {
            icon:<GitHubIcon/>,
            link:'https://github.com/Mahadw24',
        },
        {
            icon:<FacebookIcon/>,
            link:'https://github.com/Mahadw24',
        },
        {
            icon:<LinkedInIcon/>,
            link:'https://www.linkedin.com/in/mahad-waseem-b79322221/',
        },
        {
            icon:<TwitterIcon/>,
            link:'https://github.com/Mahadw24',
        }
    ],
    field:'React Developer',
    aboutMe:'Hello My Name is Mahad, a Passionate react developer looking for a job',
    education:[
        {
            degree:'Matriculation',
            institute:'SOS Hermann Gmeiner High School',
            year:'2016-2018',
            marks:'962/1100',
            def:'Marks',
        },
        {
            degree:'Intermediate',
            institute:'Punjab Group of Colleges',
            year:'2018-2020',
            marks:'848/1100',
            def:'Marks'
        },
        {
            degree:'BS Computer Science',
            institute:'University of Central Punjab',
            year:'2020-2024',
            marks:'3.5',
            def:'CGPA'
        }
    ],
    skills:[
        {
            title:'React',
            percent:'65%',
            number:65,
        },
        {
            title:'Javascript(ES6)',
            percent:'75%',
            number:75,
        },
        {
            title:'Html',
            percent:'70%',
            number:70,
        },
        {
            title:'CSS',
            percent:'70%',
            number:70,
        },
        {
            title:'TailwindCSS',
            percent:'70%',
            number:70,
        },
        {
            title:'Git',
            percent:'50%',
            number:50,
        },
        {
            title:'Github',
            percent:'50%',
            number:50,
        },
        {
            title:'Antdesign',
            percent:'70%',
            number:70,
        },
    ],
    profskills:[
        {
            title:'Communication',
            percent:'50%',
            number:50,
        },
        {
            title:'Team Work',
            percent:'80%',
            number:80,
        },
        {
            title:'Project Management',
            percent:'70%',
            number:70,
        },
        {
            title:'Creativity',
            percent:'20%',
            number:20,
        }
    ],
    projects:[
        {
            title:'GithubUsers',
            pic:Githubproject,
            desc:'Helps to understand the process of fetching data from api',
            link:'https://githubusers-react-project.netlify.app/'
        },
        {
            title:'Grocerybud',
            pic:Grocerybud,
            desc:'Helps to understand forms in react and events(etc)',
            link:'https://grocerybud-project-react.netlify.app/'
        },
        {
            title:'Cart',
            pic:Cart,
            desc:'Very Useful to understand the use of react hooks(useReducer and useContext).',
            link:'https://carts-project-react.netlify.app/'
        },
        {
            title:'Cocktails',
            pic:Cocktail,
            desc:'Helps to understand React Router and useCallback',
            link:'https://cocktails-projects-react.netlify.app/'
        },
        {
            title:'Navbar',
            pic:Navbar,
            desc:'Gives concept of conditional rendering in react and use of react hooks(useEffect,useState,useRef)',
            link:'https://navbar-project-react.netlify.app/'
        },
    ]
}


export default data;