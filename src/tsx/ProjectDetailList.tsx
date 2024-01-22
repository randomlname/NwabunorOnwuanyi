import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import postsData from '../project/ProjectPosts.json';
import { Remarkable } from 'remarkable';
import 'github-markdown-css';

type PostListParams = { projectId: string; projectName:string };
type Post = { id: number; title: string; date: string; folder: string; filename: string; };
type PostsData = { [key: string]: Post[] };
  
  
const ProjectDetailList: React.FC = () => {
    const md = new Remarkable();
    const navigate = useNavigate();
    const { projectId, projectName } = useParams<PostListParams>();
    const [posts, setPosts] = useState<Post[]>([]);
    const [modalContent, setModalContent] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (projectId) {
            const data: PostsData = postsData as PostsData;
            const projectPosts = data[projectId];
            if (projectPosts) {
                setPosts(projectPosts);
            } else {
                console.error('Project ID not found');
            }
        }
    }, [projectId]);

    const handleBackClick = () => {
        navigate(-1); 
    };
    
    const handlePostClick = async (filename: string, foldername: string) => {
        try {
            const markdownUrl = `${process.env.PUBLIC_URL}/posts/${foldername}/${filename}`;
            const response = await fetch(markdownUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const markdownContent = await response.text();    
            setModalContent(markdownContent); 
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching post content:', error);
        }
    };
    
      
      
    return (
        <div className="container mx-auto px-20 my-10">
            <div className="lg:flex justify-between lg:items-center">
                <div className="rounded-full border-2 border-black w-12 h-12 flex items-center justify-center cursor-pointer" onClick={handleBackClick}>
                    <i className="fa-solid fa-angles-left"></i>
                </div>
                <h1 className="text-2xl font-bold my-4 lg:mb-20">Posts for {projectName}</h1>
                <div></div>
            </div>
            <div className="mx-auto lg:px-20">
                <div className="mx-auto lg:px-20">
                    <ul className="list-inside lg:px-20">
                        {posts.map((post) => (
                            <li key={post.id} className="py-2">
                                <Link to="#" onClick={() => handlePostClick(post.filename, post.folder)} className="hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out hover:underline">
                                    <span className='text-xl font-semibold"'>{post.title}</span>
                                    <span className='text-lg font-light italic'> - {post.date}</span>
                                    <i className="fas fa-chevron-right ml-2"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full" id="my-modal">
                    <div className="relative top-20 mx-auto p-8 w-11/12 max-w-4xl max-h-3/4 bg-gray-800 text-white shadow-lg rounded-md overflow-y-auto">
                        <div className="mt-3 markdown-body p-8 space-y-4">
                            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: md.render(modalContent) }} />
                            <button onClick={() => setShowModal(false)} className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out" >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailList;
