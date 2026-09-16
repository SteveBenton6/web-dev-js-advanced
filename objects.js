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

const teams = ["Reading", "Cambridge United"];
const [local, traditional] = teams;
console.log(local);
console.log(traditional);

const club = { team: "Reading", stadium: "Select Car Leasing" };
const { team: teamName, stadium } = club;
console.log(teamName);
console.log(stadium);
