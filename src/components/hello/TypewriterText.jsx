import { useState, useEffect } from 'react';
import './typewriter.css';

const TypewriterText = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setIsComplete(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsComplete(false);
          }, pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime, isComplete]);

  return (
    <span className="typewriter-container">
      {currentText}
      <span className="typewriter-cursor"> |</span>
    </span>
  );
};

export default TypewriterText;
