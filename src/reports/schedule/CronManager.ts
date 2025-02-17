import { CronTime } from "cron";
import { Cron, HandlerCron } from "./Cron";
import { Reporter } from "../Reporter";

export class CronManager {
  private crons: Record<string, Cron> = {};
  private reporter: Reporter;
  constructor(reporter: Reporter) {
    this.reporter = reporter;
  }
  async stopCron(name: string) {
    const cron = this.get(name);
    await cron.stop();
  }

  async startCron(name: string) {
    const cron = this.get(name);
    await cron.start();
  }

  createCron(scheduling: string | Date, name: string, onTick?: HandlerCron, cronTime?: CronTime) {
    if (this.crons.name) throw new Error(`Name cron[ ${name}] is dupplicated`);
    this.crons[name] = new Cron(this.reporter, scheduling, name, onTick, cronTime);

    return this.get(name);
  }

  get(name: string) {
    if (!this.crons.name) throw new Error(`Not found cron with name = ${name}`);
    return this.crons[name];
  }
}
