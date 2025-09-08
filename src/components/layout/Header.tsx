import React from 'react';
import { useSpring, animated } from 'react-spring';
import type { UserStats } from '../../types';
import { FiAward, FiCalendar } from 'react-icons/fi';

interface HeaderProps {
  stats: UserStats;
  onShowBadges: () => void;
}

const Header: React.FC<HeaderProps> = ({ stats, onShowBadges }) => {
  // Animation for the header
  const headerSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 }
  });

  // Animation for the stats counters
  const counterSpring = useSpring({
    number: stats.totalCompleted,
    from: { number: 0 },
    config: { tension: 100, friction: 20, duration: 800 }
  });

  // Get today's date
  const today = new Intl.DateTimeFormat('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  }).format(new Date());

  return (
    <animated.header 
      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 rounded-3xl mb-6 shadow-lg"
      style={headerSpring}
    >
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-1">My Tasks</h1>
          <div className="flex items-center text-purple-100">
            <FiCalendar className="mr-1" />
            <span>{today}</span>
          </div>
        </div>

        <button
          onClick={onShowBadges}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors p-2 rounded-full"
          title="View your badges"
        >
          <FiAward size={24} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {/* Streak */}
        <div className="bg-white bg-opacity-20 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold mb-1">🔥 {stats.streak}</div>
          <div className="text-xs text-purple-100">Day Streak</div>
        </div>

        {/* Total completed */}
        <div className="bg-white bg-opacity-20 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold mb-1">
            <animated.span>
              {counterSpring.number.to(n => Math.floor(n))}
            </animated.span>
          </div>
          <div className="text-xs text-purple-100">Tasks Completed</div>
        </div>

        {/* Today completed */}
        <div className="bg-white bg-opacity-20 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold mb-1">{stats.todayCompleted}</div>
          <div className="text-xs text-purple-100">Today's Tasks</div>
        </div>
      </div>
    </animated.header>
  );
};

export default Header;