from fabric.api import *
import os

env.hosts = ['opal4.opalstack.com']
env.user = 'soriamatt'
env.path = '~/Sites/ms2019'
env.remotepath = '/home/soriamatt/apps/ms2019'
env.git_branch = 'master'
env.warn_only = True
env.remote_protocol = 'http'

def production():
  env.hosts = ['mattsoria.com']
  env.user = 'soriamatt'
  env.remotepath = '/home/soriamatt/apps/ms2019'
  env.git_branch = 'master'
  env.remote_protocol = 'https'

def devsetup():
  print "Installing composer, node and bower assets...\n"
  local('composer install')
  local('npm install')
  local('cd assets && bower install')
  local('npx gulp')
  local('cp .env-example .env')
  print "OK DONE! Hello? Are you still awake?\nEdit your .env file with local credentials\nRun `npx gulp watch` to run local gulp to compile & watch assets"

# def syncstaging():
#   with cd(env.remotepath):
#     run('/usr/bin/mysqldump --defaults-extra-file=/home/soriamatt/etc/.my.cnf -u ms2019 ms2019 | /usr/bin/mysql --defaults-extra-file=/home/soriamatt/etc/.my.cnf -u ms2019 ms2019')
#     run('/usr/bin/rsync -av --delete /home/soriamatt/webapps/ms2019/web/uploads/ /home/soriamatt/apps/ms2019/web/uploads/')

def deploy(composer='y', assets='y'):
  update()
  if composer == 'y':
    composer_install()
  # build and sync production assets
  if assets != 'n':
    local('rm -rf web/assets/dist')
    local('yarn build:production')
    run('mkdir -p ' + env.remotepath + '/web/assets/dist')
    put('web/assets/dist', env.remotepath + '/web/assets/')

def update():
  with cd(env.remotepath):
    run('git pull origin {0}'.format(env.git_branch))

def composer_install():
  with cd(env.remotepath):
    run('~/bin/composer.phar install')

# def clear_cache():
#   run ('curl -vs -o /dev/null {0}://{1}/actions/cacheClear/clear?key=fbclear > /dev/null 2>&1'.format(env.remote_protocol, env.hosts[0]))
