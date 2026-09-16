// Job Blueprint

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`,
    );
  }
}

const coder = new Job("Coder", "Reading", 35000);
const gardener = new Job("Gardener", "Wokingham", 25000);

console.log(coder);
coder.describe();
gardener.describe();
