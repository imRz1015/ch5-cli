#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
import commander, { program } from 'commander'
import { createRequire } from 'module'
import create from '../lib/create.js'
const require = createRequire(import.meta.url)
program
  .command('create <app-name>')
  .description('create a new project')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    create(name, options)
  })

program
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

//解析用户执行命令的时候输入的参数
program.parse(process.argv)