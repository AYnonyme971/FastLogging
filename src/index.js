require("colors");

class FastLog {
  constructor(timestamp = false, complete = false) {
    if (typeof timestamp != "boolean") {
      console.log(
        'Le type de "timestamp" n\'est pas un boolean !\nArrêt du processus'
      );
      process.exit(1);
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
    if (typeof message != "string" && typeof message != "number") {
      throw new TypeError(
        'Le type de "message" n\'est pas un string ou un nombre !'
      );
    }
    if (typeof times != "number") {
      throw new TypeError('Le type de "times" n\'est pas un nombre !');
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
    if (typeof message != "string" && typeof message != "number") {
      throw new TypeError(
        'Le type de "message" n\'est pas un string ou un nombre !'
      );
    }
    if (typeof times != "number") {
      throw new TypeError('Le type de "times" n\'est pas un nombre !');
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
    if (typeof message != "string" && typeof message != "number") {
      throw new TypeError(
        'Le type de "message" n\'est pas un string ou un nombre !'
      );
    }
    if (typeof times != "number") {
      throw new TypeError('Le type de "times" n\'est pas un nombre !');
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
    if (typeof message != "string" && typeof message != "number") {
      throw new TypeError(
        'Le type de "message" n\'est pas un string ou un nombre !'
      );
    }
    if (typeof times != "number") {
      throw new TypeError('Le type de "times" n\'est pas un nombre !');
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
    if (typeof message != "string" && typeof message != "number") {
      throw new TypeError(
        'Le type de "message" n\'est pas un string ou un nombre !'
      );
    }
    if (typeof times != "number") {
      throw new TypeError('Le type de "times" n\'est pas un nombre !');
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
    if (typeof message != "string" && typeof message != "number") {
      throw new TypeError(
        'Le type de "message" n\'est pas un string ou un nombre !'
      );
    }
    if (typeof times != "number") {
      throw new TypeError('Le type de "times" n\'est pas un nombre !');
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
