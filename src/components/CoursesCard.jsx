import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.ico';

const CoursesCard = ({ courses }) => {
  const { translations } = useContext(LanguageContext);
  const navigate = useNavigate();
  return (
    <>
      <div className='container mx-auto px-4 mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {courses.map((curso, index) => (
            <div
              className='bg-white p-4 shadow-md rounded-md flex flex-col cursor-pointer hover:shadow-2xl'
              key={index}
              onClick={() => navigate(`/course/${curso.key}`)}>
              <div>
                <img
                  className='w-full h-40 object-cover rounded-t-md mb-4'
                  src={logo}
                  alt='imageCourse'
                />
              </div>
              <div className='p-4'>
                <div className='text-lg font-bold mb-2 line-clamp-3'>
                  {curso.name}
                </div>
                <div className='text-blue-600 uppercase font-semibold text-sm hover:cursor-pointer'>
                  {curso.category}
                </div>
                <div className='text-sm py-1'>
                  {translations.fecha}: {curso.last_update_date} : dias
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesCard;
