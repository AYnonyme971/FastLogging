require("colors");

class FastLog {
  constructor(timestamp = false, complete = false) {
    if (typeof timestamp != "boolean") {
      return new TypeError('"timestamp" parameter is not a boolean!');
    }
    this.timestamp = timestamp;
    this.completeTimestamp = complete;
  }
  getDate() {
    if (this.completeTimestamp == true) {
      return Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
        timeStyle: "medium",
      })
        .format(Date.now())
        .split("/")
        .join("-")
        .split(",")
        .join("");
    } else {
      return Intl.DateTimeFormat(undefined, {
        timeStyle: "medium",
      })
        .format(Date.now())
        .split("/")
        .join("-")
        .split(",")
        .join("");
    }
  }
  log(message, times = 1, returnTimes = false) {
    if (typeof times != "number") {
      throw new TypeError('"times" parameter is not a number!');
    }
    if (typeof returnTimes != "boolean") {
      throw new TypeError('"returnTimes" paramter is not a boolean!');
    }
    for (let i = 0; i < times; i++) {
      if (returnTimes) {
        console.log(
          `${i + 1}. ${
            this.timestamp == true ? "[" + this.getDate() + "]" : ""
          } ${message}`
        );
      } else {
        console.log(
          `${
            this.timestamp == true
              ? "[" + this.getDate() + "]" + " " + message
              : message
          }`
        );
      }
    }
  }
  info(message, times = 1, returnTimes = false) {
    if (typeof times != "number") {
      throw new TypeError('"times" parameter is not a number!');
    }
    if (typeof returnTimes != "boolean") {
      throw new TypeError('"returnTimes" paramter is not a boolean!');
    }
    for (let i = 0; i < times; i++) {
      if (returnTimes) {
        console.info(
          `${i + 1}. `.white +
            `${
              this.timestamp == true
                ? "[" + this.getDate() + "]" + " " + message
                : message
            }`.blue
        );
      } else {
        console.info(
          `${
            this.timestamp == true
              ? "[" + this.getDate() + "]" + " " + message
              : message
          }`.blue
        );
      }
    }
  }
  warn(message, times = 1, returnTimes = false) {
    if (typeof times != "number") {
      throw new TypeError('"times" parameter is not a number!');
    }
    if (typeof returnTimes != "boolean") {
      throw new TypeError('"returnTimes" paramter is not a boolean!');
    }
    for (let i = 0; i < times; i++) {
      if (returnTimes) {
        console.warn(
          `${i + 1}. `.white +
            `${
              this.timestamp == true
                ? "[" + this.getDate() + "]" + " " + message
                : message
            }`.yellow
        );
      } else {
        console.warn(
          `${
            this.timestamp == true
              ? "[" + this.getDate() + "]" + " " + message
              : message
          }`.yellow
        );
      }
    }
  }
  error(message, times = 1, returnTimes = false) {
    if (typeof times != "number") {
      throw new TypeError('"time" parameter is not a number!');
    }
    if (typeof returnTimes != "boolean") {
      throw new TypeError('"returnTimes" paramter is not a boolean!');
    }
    for (let i = 0; i < times; i++) {
      if (returnTimes) {
        console.error(
          `${i + 1}. `.white +
            `${
              this.timestamp == true
                ? "[" + this.getDate() + "]" + " " + message
                : message
            }`.red
        );
      } else {
        console.error(
          `${
            this.timestamp == true
              ? "[" + this.getDate() + "]" + " " + message
              : message
          }`.red
        );
      }
    }
  }
  debug(message, times = 1, returnTimes = false) {
    if (typeof times != "number") {
      throw new TypeError('"times" parameter must be a number!');
    }
    if (typeof returnTimes != "boolean") {
      throw new TypeError('"returnTimes" paramter is not a boolean!');
    }
    for (let i = 0; i < times; i++) {
      if (returnTimes) {
        console.debug(
          `${i + 1}. `.white +
            `${
              this.timestamp == true
                ? "[" + this.getDate() + "]" + " " + message
                : message
            }`.italic
        );
      } else {
        console.debug(
          `${
            this.timestamp == true
              ? "[" + this.getDate() + "]" + " " + message
              : message
          }`.italic
        );
      }
    }
  }
  success(message, times = 1, returnTimes = false) {
    if (typeof times != "number") {
      throw new TypeError('"times" paramter is not a number!');
    }
    if (typeof returnTimes != "boolean") {
      throw new TypeError('"returnTimes" paramter is not a boolean!');
    }
    for (let i = 0; i < times; i++) {
      if (returnTimes) {
        console.log(
          `${i + 1}. ${
            this.timestamp == true ? "[" + this.getDate() + "]" : ""
          } ${message}`.green
        );
      } else {
        console.log(
          `${
            this.timestamp == true
              ? "[" + this.getDate() + "]" + " " + message
              : message
          }`.green
        );
      }
    }
  }
}

module.exports = FastLog;
