import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Check, X, MapPin, Award, Zap, Mic, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CURRICULUM } from './data/curriculum.js';

// Text-to-speech wrapper
const speak = (text, lang = 'fr-FR') => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
};

// Speech recognition wrapper
const startListening = (onResult, onError) => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'fr-FR';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    onResult(transcript);
  };

  recognition.onerror = (event) => {
    onError(event.error);
  };

  recognition.start();
  return recognition;
};

// Vocabulary Card Component
const VocabularyCard = ({ word, isFlipped, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="h-40 cursor-pointer perspective"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front - French */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <p className="text-white text-4xl font-bold text-center">{word.fr}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              speak(word.fr);
            }}
            className="mt-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
          >
            <Volume2 size={20} className="text-white" />
          </button>
        </div>

        {/* Back - Dutch */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-white text-3xl font-bold text-center">{word.nl}</p>
          <p className="text-white/80 text-sm mt-3 italic text-center">"{word.context_fr}"</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Drill Component
const DrillExercise = ({ drill, onComplete, unitTitle }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isListening, isListeningState] = useState(false);
  const [spokenText, setSpokenText] = useState('');

  const handleMultipleChoice = (option) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    const isCorrect = option === drill.correct_answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      if (isCorrect) {
        onComplete(true);
      }
    }, 1500);
  };

  const handleSpeakingStart = () => {
    isListeningState(true);
    setSpokenText('');
    startListening(
      (transcript) => {
        isListeningState(false);
        setSpokenText(transcript);
        const isCorrect = drill.target_words.some(word => transcript.includes(word.toLowerCase()));
        setFeedback(isCorrect ? 'correct' : 'incorrect');

        setTimeout(() => {
          if (isCorrect) onComplete(true);
        }, 1500);
      },
      (error) => {
        isListeningState(false);
        setFeedback('error');
      }
    );
  };

  if (drill.type === 'multiple_choice') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{drill.question}</h3>
        <div className="space-y-3">
          {drill.options.map((option) => (
            <motion.button
              key={option}
              onClick={() => handleMultipleChoice(option)}
              disabled={selectedAnswer !== null}
              whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
              className={`w-full p-4 rounded-lg text-left font-semibold text-lg transition ${
                selectedAnswer === null
                  ? 'bg-gray-100 hover:bg-blue-100 text-gray-800'
                  : option === drill.correct_answer
                  ? 'bg-green-500 text-white'
                  : option === selectedAnswer
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {feedback && option === drill.correct_answer && <Check size={24} />}
                {feedback && option === selectedAnswer && option !== drill.correct_answer && <X size={24} />}
              </div>
            </motion.button>
          ))}
        </div>
        {feedback === 'correct' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-green-100 rounded-lg text-green-800 font-bold text-center">
            🎉 Fantastisch! Correct!
          </motion.div>
        )}
        {feedback === 'incorrect' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-red-100 rounded-lg text-red-800 font-bold text-center">
            Essayez encore!
          </motion.div>
        )}
      </motion.div>
    );
  }

  if (drill.type === 'speaking') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{drill.prompt}</h3>
        <motion.button
          onClick={handleSpeakingStart}
          disabled={isListening}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mx-auto mb-6 p-6 rounded-full transition ${
            isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          <Mic size={40} className="text-white" />
        </motion.button>
        <p className="text-gray-600 mb-4">{isListening ? 'Luisteren...' : 'Klik om te spreken'}</p>
        {spokenText && <p className="text-lg text-gray-800 font-semibold mb-4">Je zei: "{spokenText}"</p>}
        {feedback === 'correct' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-100 rounded-lg text-green-800 font-bold">
            ✓ Excellent!
          </motion.div>
        )}
        {feedback === 'incorrect' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-100 rounded-lg text-red-800 font-bold">
            Probeer opnieuw!
          </motion.div>
        )}
        {feedback === 'error' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-yellow-100 rounded-lg text-yellow-800 font-bold">
            Microfoon probleem. Probeer opnieuw.
          </motion.div>
        )}
      </motion.div>
    );
  }
};

// Unit Phase Component
const UnitPhase = ({ unit, phaseIndex, onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [flipped, setFlipped] = useState({});
  const [phaseStep, setPhaseStep] = useState('vocabulary');
  const [completedDrills, setCompletedDrills] = useState(0);

  const vocabulary = unit.vocabulary;
  const currentWord = vocabulary[currentWordIndex];
  const drillsTotal = unit.drills.length;

  const handleVocabularyNext = () => {
    if (currentWordIndex < vocabulary.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setFlipped({});
    } else {
      setPhaseStep('drill');
    }
  };

  const handleDrillComplete = (isCorrect) => {
    if (isCorrect) {
      const newCompleted = completedDrills + 1;
      setCompletedDrills(newCompleted);

      if (newCompleted === drillsTotal) {
        onComplete();
      }
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {unit.title}
          </h1>
          <p className="text-gray-600 text-lg">{unit.description}</p>
          <div className="flex gap-4 mt-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
              {unit.level}
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm">
              {phaseStep === 'vocabulary' ? 'Vocabulaire' : `Exercices ${completedDrills}/${drillsTotal}`}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width:
                phaseStep === 'vocabulary'
                  ? `${((currentWordIndex + 1) / vocabulary.length) * 50}%`
                  : `${50 + (completedDrills / drillsTotal) * 50}%`
            }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {phaseStep === 'vocabulary' ? (
          <motion.div key={`vocab-${currentWordIndex}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
                Vocabulaire {currentWordIndex + 1} / {vocabulary.length}
              </p>
            </div>

            <VocabularyCard
              word={currentWord}
              isFlipped={flipped[currentWordIndex]}
              onClick={() => setFlipped({ ...flipped, [currentWordIndex]: !flipped[currentWordIndex] })}
            />

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => speak(currentWord.fr)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600 transition"
              >
                <Volume2 size={20} />
                Écouter
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVocabularyNext}
                className="px-8 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition ml-auto"
              >
                {currentWordIndex === vocabulary.length - 1 ? 'Commencer Exercices' : 'Suivant'}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <AnimatePresence mode="wait">
              <DrillExercise
                key={`drill-${completedDrills}`}
                drill={unit.drills[completedDrills % drillsTotal]}
                onComplete={handleDrillComplete}
                unitTitle={unit.title}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Map View Component
const MapView = ({ currentUnitIndex, units, onSelectUnit }) => {
  const currentUnit = units[currentUnitIndex];
  const progress = ((currentUnitIndex + 1) / units.length) * 100;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-purple-50 p-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 text-6xl opacity-10"
        >
          🗺️
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-10 text-5xl opacity-10"
        >
          🚀
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with stats */}
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Route A1: Français
          </h1>
          <p className="text-xl text-gray-600">Du A1.1 au A1.10 - L'aventure commence!</p>

          {/* Progress Stats */}
          <div className="flex gap-8 justify-center mt-8 flex-wrap">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 text-blue-600 font-bold">
                <Award size={24} />
                <span>{currentUnitIndex + 1} / {units.length} complété</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 text-purple-600 font-bold">
                <Zap size={24} />
                <span>{progress.toFixed(0)}% Progression</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="bg-gray-200 h-3 rounded-full overflow-hidden mb-12 shadow-md">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
        </div>

        {/* Unit map - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, index) => {
            const isCompleted = index < currentUnitIndex;
            const isCurrent = index === currentUnitIndex;
            const isLocked = index > currentUnitIndex;

            return (
              <motion.button
                key={unit.id}
                onClick={() => !isLocked && onSelectUnit(index)}
                disabled={isLocked}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={!isLocked ? { scale: 1.05, y: -5 } : {}}
                whileTap={!isLocked ? { scale: 0.98 } : {}}
                className={`relative p-6 rounded-2xl transition-all ${
                  isCompleted
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg'
                    : isCurrent
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl ring-4 ring-yellow-300'
                    : 'bg-gray-200 text-gray-600 cursor-not-allowed opacity-60'
                }`}
              >
                {/* Level badge */}
                <div className="absolute top-2 right-2 text-2xl">{isCurrent ? '🎯' : isCompleted ? '✓' : '🔒'}</div>

                {/* Content */}
                <div className="text-left">
                  <p className="text-sm font-semibold opacity-75 mb-1">{unit.level}</p>
                  <h3 className="text-xl font-bold mb-2">{unit.title}</h3>
                  <p className="text-sm opacity-90">{unit.description}</p>
                </div>

                {/* Stats */}
                <div className="mt-4 pt-4 border-t border-white/20 text-sm font-semibold">
                  {unit.vocabulary.length} mots • {unit.drills.length} exercices
                </div>

                {isCompleted && <div className="absolute inset-0 rounded-2xl bg-green-600/20"></div>}
              </motion.button>
            );
          })}
        </div>

        {/* Current unit info */}
        {currentUnitIndex < units.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-8 bg-white rounded-2xl shadow-xl"
          >
            <div className="flex items-start gap-6">
              <div className="text-5xl">📚</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentUnit.title}</h2>
                <p className="text-gray-600 mb-4">{currentUnit.description}</p>
                <div className="flex gap-6 text-sm text-gray-600">
                  <div>
                    <span className="font-bold text-blue-600">{currentUnit.vocabulary.length}</span> vocabulaire
                  </div>
                  <div>
                    <span className="font-bold text-purple-600">{currentUnit.drills.length}</span> exercices
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => onSelectUnit(currentUnitIndex)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold whitespace-nowrap"
              >
                Commencer →
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Main App Component
export default function RouteA1French() {
  const [view, setView] = useState('map');
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [completedUnits, setCompletedUnits] = useState([]);

  const handleUnitComplete = () => {
    if (!completedUnits.includes(selectedUnitIndex)) {
      setCompletedUnits([...completedUnits, selectedUnitIndex]);
    }

    if (selectedUnitIndex < CURRICULUM.length - 1) {
      setSelectedUnitIndex(selectedUnitIndex + 1);
    } else {
      setView('map');
    }
  };

  const handleSelectUnit = (index) => {
    setSelectedUnitIndex(index);
    setView('unit');
  };

  return (
    <div className="font-sans bg-white">
      <AnimatePresence mode="wait">
        {view === 'map' ? (
          <MapView
            key="map"
            currentUnitIndex={completedUnits.length}
            units={CURRICULUM}
            onSelectUnit={handleSelectUnit}
          />
        ) : (
          <UnitPhase
            key="unit"
            unit={CURRICULUM[selectedUnitIndex]}
            phaseIndex={selectedUnitIndex}
            onComplete={handleUnitComplete}
          />
        )}
      </AnimatePresence>

      {/* Back to map button */}
      {view === 'unit' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setView('map')}
          className="fixed top-8 left-8 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition z-50"
        >
          <MapPin size={24} className="text-gray-700" />
        </motion.button>
      )}
    </div>
  );
}
