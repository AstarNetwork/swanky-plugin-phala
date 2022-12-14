import {Command, Flags} from '@oclif/core'
import execa from "execa";
import path = require("node:path")
import { Spinner } from "@astar-network/swanky-core";

export default class PhalaTypings extends Command {
  static description = 'Typings'

  static examples = [
    '<%= config.bin %> <%= command.id %> [contractName] [--watch]',
  ]

  static flags = {
    verbose: Flags.boolean({ char: "v" }),
  };

  static args = [
    {
      name: "contractName",
      required: true,
      description: "contract name of phat contract",
    },
    {
      name: "watchFlag",
      required: false,
      description: "watch for changes"
    }
  ];

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(PhalaTypings)
    const spinner = new Spinner(flags.verbose);
    const projectPath = path.resolve()

    this.log(`Create type bindings for contracts`)
    await spinner.runCommand(
      () => execa.command(`yarn devphase typings ${args.contractName} ${args.watchFlag}`, { cwd: projectPath }),
      `Creating type bindings for Phat Contract ${args.contractName}`
    )

    this.log("Phat Contract typings created successfully!");
  }
}
