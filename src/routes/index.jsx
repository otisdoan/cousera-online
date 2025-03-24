import AllSectionCourses from "../components/SectionCourses/AllSectionCourses";
import AllSection from "../components/SectionIntroduction/AllSection";
import Courses from "../pages/Courses";
import CoursesDetail from "../pages/CoursesDetail";
import ExamQuiz from "../pages/ExamQuiz";
import ForgotPassword from "../pages/ForgotPassword";
import GradeCourses from "../pages/GradeCourses";
import Introduction from "../pages/Introduction";
import Login from "../pages/Login";
import PayCourses from "../pages/PayCourses";
import PracticeQuiz from "../pages/PracticeQuiz";
import ProcessCourses from "../pages/ProcessCourses";
import Profiles from "../pages/Profiles";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import ViewCourses from "../pages/ViewCourses";
import ViewFeedback from "../pages/ViewFeedback";

export const routes = [
    {
        path: '/',
        element: <Introduction />,
        children: [
            {
                path: '/',
                element: <AllSection />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
            {
                path: 'reset-password',
                element: <ResetPassword />
            },
        ]
    },
    {
        path: '/courses',
        element: <Courses />,
        children: [
            {
                path: '/courses',
                element: <AllSectionCourses />
            },
            {
                path: 'courses-detail',
                element: <CoursesDetail />
            },
            {
                path: 'pay-courses',
                element: <PayCourses />
            },
            {
                path: 'process-courses',
                element: <ProcessCourses />
            },
            {
                path: 'view-courses',
                element: <ViewCourses />
            },
            {
                path: 'view-courses/practice-quiz',
                element: <PracticeQuiz />
            },
            {
                path: 'view-courses/practice-quiz/exam-quiz',
                element: <ExamQuiz />
            },
            {
                path: 'view-courses/practice-quiz/result-quiz',
                element: <GradeCourses />
            },
            {
                path: 'view-courses/practice-quiz/result-quiz/view-feedback',
                element: <ViewFeedback />
            },
            {
                path: 'profiles',
                element: <Profiles />
            }
        ]
    }
]
