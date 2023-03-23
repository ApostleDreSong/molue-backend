module.exports = [{
    script: './build/index.js',
    name: 'molue-backend',
    exec_mode: 'cluster',
    instances: 2
  }, {
    script: 'worker.js',
    name: 'worker'
  }]