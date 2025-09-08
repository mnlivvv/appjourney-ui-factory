import React from 'react';
import type { Badge } from '../../types';
import { animated, useTransition } from 'react-spring';
import { FiX } from 'react-icons/fi';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  earnedBadges: Badge[];
  unearnedBadges: Badge[];
}

const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  earnedBadges,
  unearnedBadges
}) => {
  // Animation for modal
  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0, transform: 'scale(0.95)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.95)' },
    config: { tension: 300, friction: 20 }
  });

  // Animation for backdrop
  const backdropTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 300, friction: 20 }
  });

  // Format date
  const formatDate = (date?: Date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <>
      {backdropTransition((styles, item) =>
        item && (
          <animated.div
            style={styles}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
        )
      )}

      {modalTransition((styles, item) =>
        item && (
          <animated.div
            style={styles}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Your Achievements</h2>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 overflow-y-auto flex-grow">
                {/* Earned badges */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🏆</span>
                    Earned Badges ({earnedBadges.length})
                  </h3>

                  {earnedBadges.length === 0 ? (
                    <p className="text-gray-500 text-center py-3">
                      Complete tasks to earn badges!
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {earnedBadges.map((badge) => (
                        <div
                          key={badge.id}
                          className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col items-center text-center"
                        >
                          <div className="text-4xl mb-2">{badge.icon}</div>
                          <h4 className="font-bold text-gray-800">{badge.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                          {badge.earnedAt && (
                            <div className="text-xs text-green-600 mt-1">
                              Earned on {formatDate(badge.earnedAt)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Locked badges */}
                <div>
                  <h3 className="text-lg font-bold text-gray-600 mb-3 flex items-center">
                    <span className="mr-2">🔒</span>
                    Badges to Unlock ({unearnedBadges.length})
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {unearnedBadges.map((badge) => (
                      <div
                        key={badge.id}
                        className="bg-gray-100 border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center opacity-70"
                      >
                        <div className="text-4xl mb-2 grayscale">{badge.icon}</div>
                        <h4 className="font-bold text-gray-700">{badge.name}</h4>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-3 text-center">
                <p className="text-sm text-gray-600">
                  Keep completing tasks to earn more badges!
                </p>
              </div>
            </div>
          </animated.div>
        )
      )}
    </>
  );
};

export default BadgesModal;