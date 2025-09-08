import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Task, TaskCategory } from '../types';
import { getTasks, saveTasks, checkAndUpdateBadges, updateStreak } from '../utils/storage';
import { triggerConfetti } from '../utils/confetti';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskCategory | 'all'>('all');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    setTasks(getTasks());
    // Update streak when the app loads
    updateStreak();
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);
      // Check for badge updates
      checkAndUpdateBadges(tasks);
    }
  }, [tasks]);

  // Add a new task
  const addTask = (
    title: string,
    description: string = '',
    category: TaskCategory = 'personal',
    priority: 'low' | 'medium' | 'high' = 'medium'
  ) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
      category,
      priority
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Toggle task completion
  const toggleTaskCompletion = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          const completed = !task.completed;
          
          // If completing the task, show confetti animation and set completedAt
          if (completed && !task.completed) {
            triggerConfetti();
            return { ...task, completed, completedAt: new Date() };
          }
          
          // If un-completing the task, remove completedAt
          return { ...task, completed, completedAt: completed ? task.completedAt : undefined };
        }
        return task;
      })
    );
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // Edit a task
  const editTask = (
    id: string,
    updates: Partial<Omit<Task, 'id' | 'createdAt' | 'completed' | 'completedAt'>>
  ) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  // Get filtered tasks
  const getFilteredTasks = () => {
    if (filter === 'all') {
      return tasks;
    }
    return tasks.filter(task => task.category === filter);
  };

  return {
    tasks: getFilteredTasks(),
    allTasks: tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    editTask,
    filter,
    setFilter
  };
};