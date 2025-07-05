import React, { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { Dashboard } from "./components/Dashboard";
import { Achievements } from "./components/Achievements";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";
import { CourseDetail } from "./components/CourseDetail";
import { VideoPlayer } from "./components/VideoPlayer";
import { Quiz } from "./components/Quiz";
import { GameModule } from "./components/GameModule";
import { CertificateModule } from "./components/CertificateModule";
import { ThemeProvider } from "./contexts/ThemeContext";
import { courses as initialCourses } from "./data/courses";

type AppState = {
  currentPage: string;
  selectedCourse?: string;
  selectedModule?: string;
  moduleType?: string;
  isAuthenticated: boolean;
  selectedCategory?: string;
};

function App() {
  const [courses, setCourses] = useState(initialCourses);
  const [state, setState] = useState<AppState>({
    currentPage: "home",
    isAuthenticated: true,
    selectedCategory: undefined,
  });

  const handleLogin = () => {
    setState({ ...state, isAuthenticated: true, currentPage: "home" });
  };

  const handlePageChange = (page: string) => {
    if (page === "login") {
      setState({ ...state, isAuthenticated: false, currentPage: "login" });
    } else {
      setState({ ...state, currentPage: page, selectedCategory: undefined });
    }
  };

  const handleLogoClick = () => {
    setState({ ...state, currentPage: "home", selectedCategory: undefined });
  };

  const handleCategoryClick = (categoryId: string) => {
    setState({
      ...state,
      currentPage: "courses",
      selectedCategory: categoryId,
    });
  };

  const handleCourseClick = (courseId: string) => {
    setState({
      ...state,
      currentPage: "course-detail",
      selectedCourse: courseId,
    });
  };

  const handleStartModule = (moduleId: string) => {
    const course = courses.find((c) => c.id === state.selectedCourse);
    const module = course?.modules.find((m) => m.id === moduleId);

    if (module) {
      setState({
        ...state,
        currentPage: "module",
        selectedModule: moduleId,
        moduleType: module.type,
      });
    }
  };

  const handleModuleComplete = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        if (course.id === state.selectedCourse) {
          return {
            ...course,
            modules: course.modules.map((module) =>
              module.id === state.selectedModule
                ? { ...module, isCompleted: true }
                : module
            ),
          };
        }
        return course;
      })
    );
    setState({
      ...state,
      currentPage: "course-detail",
    });
  };

  const handleBackToCourse = () => {
    setState({
      ...state,
      currentPage: "course-detail",
    });
  };

  const handleBackToHome = () => {
    setState({ ...state, currentPage: "home" });
  };

  const handleGetStarted = () => {
    setState({ ...state, currentPage: "courses", selectedCategory: undefined });
  };

  if (!state.isAuthenticated) {
    return (
      <ThemeProvider>
        <div className="dark:bg-gray-900 transition-colors duration-300">
          <Login onLogin={handleLogin} />
        </div>
      </ThemeProvider>
    );
  }

  const renderCurrentPage = () => {
    switch (state.currentPage) {
      case "home":
        return (
          <Home
            onCategoryClick={handleCategoryClick}
            onCourseClick={handleCourseClick}
            onGetStarted={handleGetStarted}
          />
        );
      case "courses":
        return (
          <Courses
            onCourseClick={handleCourseClick}
            selectedCategory={state.selectedCategory}
            onCategoryChange={handleCategoryClick}
            onBack={handleBackToHome}
          />
        );
      case "dashboard":
        return <Dashboard onCourseClick={handleCourseClick} />;
      case "achievements":
        return <Achievements />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      case "course-detail":
        const course = courses.find((c) => c.id === state.selectedCourse);
        if (!course) return <div>Course not found</div>;
        return (
          <CourseDetail
            course={course}
            onBack={handleBackToHome}
            onStartModule={handleStartModule}
          />
        );
      case "module":
        const selectedCourse = courses.find(
          (c) => c.id === state.selectedCourse
        );
        const selectedModule = selectedCourse?.modules.find(
          (m) => m.id === state.selectedModule
        );

        if (!selectedModule) return <div>Module not found</div>;

        if (selectedModule.type === "video") {
          return (
            <VideoPlayer
              videoUrl={selectedModule.videoUrl || ""}
              title={selectedModule.title}
              onComplete={handleModuleComplete}
              onBack={handleBackToCourse}
            />
          );
        } else if (selectedModule.type === "quiz") {
          return (
            <Quiz
              questions={selectedModule.quizQuestions || []}
              onComplete={handleModuleComplete}
              onBack={handleBackToCourse}
            />
          );
        } else if (selectedModule.type === "game") {
          return (
            <GameModule
              title={selectedModule.title}
              description={selectedModule.description}
              onComplete={handleModuleComplete}
              onBack={handleBackToCourse}
            />
          );
        } else if (selectedModule.type === "certificate") {
          return (
            <CertificateModule
              title={selectedModule.title}
              description={selectedModule.description}
              downloadUrl={selectedModule.downloadUrl}
              onComplete={handleModuleComplete}
              onBack={handleBackToCourse}
            />
          );
        }
        break;
      default:
        return (
          <Home
            onCategoryClick={handleCategoryClick}
            onCourseClick={handleCourseClick}
            onGetStarted={handleGetStarted}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {state.currentPage !== "module" && (
          <Header
            currentPage={state.currentPage}
            onPageChange={handlePageChange}
            onLogoClick={handleLogoClick}
          />
        )}
        {renderCurrentPage()}
      </div>
    </ThemeProvider>
  );
}

export default App;
