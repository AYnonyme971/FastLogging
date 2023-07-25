const FastLogging = require("fastlogging");
const logger = new FastLogging(true, true); // All the features
// Now use it like you wan!

logger.info("Hi!", 5, true);
// Display "Hi!" 5 times and return the time for each log (1, 2, 3, 4, 5) in blue

logger.warn("Don't lose time!", 5);
// Display the message 5 times in yellow

logger.error("An error!");
// Display "An error!" 1 time in red

logger.success("Completed!");
// Display "Completed!" 1 time in green

// If you simply want to log, but with the features:
logger.log("I'm displayed", 2);
// Display "I'm displayed" 2 times

logger.debug("I'm displayed", 2);
// Same as .log, but in italic
