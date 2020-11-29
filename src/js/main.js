// IMPORTS ---------------------
import section from './components/section.js'
import container from './components/container.js'
import navbar from './components/navbar.js'
import feature from './components/feature.js'
import mystack from './components/mystack.js'
import projects from './components/projects.js'
//COMPONENTS ---------------------
Vue.component('vue-section', section);
Vue.component('vue-container', container);
Vue.component('vue-navbar', navbar);
Vue.component('vue-feature', feature);
Vue.component('vue-mystack', mystack);
Vue.component('vue-projects', projects);
//VUE ---------------------
new Vue({
	el: '#app',
	data: {
		works: [
			{
				id: 1,
				title: 'Le site de l\'association d\'aide à domicile AID83',
				coverImage: './assets/img/aid83/preview.jpg',
				coverTitle: 'Image du site Aid83',
				coverAlt:'AID83',
				moreInfos: 'La création de ce site vitrine a débuté en 2009 en partant du cahier des charges de l\'association. Il y a eu plusieurs versions au fil du temps notamment sous Joomla puis Wordpress pour finir par une version "light" plus rapide et complètement responsive. Le site dispose d\'un formulaire de demande de devis et de candidature en ligne.',
				stack: 'HTML5, CSS3, UI Kit, PHP',
				url: 'https://www.aid83.org/',
				github:'https://github.com/LionelENSFELDER/aid83-v2'
			},
			{
				id: 2,
				title: 'Site  vitrine massages sportifs et sophrologie',
				coverImage: './assets/img/sophromassage/preview.jpg',
				coverTitle: 'Image du site Sophromassage',
				coverAlt:'Sophromassage',
				moreInfos: 'Site vitrine Wordpress fait à partir d\'un thème enfant lui même basé sur un thème Bootstrap v4 (WP Bootstrap Starter). Ce site a été réalisé en mode "nomade" en utilisant Docker, Apache et MySQL pour créer un environement de développement sur clé usb. Le maquettage a été réalisé avec Figma. Ce site est entièrement responsive.',
				stack: 'HTML5, CSS3, Bootstrap, Wordpress, Apache, SQL',
				url: './assets/img/sophromassage/full.jpg',
				github:'https://github.com/LionelENSFELDER/sophromassage'
			},
			{
				id: 3,
				title: 'Gestion des informations d\'une base de données dédiée aux films',
				coverImage: './assets/img/moviesmanager/preview.jpg',
				coverTitle: 'Image du projet Movies Manager',
				coverAlt:'Movies Manager',
				alt:'Movies Manager',
				moreInfos: 'Ce projet a été développé dans le cadre du passage de la certification développeur web et web mobile. Il utilise un serveur Apache et une base de données SQL pour stoquer des informations sur des films. La partie front est basée sur Bootstrap et est entièrement adaptable aux terminaux mobiles.' ,
				stack: 'HTML5, CSS3, Bootstrap, PHP, Apache, SQL',
				url: './assets/img/moviesmanager/preview.jpg',
				github:'https://github.com/LionelENSFELDER/movies-manager'
			},
			{
				id: 5,
				title: 'Liste de tâches "full web" en Vue.js',
				coverImage: './assets/img/vuetodolist/preview.jpg',
				coverTitle: 'Image du projet Vue todolist',
				coverAlt:'Vue todolist',
				alt:'Vue todolist',
				moreInfos: 'Une liste de tâche éphémère en Vue.js (v2) permettant de trier les tâches.' ,
				stack: 'HTML5, CSS3, Bootstrap, Javascript, Vue, Gulp',
				url: 'https://vue-todolist-pi.vercel.app/',
				github:'https://github.com/LionelENSFELDER/vue-todo'
			},
			{
				id: 7,
				title: 'Recherche de films et affichage des informations via API',
				coverImage: './assets/img/react-movies-seeker/preview.jpg',
				coverTitle: 'Image du projet React movies seeker',
				coverAlt:'React movies seeker',
				alt:'React movies seeker',
				moreInfos: 'Une interface web simple et adaptable permettant de rechercher des films, de visualiser les informations associées et de les trier par catégogie. Elle utilise la v3 de l\'API themoviedb.org. ' ,
				stack: 'HTML5, CSS3, Bootstrap, Javascript, React, API',
				url: 'https://react-movies-seeker.vercel.app/',
				github:'https://github.com/LionelENSFELDER/react-movies-seeker'
			},
			{
				id: 8,
				title: 'Site consacré aux claviers mécaniques',
				coverImage: './assets/img/mechanical-switches/preview.jpg',
				coverTitle: 'Image du projet Mechanical switches',
				coverAlt:'Mechanical switches',
				alt:'Mechanical switches',
				moreInfos: 'Je me suis pris de passion pour les claviers mécanique et leurs construction. J\'ai donc décidé de crée un site vitrine destiné à aider dans la compréhension et le choix d\'un clavier mécanique' ,
				stack: 'HTML5, CSS3, Bootstrap, Javascript',
				url: 'https://mechanical-switches.vercel.app/',
				github:'https://github.com/LionelENSFELDER/mechanical-switches'
			}
		]
	}
})