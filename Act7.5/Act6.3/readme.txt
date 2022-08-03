Installation du projet 

1 - composer install	

2- php bin/console doctrine:database:create

3 - php bin/console doctrine:migrations:migrate

4- php bin/console doctrine:fixtures:load

5- php bin/console server:run
 
-Générer une clé publique et privée avec une passphrase à reporter dans le .env

$ mkdir -p config/jwt
$ openssl genrsa -out config/jwt/private.pem -aes256 4096
$ openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem


-insérer un user dans la base :
INSERT INTO `user`( `email`, `roles`, `password`) VALUES ('kenza@talan.com','["ROLE_USER"]','$argon2id$v=19$m=65536,t=4,p=1$bG1ta0xFMlRLNG1ad2NTRg$GGYjpn4TyAgCdvGAhB9mijbFTOn1HAxIfIbOrYXEV8w')



 Ouvrir Postman pou tester les routes:
 
pour générer le token : /api/login_check avec la methode POST et dans le body {"username":"kenza@talan.com","password":"kenza123"}
 
 -/articles avec la methode GET pour récuperer tous les articles (route non sécurisée)

 - /api/article/{id} avec la methode GET pour récuperer  l'article avec id bien défini

 - /api/article avec la methode POST pour insérer un article conforme à celui passé via le body de la requete de base

 -/api/article/{id} avec la methode PUT pour insérer ou modifier un article conforme à celui passé via le body de la requete de base

 - /api/lastarticle avec la methode GET Pour récupérer les 3 derniers articles.

 - /api/article/{id} avec la methode DELETE Pour supprimer un article.


