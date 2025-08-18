import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import StatsCard from './components/StatsCard';
import ConfettiEffect from './components/ConfettiEffect';
import Footer from './components/Footer';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 sm:px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <StatsCard />
            <TaskForm />
            <TaskList />
          </div>
        </main>
        
        <Footer />
        
        {/* Confetti effect when completing tasks */}
        <ConfettiEffect />
      </div>
    </TaskProvider>
  );
}

export default App;