# Angulartp1
M2 INF-DL

# Développement orienté Front-Office JavaScript (DevOpJS)

## Travaux pratiques

Le but sera de réaliser une application Angular, certes simple mais qui permettra de voir
l’ensemble des concepts d’une Single Page Application et de composants web.

Cette application permettra de gérer les fiches d’animaux, patients dans une clinique
vétérinaire. Elle permettra aussi d’administrer une liste de vétérinaire. Une correction
sommaire sera disponible sur GitHub : https://github.com/VincentRoth/ups2021-angular.
Elle vous permettra de comparer votre travail ou de repartir d’un point particulier des TPs.

_Si vous connaissez déjà Angular, profitez-en pour découvrir des librairies ou des modules
d’Angular. Mettez en place dès le début Angular Material, qui sera vu en session 5 et réalisez
les étapes optionnelles à votre convenance. Vous pouvez aussi étendre les fonctionnalités
simples proposées, par exemple en ajoutant un module de gestion des rendez-vous._

Le modèle de données utilisée est le suivant.
Un exemple de donnée est disponible au format JSON sur le dépôt Git, il servira pour la mise
en place de json-server.

La fiche d’un animal contiendra, à minima :

- le nom de l’animal
- son espèce
- un commentaire de suivi
- l’association avec un vétérinaire traitant
- le mél de contact du propriétaire
- le numéro de téléphone du propriétaire.

Un vétérinaire a, à minima :

- un nom
- un prénom

## Session 1 – Nouvelle Application

Créer une application Angular avec @angular/cli.
_Optionnel : ajouter Angular Material, sera vu en session 5_
Création du module relatif aux animaux et d’un composant pour afficher une fiche d’un
animal.
Création d’un service pour gérer l’obtention d’une fiche, pour l’instant en dur dans
l’application.

## Session 2 – Structure et API back-end

Utiliser les directives structurelles pour afficher une liste de fiches d’animaux.
Utiliser une directive d’attribut pour gérer l’attribut href d’une balise <a>.
Créer un pipe pour formater le numéro de téléphone par paire de caractère.

Utiliser un composant pour la liste et un pour l’affichage d’une fiche dans la liste.
Utiliser un bouton pour supprimer une fiche de la liste.

Mettre en place un serveur avec json-server et configurer le proxy d’Angular CLI pour
rediriger les requêtes /api.
Utiliser HttpClient dans le service pour faire toutes les opérations CRUD sur les fiches.
_Optionnel : mettre en place un intercepteur pour mesurer le temps que prennent les requêtes._

## Session 3 – Routage

Mettre en place le routage avec RouterModule.
Laisser au module animal la responsabilité de ses routes enfants.
Créer le module relatif aux vétérinaires avec routage asynchrone. Le module sera
responsable de la gestion des vétérinaires.

## Session 4 – Formulaires

Créer le formulaire de création d’une fiche avec le formulaire dans le template.
_Optionnel : utiliser ce même composant pour l’édition d’une fiche_
Créer le formulaire de création d’un vétérinaire avec le formulaire réactif.
Ajouter les validations aux formulaires et ne pas envoyer de requête HTTP si le formulaire
n’est pas valide.

## Session 5 – Test et librairies

Faire passer en succès les tests unitaires de l’application.
Mettre en place Angular Material et utiliser des composants pour habiller l’application (par
exemple ToolBar et Card).
_Optionnel : Utiliser ngx-translate ou Angular i18n pour traduire l’application.
Optionnel : Ajouter le module PWA d’Angular et déployer l’application sur un serveur (par
exemple Heroku avec GitHub et Node.js) pour tester l’installation sur un smartphone._
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
