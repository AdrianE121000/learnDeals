import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoursesContext } from '../../context/CoursesContext';
import { LanguageContext } from '../../context/LanguageContext';
import Cookies from '../utils/Cookies';
import CoursesCard from '../cards/CoursesCard';
import { useEffect } from 'react';
import { CoursesSkeleton } from './skeletons';
import ErrorMessage from './ErrorMessage';

const Model = () => {
  const { category } = useParams();
  const { courses, error, loading, setFetchDone } = useContext(CoursesContext);
  useEffect(() => {
    setFetchDone(true);
  }, [setFetchDone]);
  const { translations } = useContext(LanguageContext);

  const coursesFilteredByCategory = courses.filter(
    (course) => course.category === category
  );

  return (
    <>
      {loading.current ? (
        <div className='mt-24'>
          <CoursesSkeleton />
        </div>
      ) : error != undefined ? (
        <ErrorMessage text={translations.noFetch} />
      ) : coursesFilteredByCategory.length === 0 ? (
        <ErrorMessage text={translations.noCourses} />
      ) : (
        <div className='mt-24'>
          <Cookies />
          <CoursesCard courses={coursesFilteredByCategory} />
        </div>
      )}
    </>
  );
};

export default Model;
