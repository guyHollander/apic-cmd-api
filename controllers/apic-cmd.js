const child_process = require('child_process');
const { spawn } = require('child_process');

exports.login = function(req, res) {
  // var envObj = {env:{}};
  var user =  req.query.username;
  var pass =  req.query.password;
  var server =  req.query.server;

  // console.log(req);
  var login = spawn('apic', ['login', '--username', user, '--password', pass, '--server', server]);
  console.log(login.spawnargs.join(' '));

  login.stdout.on('data', (data)=> {
    res.send({"result": data.toString()});
  })

  login.stderr.on('data', (data)=> {
    res.send({"result": data.toString()});
  })

  login.on('close', (code)=> {
      console.log(`child process %s exited with code ${code}` , login.spawnargs.join(' '));
  })

};




exports.apis_set = function(req, res) {

  var status = req.query.status;
  var catalog = req.query.catalog;
  var organization = req.query.organization;
  var server = req.query.server;
  var apisObj = req.params.object

  var set = spawn('apic', ['apis:set', apisObj, '--status', status , '--catalog', catalog, '--organization', organization,'--server', server]);
  console.log(set.spawnargs.join(' '));

  set.stdout.on('data', (data)=> {
    res.send({"result": data.toString()});
  })

  set.stderr.on('data', (data)=> {
    res.send({"result": data.toString()});
  })

  set.on('close', (code)=> {
  })

};
