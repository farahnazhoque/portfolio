import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Modal from './Modal';
import flip from '../audio/page.mp3';

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    // Array of project images (replace these with your actual image paths)
    const projectPages = [
        {
            src: import.meta.env.BASE_URL + 'cover.png',
            alt: 'Projects: In my projects, creativity blends with strategy, and an aim to create real change on this world.'
        },
        {
            src: import.meta.env.BASE_URL + 'page1.png', 
            alt: 'In this Edition: Page 2: SafeCircle - A safety tracking app (a mobile application built for ensuring safety of an individual with multiple functionalities integrated), Page 4: MoonbinTunes: A Website for finding statistics about your favorite song, album, artist(a web application integrated with user’s spotify to get their desired statistics), Page 6: ICS Search Engine(a search engine made through web crawling all ics pages to help find specific pages needed by the department), Page 8: Incoming: Agentic AI Programming Tutor(an ai tutor that, once provided  an excerpt, creates coding exercises to help user have a better understanding of the excerpt), Page 10:Incoming: 4D Gaussian Splatting: Structure from Motion(a real-time ai that once users feed media to can create a 4D image of the media), Page 12: Incoming: Young and Hungry: The Website(a podcast for the Young and Hungry Podcast by Dr Sean Young)'
        },
        {
            src: import.meta.env.BASE_URL + 'page2.png',
            alt: 'SafeCircle'
        },
        {
            src: import.meta.env.BASE_URL + 'page3.png',
            alt: 'Heading: SafeCircle (A Safety Tracking App), Subheading: A mobile application built for ensuring safety of an individual with multiple functionalities integrated, Inspiration: As four women who frequently commute home late at night from classes and work, we developed an instinctive understanding of the hyper-awareness and unease that often accompanies those walks to their cars or homes after dark or in secluded areas. No one should have to feel that way. This realization led to the creation of SafeCircle: a safety-tracking mobile application designed to provide peace of mind and security with features that promise the safety we often seek., Features: - Users can search up routes from the application and use features similar too Google Maps to navigate to desired location. - If deviated 500 meters from the designated route, the user and their pinned contacts (done through the application) will be notified. - A red SOS central button when clicked will prompt the user to call 911 (will change numbers based on location of country) or text them with their current axis points., How we built it? We built SafeCircle using React Native for cross-platform compatibility, ensuring a seamless user experience on iOS devices. Google Firebase provides a robust backend for real-time data handling and authentication. We used Expo to streamline the development process and facilitate rapid testing. The Google Maps API enables precise location tracking, and we integrated contact sync functionality to make it easy for users to connect with their trusted contacts.' 
        },
        {
            src: import.meta.env.BASE_URL + 'page4.png',
            alt: 'MoonbinTunes'
        },
        {
            src: import.meta.env.BASE_URL + 'page5.png',
            alt: 'Heading: Moonbin Tunes, Subheading: A Music Stats Website, Inspiration: As music lovers, my friend and I wanted to create an intuitive and engaging way to explore Spotify’s vast music library while applying our knowledge of API integration and frontend development. This project allowed us to design a user-friendly platform that enables seamless music discovery,making browsing artists, albums, and tracks both dynamic and enjoyable., Features: Artist, Album, and Track Search: Users can search for their favorite artists, albums, or tracks and navigate through detailed pages displaying relevant information, User Profile & Top Tracks: The homepage provides personalized user information retrieved using Spotify’s API, including their profile picture, display name, and top tracks., Interactive UI with Carousels & Tables: Search results are displayed using Bootstrap-powered carousels for artists/albums and dynamic track lists with sortable data for a smooth user experience., How we built it? We built this project using Angular for the frontend, Node.js with Express for the backend, and Spotify’s API for data retrieval. OAuth authentication ensures secure user login, while Bootstrap enhances the UI with responsive and visually appealing components. The backend handles API requests efficiently, allowing the Angular client to fetch and display music data dynamically.'
        },
        {
            src: import.meta.env.BASE_URL + 'page6.png',
            alt: 'Coming Soon!'
        }
    ];

    const onPage = (e) => {
        setCurrentPage(e.data);
    };

    return (
        
        <div className="flex justify-center items-center min-h-screen p-4">
            
            <div className="relative w-full max-w-4xl">
                <HTMLFlipBook
                    width={550}
                    height={733}
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    showCover={true}  // Ensures the cover is treated separately
                    mobileScrollSupport={true}
                    className="shadow-xl"
                    startPage={0}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={true}
                    startZIndex={100}
                    autoSize={true}
                    maxShadowOpacity={0.5}
                    showPageCorners={true}
                    disableFlipByClick={false}
                    onFlip={onPage} 
                    onFlipEnd={() => {
                        const audio = new Audio(flip);
                        audio.play();
                    }}
                >
                    {projectPages.map((page, index) => (
                        <div 
                            key={index} 
                            className={`page ${
                                index === 0 
                                    ? 'bg-transparent flex justify-center items-center' 
                                    : 'bg-[#c0c0c0] border-2 border-white'
                            }`}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img 
                                src={page.src}
                                alt={page.alt}
                                className={`${
                                    index === 0 
                                        ? 'w-auto h-auto max-w-full max-h-full shadow-lg' 
                                        : 'w-full h-full object-contain'
                                }`}
                                style={{
                                    display: 'block'
                                }}
                            />
                        </div>
                    ))}
                </HTMLFlipBook>
                <div className="absolute top-4 w-full flex justify-between px-4">
                    {currentPage === 0 ? (
                        <button 
                            className="bg-gray-800/50 text-white px-3 py-1 rounded hover:bg-gray-700/50 flex items-center gap-2 mx-auto" 
                            onClick={() => setIsModalOpen(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            Zoom
                        </button>
                    ) : (
                        <>
                            <button 
                                className="bg-gray-800/50 text-white px-3 py-1 rounded hover:bg-gray-700/50 flex items-center gap-2" 
                                onClick={() => setIsModalOpen(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                Zoom
                            </button>
                            <button 
                                className="hidden md:flex bg-gray-800/50 text-white px-3 py-1 rounded hover:bg-gray-700/50 items-center gap-2"
                                onClick={() => setIsModalOpen(true)} 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                Zoom
                            </button>
                        </>
                    )}
                </div>
                {/* Page Counter */}
                <div className="text-center mt-4 font-PerfectDOSVGA437 text-white">
                    Page {currentPage + 1} of {projectPages.length}
                </div>

                {/* Modal Preview */}
                {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)}>
                        <img
                            src={projectPages[currentPage].src}
                            alt={projectPages[currentPage].alt}
                            className="w-full h-full object-contain max-h-[90vh] max-w-[90vw]"
                        />
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Projects;
