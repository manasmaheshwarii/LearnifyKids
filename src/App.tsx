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
import { ThemeProvider } from "./contexts/ThemeContext";
import { courses } from "./data/courses";

type AppState = {
  currentPage: string;
  selectedCourse?: string;
  selectedModule?: string;
  moduleType?: string;
  isAuthenticated: boolean;
};

function App() {
  const [state, setState] = useState<AppState>({
    currentPage: "home",
    isAuthenticated: true, // Set to false to show login first
  });

  const handleLogin = () => {
    setState({ ...state, isAuthenticated: true, currentPage: "home" });
  };

  const handlePageChange = (page: string) => {
    if (page === "login") {
      setState({ ...state, isAuthenticated: false, currentPage: "login" });
    } else {
      setState({ ...state, currentPage: page });
    }
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
    setState({ ...state, currentPage: "courses" });
  };

  // Show login if not authenticated
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
            onCategoryClick={() => handlePageChange("courses")}
            onCourseClick={handleCourseClick}
            onGetStarted={handleGetStarted}
          />
        );
      case "courses":
        return <Courses onCourseClick={handleCourseClick} />;
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
        }
        break;
      default:
        return (
          <Home
            onCategoryClick={() => handlePageChange("courses")}
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
          />
        )}
        {renderCurrentPage()}
      </div>
    </ThemeProvider>
  );
}

export default App;
