import { } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import pic01 from "../assets/pic01.jpeg"
import logo01 from "../assets/logo01.webp"
import logo02 from "../assets/logo02.webp"
import logo03 from "../assets/logo03.webp"
import logo04 from "../assets/logo04.webp"
import logo05 from "../assets/logo05.webp"
import logo06 from "../assets/logo06.webp"
import logo07 from "../assets/logo07.webp"
import { Techs } from './Techs'

function InfoLeft() {
    return (
        <section>
            <div className='flex flex-col lg:flex-row justify-center mx-auto'>
                <div className='lg:w-4/12 text-white px-7 lg:px-20 mt-20 lg:fixed left-0 top-0'>
                    <h1 className='text-4xl mb-6'>Michael Uzoigwe</h1>
                    <h2 className='text-2xl mb-4'>Full Stack Developer MERN</h2>
                    <p className='text-[#b6c9f4]'>A meticulous web developer with wealth of experience in responsive web designing.</p>
                    <div className='flex mt-10 gap-3 text-[30px] text-[#b6c9f4]'>
                        <i><FaGithub /></i>
                        <i><FaInstagram /></i>
                        <i><FaTwitter /></i>
                        <i><FaLinkedinIn /></i>
                    </div>
                </div>
                <div className='text-white lg:w-8/12 px-[5%] mt-20 lg:ml-auto'>
                    <p className='text-2xl mb-4'>MEET MICHAEL UZOIGWE:</p>
                    <div className='flex justify-center items-center'>
                        <img className="w-[250px] h-[250px] rounded-[100%] mb-5"  src= {pic01} alt='passportPhoto' />
                    </div>
                    <div className='mb-[90px] text-[#b6c9f4]'>
                        <p className="mb-10">
                        I discovered my passion for creating aesthetically pleasing websites a long time ago but it was not until early 2021 that I finally started my journey as a frontend developer. More than two years down the line and I have continued to make outstanding progress achieved from working on various side projects, some of which can be found on my Github.
                        </p>
                        <p className="mb-10">
                        My deep interest in programming helps in creating solutions to technical challenges and developing visually appealing websites. I have worked on various projects which have all helped in improving all of my current skills while picking up various technologies in the process. I am well equipped and highly capable of creating pixel-perfect websites within the shortest possible time without compromising performance and scalability.
                        </p>
                        <p className="mb-10">
                        I am currently focused on improving my skills as a front-end developer while also trying to get a good grasp of Node js.
                        </p>
                    </div>

                    <div className='flex flex-wrap mt-12 w-10/12 sm:w-[560px] lg:w-[390px] mx-auto'>
                {
                    Techs.map((tech, index) => {
                    return <div key={index} className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mx-auto border rounded-full flex items-center justify-center flex-col mb-4'>
                            <img src={tech.imgSrc} alt="tech-img"  className='w-[40%] mb-3'/>
                            <p>{tech.skill}</p>
                        </div>
                    })
                }
        </div>
                </div>
            </div>
        </section>

    )
}

export default InfoLeft