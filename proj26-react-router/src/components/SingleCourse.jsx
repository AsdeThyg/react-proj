import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import courses from '../data/courses'
// import NotFound from './NotFound'

const SingleCourse = () => {
  const params = useParams()
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.courseSlug)

  //   if (!course) {
  // return
  // (
  //   <>
  //     <NotFound />
  //     <Link to=".." relative="path">
  //       All courses
  //     </Link>
  //   </>
  // )
  //   }
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>
        {course?.id} - {course?.slug}
      </h2>
      {/* <Link to="/courses">All courses</Link> */}
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  )
}

export default SingleCourse
