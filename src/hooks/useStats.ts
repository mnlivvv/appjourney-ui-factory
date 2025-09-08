import { useState, useEffect } from 'react';
import type { UserStats, Badge } from '../types';
import { getUserStats, saveUserStats } from '../utils/storage';

export const useStats = () => {
  const [stats, setStats] = useState<UserStats>({
    streak: 0,
    totalCompleted: 0,
    todayCompleted: 0,
    badges: []
  });

  // Load stats from localStorage on initial render
  useEffect(() => {
    setStats(getUserStats());
  }, []);

  // Get earned badges
  const getEarnedBadges = (): Badge[] => {
    return stats.badges.filter(badge => badge.earned);
  };

  // Get unearned badges
  const getUnearnedBadges = (): Badge[] => {
    return stats.badges.filter(badge => !badge.earned);
  };

  return {
    stats,
    earnedBadges: getEarnedBadges(),
    unearnedBadges: getUnearnedBadges()
  };
};