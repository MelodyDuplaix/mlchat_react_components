# Onboarding - Bibliothèque de Composants UI

## Contexte
Notre entreprise développe une application RAG (Retrieval-Augmented Generation) entièrement locale pour permettre à nos clients d'exploiter intelligemment leurs bases documentaires sans exposer leurs données sensibles à Internet. Cette application permet de traiter des documents, de les indexer dans une base de connaissances vectorielle, et d'y accéder via une interface utilisateur intuitive, le tout fonctionnant en local sur l'infrastructure du client.

L'application est structurée avec un backend Python (FastAPI) qui gère le traitement des documents, la base de données vectorielle, et l'orchestration du LLM, tandis que le frontend doit fournir une interface utilisateur fluide et réactive.

## Sujet
Votre mission concerne la création d'une **bibliothèque de composants UI réutilisables** pour l'interface utilisateur de notre application RAG. Ces composants doivent être modulaires, maintenables, et respecter les normes modernes de développement frontend.

**Pourquoi c'est important :** Une bibliothèque de composants bien conçue permettra :
- D'accélérer le développement de l'application finale
- D'assurer une cohérence visuelle et fonctionnelle
- De faciliter la maintenance et les évolutions futures
- D'améliorer l'expérience utilisateur globale

## Objectifs
1. **Créer une bibliothèque de 5-7 composants React essentiels** pour l'application RAG d'ici la fin du stage (2 semaines)
   * Composant de chat interactif avec historique et formatage Markdown
   * Interface de téléchargement et gestion de documents
   * Visualisation des sources de réponses
   * Affichage des métriques de performance
   * Composants de navigation et layout

2. **Documenter chaque composant** avec Storybook, incluant :
   * Cas d'utilisation
   * Props disponibles
   * Exemples interactifs

3. **Intégrer les composants avec Tailwind CSS** pour un design cohérent et responsive

4. **Tester l'intégration avec l'API backend** via des mocks dans un premier temps

## Fondamentaux Techniques Généraux
1. **Framework JavaScript** : React 18+
   * Documentation officielle : [https://react.dev/](https://react.dev/)
   * Tutoriel pratique : [https://fr.reactjs.org/tutorial/tutorial.html](https://fr.reactjs.org/tutorial/tutorial.html)

2. **Styling** : Tailwind CSS
   * Documentation : [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
   * Cheatsheet : [https://nerdcave.com/tailwind-cheat-sheet](https://nerdcave.com/tailwind-cheat-sheet)

3. **État et Architecture** : React Hooks & Context API
   * Hooks : [https://react.dev/reference/react](https://react.dev/reference/react)
   * Context : [https://react.dev/learn/passing-data-deeply-with-context](https://react.dev/learn/passing-data-deeply-with-context)

4. **Organisation du Projet** : Structure modulaire
   * Article sur les bonnes pratiques : [https://www.robinwieruch.de/react-folder-structure/](https://www.robinwieruch.de/react-folder-structure/)

## Fondamentaux Techniques Spécifiques
1. **Documentation de composants** : Storybook
   * Site officiel : [https://storybook.js.org/](https://storybook.js.org/)
   * Tutoriel : [https://storybook.js.org/tutorials/intro-to-storybook/react/fr/get-started/](https://storybook.js.org/tutorials/intro-to-storybook/react/fr/get-started/)

2. **Gestion des formulaires** : React Hook Form
   * Documentation : [https://react-hook-form.com/](https://react-hook-form.com/)
   * Exemples : [https://react-hook-form.com/get-started](https://react-hook-form.com/get-started)

3. **Visualisation de chat** : react-markdown + react-syntax-highlighter
   * react-markdown : [https://github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)
   * react-syntax-highlighter : [https://github.com/react-syntax-highlighter/react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

4. **Testing des composants** : React Testing Library
   * Documentation : [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)

5. **Communication avec l'API** : Axios ou React Query
   * Axios : [https://axios-http.com/fr/docs/intro](https://axios-http.com/fr/docs/intro)
   * React Query : [https://tanstack.com/query/latest](https://tanstack.com/query/latest)

## Livrables
1. **Dépôt Git** contenant la bibliothèque de composants avec structure claire
2. **Documentation Storybook** déployée et accessible
3. **Application de démonstration** montrant l'intégration des composants
4. **Tests unitaires** pour chaque composant
5. **Guide d'utilisation** détaillant comment intégrer les composants dans l'application principale

## Documentation
1. **README.md** complet avec :
   * Description du projet
   * Instructions d'installation et d'utilisation
   * Structure du projet
   * Dépendances et versions

2. **Documentation technique** pour chaque composant :
   * Objectif et fonctionnalités
   * Interface (props, events, etc.)
   * Exemples d'utilisation
   * Limitations connues

3. **Notes de développement** :
   * Choix techniques et justifications
   * Difficultés rencontrées et solutions
   * Optimisations possibles

4. **Guide de contribution** pour les futurs développeurs :
   * Conventions de code
   * Workflow Git
   * Processus de test et de validation

---

N'hésitez pas à poser des questions et à demander des clarifications tout au long de votre stage. Des points quotidiens seront organisés pour suivre votre progression et lever les éventuels blocages.