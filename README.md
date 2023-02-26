1. `bundle install`
1. `rails db:migrate`
1. `rails db:seed`
1. `rails s`
1. `bundle install && npm start`

climbing-logbook-backend
climbing-logbook-frontend

* in backend bundle install, rails s
* in frontend npm start
* in frontend npm install, then npm start
* make sure you have ruby, rails, node installed
* mimemagic is deprecated => remove Gemfile and create new one with bundle install
* export NODE_OPTIONS=--openssl-legacy-provider in frontend side then npm start


worked with ruby 2.7.7 and node/npm version lts/fermium (14.something)
rbenv install 2.7.7
nvm use lts/carbon
npm install