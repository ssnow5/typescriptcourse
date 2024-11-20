// Code goes here!

abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No new report found");
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    } else {
      AccountingDepartment.instance = new AccountingDepartment("d2", []);
      return this.instance;
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log("Accounting Department - iD: " + this.id);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.describe();
it.addEmployee("Max");
it.addEmployee("Manual");
it.name = "NEW NAME";
// accounting.employees[2] = "Ana";

it.printEmployeeInformation();
it.describe();
console.log(it);

// const accountingCopy = {
//   name: "DUMMY",
//   describe: accounting.describe,
// };

// accountingCopy.describe();

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
const accounting3 = { ...AccountingDepartment.getInstance() };

console.log("Comparing...", accounting === accounting2);
console.log("Comparing...", accounting2 === accounting3);

accounting.mostRecentReport = "Year End Report";
console.log("Most recent report: " + accounting.mostRecentReport);

accounting.addReport("Something to check");
accounting.addEmployee("Max");
accounting.addEmployee("Menu");
accounting.printReports();
accounting.printEmployeeInformation();

const employee1 = Department.createEmployee("Max");
console.log("employee1: ", employee1);
console.log("Deparment Fiscal Year: ", Department.fiscalYear);

accounting.describe();
