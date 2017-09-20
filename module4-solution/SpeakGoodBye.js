// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {

    // Create an object, called 'byeSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    var byeSpeaker = {};
    
    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";
    
    // Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    byeSpeaker.speak = function speak(name) {
      console.log(speakWord + " " + name);
    }
    
    // Expose the 'byeSpeaker' object to the global scope. Name it
    // 'byeSpeaker' on the global scope as well.
    window.byeSpeaker = byeSpeaker;

})(window);