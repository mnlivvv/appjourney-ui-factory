import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTaskContext } from '../context/TaskContext';

const StatsCard = () => {
  const { userStats } = useTaskContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw weekly progress chart
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Data
    const data = userStats.weeklyProgress;
    const max = Math.max(...data, 3); // Ensure we have at least a height of 3 for visualization

    // Colors
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#4ECDC4'); // secondary color
    gradient.addColorStop(1, '#7A77FF'); // accent-2 color

    // Bar dimensions
    const barWidth = canvas.width / 9; // Allow for spacing
    const spacing = barWidth / 3;
    const startX = spacing;

    // Draw bars
    data.forEach((value, index) => {
      const barHeight = (value / max) * canvas.height * 0.8;
      const x = startX + index * (barWidth + spacing);
      const y = canvas.height - barHeight;

      // Draw bar
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 5);
      ctx.fill();

      // Add day label
      ctx.fillStyle = '#718096';
      ctx.font = '10px Poppins, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(['M', 'T', 'W', 'T', 'F', 'S', 'S'][index], x + barWidth / 2, canvas.height - 5);
    });
  }, [userStats.weeklyProgress]);

  // Calculate most productive category
  const getMostProductiveCategory = () => {
    const categories = Object.entries(userStats.categoriesCompleted);
    if (categories.length === 0) return null;
    
    categories.sort((a, b) => b[1] - a[1]);
    return categories[0][0];
  };

  const mostProductiveCategory = getMostProductiveCategory();

  return (
    <div className="bg-white rounded-xl p-5 shadow-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Stats</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Streak Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-accent-3 rounded-lg p-4 text-white"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-3xl font-bold mb-1">{userStats.streak.count}</div>
            <div className="text-sm opacity-90">Day Streak</div>
            
            <div className="mt-2 text-center">
              <p className="text-xs opacity-80">
                {userStats.streak.count > 0 
                  ? "Keep going! You're on a roll!" 
                  : "Complete a task today to start your streak!"}
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Tasks Completed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-gradient-to-br from-secondary to-accent-2 rounded-lg p-4 text-white"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-3xl font-bold mb-1">{userStats.tasksCompleted}</div>
            <div className="text-sm opacity-90">Tasks Completed</div>
            
            <div className="mt-2 text-center">
              <p className="text-xs opacity-80">
                {userStats.tasksCompleted > 0 
                  ? `Most productive category: ${mostProductiveCategory?.charAt(0).toUpperCase()}${mostProductiveCategory?.slice(1)}` 
                  : "Complete tasks to see your stats!"}
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white border border-gray-200 rounded-lg p-4"
        >
          <h3 className="text-sm font-medium text-gray-700 mb-2">Weekly Progress</h3>
          <div className="h-28">
            <canvas ref={canvasRef} className="w-full h-full"></canvas>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsCard;