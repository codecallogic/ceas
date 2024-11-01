module.exports = {
  apps : [{
    name: "client",
    script: 'npm start'
  }],

  deploy : {
    production : {
      key  : 'Catsus.pem',
      user : 'ubuntu',
      host : '54.160.180.60',
      ref  : 'origin/main',
      repo : 'git@github.com:codecallogic/ceas.git',
      path : '/home/ubuntu/client',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && nvm use 14.21.3 && npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
}