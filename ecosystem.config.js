module.exports = {
  apps: [{
    name: "client",
    script: 'npm start',
    interpreter: '/home/ubuntu/.nvm/versions/node/v14.21.3/bin/node'
  }],
  deploy: {
    production: {
      key: 'Catsus.pem',
      user: 'ubuntu',
      host: '54.160.180.60',
      ref: 'origin/main',
      repo: 'git@github.com:codecallogic/ceas.git',
      path: '/home/ubuntu/client',
      'post-deploy': 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" && nvm use 14.21.3 && npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
