# OCR8

## Contexte du projet:

Kasa nous fournissait le fichier JSON contenant les différentes données nécessaires pour l'affichage des différents appartements.

Leur site étant ancien, ils voulaient lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Ils ont commandé une maquette pour avoir un visuel neuf pour leur site et nous demande de faire le site en React en créant des composants réutilisables.

Parmi les composants demandés: le banner, la card, le collapse et le slideshow.
Le slideshow devait avoir le nombre d'images totales affiché et indiquer à laquelle on était. Si il n'y avait qu'une seule image de l'appartement, le compteur et les flèches du carroussel ne devaient pas apparaître. Un clic sur la flèche droite alors qu'on est à la dernière image devait ramener à la première et un clic sur la flèche gauche alors qu'on est à la première image devait ramener à la dernière image.
Les collapses, par défaut, doivent apparaître fermés. Un clic de l'utilisateur permettra de les ouvrir.

### Pas de github pages cette fois-ci car il n'en permet pas l'affichage
### Mais elle est fonctionnelle sur ce lien: https://kasa-logement.netlify.app/

## Configuration

Ce projet nécessite l'installation de yarn et nodejs.
Lorsque la configuration est faite, il suffit de lancer yarn start dans la partie front-end du projet.
