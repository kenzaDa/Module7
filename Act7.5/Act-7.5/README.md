# Act 7.5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.


Cloner le projet 6.3 https://github.com/kenzaDa/Module6/tree/main/Act6.3 

Installation du projet 

1 - composer install	

2- php bin/console doctrine:database:create

3 - php bin/console doctrine:migrations:migrate

4- php bin/console doctrine:fixtures:load

-insérer un user dans la base :
INSERT INTO `user`( `email`, `roles`, `password`) VALUES ('kenza@talan.com','["ROLE_USER"]','$argon2id$v=19$m=65536,t=4,p=1$bG1ta0xFMlRLNG1ad2NTRg$GGYjpn4TyAgCdvGAhB9mijbFTOn1HAxIfIbOrYXEV8w')

5- php bin/console server:run
 
-Générer une clé publique et privée avec une passphrase à reporter dans le .env

$ mkdir -p config/jwt
$ openssl genrsa -out config/jwt/private.pem -aes256 4096
$ openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem







 
pour générer le token : /login se connecter avec email: "kenza@talan.com" et mpd: "kenza123"
se déplacer dans le projet angular 
cd ..
cd Act-7.5
 puis lancer les commandes dans le projet angular: 
1- npm install
2- ng serve --o