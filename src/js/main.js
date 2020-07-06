// SCRIPTS LOADING ---------------------
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;  
    document.body.appendChild(script); 
}
// jquery must be include before bootstrap
dynamicallyLoadScript('./src/js/utils/bootstrap.bundle.min.js');
dynamicallyLoadScript('./src/js/utils/carousel.js');
dynamicallyLoadScript('./src/js/utils/animations.js');
dynamicallyLoadScript('./src/js/utils/work.filter.js');

// IMPORTS ---------------------
import navbar from './components/navbar.js'
import navitem from './components/navitem.js'
import section from './components/section.js'
import container from './components/container.js'
import feature from './components/feature.js'
import stack from './components/stack.js'
import stackCategory from './components/stackCategory.js'
import swiperCarousel from './components/swiperCarousel.js'
import CarouselTestimonial from './components/CarouselTestimonial.js'
import CarouselTestimonialItem from './components/CarouselTestimonialItem.js'
import contact from './components/contact.js'
import contactItem from './components/contactItem.js'
import footer from './components/footer.js'
import projects from './components/projects.js'

//COMPONENTS ---------------------
Vue.component('vue-navbar', navbar);
Vue.component('vue-navbar-item', navitem);
Vue.component('vue-section', section);
Vue.component('vue-container', container);
Vue.component('vue-feature', feature);
Vue.component('vue-stack', stack);
Vue.component('vue-stack-category', stackCategory);
Vue.component('vue-swiper-carousel', swiperCarousel);
Vue.component('vue-carousel-testimonial', CarouselTestimonial);
Vue.component('vue-carousel-testimonial-item', CarouselTestimonialItem);
Vue.component('vue-contact', contact);
Vue.component('vue-contact-item', contactItem);
Vue.component('vue-footer', footer);
Vue.component('vue-projects', projects);

//VUE ---------------------
new Vue({
	el: '#app',
	data: {
		navitems: [{
				id: 1,
				text: 'QUI SUIS-JE ?',
				url: '#quisuisje'
			},
			{
				id: 2,
				text: 'TECHNOLOGIES',
				url: '#technologies'
			},
			// {
			// 	id: 3,
			// 	text: 'PARCOURS',
			// 	url: '#parcours'
			// },
			{
				id: 4,
				text: 'REALISATIONS',
				url: '#realisations'
			},
			{
				id: 5,
				text: 'TEMOIGNAGES',
				url: '#temoignages'
			},
			{
				id: 6,
				text: 'CONTACT',
				url: '#contact'
			}
		],
		footeritems: [{
				id: 1,
				text: 'dfsfdgdfg',
				url: 'wwww.google.com'
			},
			{
				id: 2,
				text: 'dfgfdg gfdg ',
				url: 'wwww.google.com'
			},
			{
				id: 3,
				text: 'fdgdfggfdfg dfgdfg',
				url: 'wwww.google.com'
			}
		],
		formations:[
			{
				id: 1,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'AFPA',
				date: '2019',
				job: 'Développeur Web et Web Mobile (RNCP niv. 5, anciennement niv. III)',
				description: 'Développeur Web et Web Mobile (RNCP niv. 5, anciennement niv. III).',
				urlText: '',
				url: ''
			},
			{
				id: 2,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '2014',
				job: 'Mise en oeuvre - Routeurs Cisco.',
				description: 'Mise en oeuvre - Routeurs Cisco.',
				urlText: '',
				url: ''
			},
			{
				id: 3,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '2009',
				job: 'Réseaux locaux / TCP / IP.',
				description: 'Réseaux locaux / TCP / IP.',
				urlText: '',
				url: ''
			},
			{
				id: 4,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '2008',
				job: 'Technicien informatique et télécoms (SITEL).',
				description: 'Technicien informatique et télécoms (SITEL).',
				urlText: '',
				url: ''
			},
			{
				id: 5,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'GRETA',
				date: '2007',
				job: 'Certification en maintenance informatique.',
				description: 'Certification en maintenance informatique.',
				urlText: '',
				url: ''
			},
			{
				id: 6,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Lycée Frantz Fanon',
				date: '2006',
				job: 'B.E.P électrotechnique.',
				description: 'B.E.P électrotechnique.',
				urlText: '',
				url: ''
			}
		],
		experiences: [{
				id: 1,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Uziit',
				date: '2 mois',
				job: 'Développeur web',
				description: 'Amélioration de l\'interface utilisateur. Récupération des données sur l\’API Rest de la Blockchain. Stockage des avis mis en avant dans la base MySQL.',
				urlText: 'uziit.biz',
				url: 'https://www.uziit.biz/'
			},
			{
				id: 2,
				icon: '<i class="las la-wrench font-spanish display-4 rounded-lg"></i>',
				company: 'Monnaie Services',
				date: '1 an',
				job: 'Technicien informatique',
				description: 'Montage, configuration et maintenance de bornes tactiles. Administration et support de niveau 2',
				urlText: 'monnaie-services.com',
				url: 'https://www.monnaie-services.com/'
			},
			{
				id: 3,
				icon: '<i class="las la-network-wired font-spanish display-4 rounded-lg"></i>',
				company: 'Free Infrastructures',
				date: '4 mois',
				job: 'Technicien fibre',
				description: 'Installation de réseaux fibres optique. Gestion des incidents niveaux 2.',
				urlText: 'free.fr',
				url: 'https://www.free.fr/freebox/fibre-optique'
			},
			{
				id: 4,
				icon: '<i class="las la-anchor font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '9 ans',
				job: 'Technicien réseaux et télécoms',
				description: 'Administration et maintenance des réseaux fibre et satellite. Administrations de serveurs et support niveau 2. Rédaction de documentations technique.',
				urlText: 'defense.gouv.fr',
				url: 'https://www.defense.gouv.fr/marine'
			}
		],
		works: [
			{
				id: 1,
				target: 'aid83',
				targetId: '#aid83',
				title: 'AID83',
				coverImage: './assets/img-compressed/aid83-preview.jpg',
				coverTitle: 'Image du site Aid 83',
				coverAlt:'AID83',
				client: 'AID83',
				date: '2018',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				moreInfos: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf. aluh rethem fathum rictum ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh',
				stack: 'Wordpress, Bootstrap, Docker',
				tags: "PHP" ,
				url: 'https://www.aid83.org/',
				github:'https://github.com/LionelENSFELDER/aid83-v2'
			},
			{
				id: 2,
				target: 'sophromassage',
				targetId: '#sophromassage',
				title: 'Sophromassage',
				coverImage: './assets/img-compressed/sophromassage-preview.jpg',
				coverTitle: 'Image du site Sophromassage',
				coverAlt:'Sophromassage',
				client: 'Eléonore Hottou',
				date: '2019',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				moreInfos: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf. aluh rethem fathum rictum ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh',
				stack: 'Wordpress, Bootstrap, Docker',
				tags: "Wordpress" ,
				url: './assets/img-compressed/sophromassage.png',
				github:'https://github.com/LionelENSFELDER/sophromassage'
			},
			{
				id: 3,
				target: 'portfolio',
				targetId: '#portfolio',
				title: 'Portfolio',
				coverImage: './assets/img-compressed/portfolio-preview.jpg',
				coverTitle: 'Image du portfolio',
				coverAlt:'Portfilio de Lionel Ensfelder',
				alt:'aid83',
				client: 'Lionel Ensfelder',
				date: '2020',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				moreInfos: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf. aluh rethem fathum rictum ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh',
				stack: 'Wordpress, Bootstrap, Docker',
				tags: "Vue",
				url: '#',
				github:'https://github.com/LionelENSFELDER/about-me'
			},
			{
				id: 4,
				target: 'miiniimaal-weather',
				targetId: '#miiniimaal-weather',
				title: 'Miiniimaal Weather',
				coverImage: './assets/img-compressed/miiniimaal-weather-preview.jpg',
				coverTitle: 'Image du projet Miiniimaal Weather',
				coverAlt:'',
				alt:'Miiniimaal Weather',
				client: 'Lionel Ensfelder',
				date: '2020',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				moreInfos: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf. aluh rethem fathum rictum ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh ipsum lodum casum faluh',
				stack: 'Wordpress, Bootstrap, Docker',
				tags: "Javascript",
				url: 'https://lionelensfelder.github.io/miiniimaal-weather/',
				github:'https://github.com/LionelENSFELDER/miiniimaal-weather'
			}
		],
		testimonials: [
			{
				id: 1,
				name: 'Céline Tréhin',
				photo: './assets/img-compressed/celine-trehin.jpg',
				photoTitle:"Céline Tréhin",
				photoAlt:"Céline Tréhin",
				client: 'AID83',
				testimonial: 'Très à l\'écoute, Lionel a su moderniser notre site.',
				url: 'https://www.aid83.org/',
			},
			{
				id: 2,
				name: 'Eléonore Hottou',
				photo: './assets/img-compressed/eleonore-hottou.jpg',
				photoTitle:"Eléonore Hottou",
				photoAlt:"Eléonore Hottou",
				client: 'Sophromassage',
				testimonial: 'Lionel fait preuve d\'une bonne capacité à cerner les besoins et à les respecter.',
				url: '#testimonials',
			}
		],
		contactitems: [
			{
				id: 1,
				text: 'Adresse',
				info: '612 Avenue Maréchal Foch',
				icon: '<i class="align-middle border-0 font-onyx font-30 las la-map-pin"></i>',
				url: '#'

			},
			{
				id: 2,
				text: 'Téléphone',
				info: '06 52 40 10 21',
				icon: '<i class="align-middle border-0 font-onyx font-30 las la-mobile-alt"></i>',
				url: 'tel:+33652401021'
			},
			{
				id: 3,
				text: 'Mail',
				info: 'ensfelder.lionel@gmail.com',
				icon: '<i class="align-middle border-0 font-onyx font-30 las la-at"></i>',
				url: 'mailto://ensfelder.lionel@gmail.com'
			},
			{
				id: 4,
				text: 'Github',
				info: 'LionelENSFELDER',
				icon: '<i class="align-middle border-0 font-onyx font-30 lab la-github"></i>',
				url: 'https://github.com/LionelENSFELDER'
			},
			{
				id: 5,
				text: 'LinkedIn',
				info: 'lionel-ensfelder',
				icon: '<i class="align-middle border-0 font-onyx font-30 lab la-linkedin-in"></i>',
				url: 'https://www.linkedin.com/in/lionel-ensfelder/'
			},
			{
				id: 6,
				text: 'Medium',
				info: '@ensfelder.lionel',
				icon: '<i class="align-middle border-0 font-onyx font-30 lab la-medium"></i>',
				url: 'https://medium.com/@ensfelder.lionel'
			}
		],
		techs:[
			{
				id:1,
				title: 'Vue.js',
				icon: '<i class="lab la-vuejs display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:2,
				title: 'Bootstrap',
				icon: '<i class="lab la-bootstrap display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:3,
				title: 'Git',
				icon: '<i class="lab la-git display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:4,
				title: 'UI Kit',
				icon: '<i class="lab la-uikit display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:5,
				title: 'Scrum',
				icon: '<i class="lab la-buffer display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:6,
				title: 'Wordpress',
				icon: '<i class="lab la-wordpress display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:7,
				title: 'SASS',
				icon: '<i class="lab la-sass display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:8,
				title: 'Symfony',
				icon: '<i class="lab la-symfony display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:9,
				title: 'Apache, SQL',
				icon: '<i class="las la-server display-2"></i>',
				url: 'https://apache.org/'
			},
			{
				id:10,
				title: 'Figma',
				icon: '<i class="lab la-figma display-2"></i>',
				url: 'https://www.figma.com/'
			},
			{
				id:11,
				title: 'Windows Server',
				icon: '<i class="lab la-windows display-2"></i>',
				url: 'https://www.microsoft.com/fr-fr/cloud-platform/windows-server'
			},
			{
				id:12,
				title: 'Hyperledger Fabric',
				icon: '<i class="lab la-connectdevelop display-2"></i>',
				url: 'https://www.hyperledger.org/projects/fabric'
			},
			{
				id:13,
				title: 'PHP Unit',
				icon: '<i class="las la-file-code display-2"></i>',
				url: 'https://phpunit.de/'
			},
			{
				id:14,
				title: 'Jest',
				icon: '<i class="las la-file-code display-2"></i>',
				url: 'https://jestjs.io/'
			},
			{
				id:15,
				title: 'Foundation',
				icon: '<i class="las la-file-code display-2"></i>',
				url: 'https://foundation.zurb.com/'
			},
			{
				id:16,
				title: 'Ubuntu',
				icon: '<i class="lab la-ubuntu display-2"></i>',
				url: 'https://www.ubuntu-fr.org/'
			}
		],
		stacks:[
			{
				id: 1,
				icon: '<i class="las la-paint-roller font-30"></i>',
				title: 'Frontend',
				content: 'HTML5 & CSS3, SASS, Bootstrap, Javascript, Vue.js, React.'

			},
			{
				id: 2,
				icon: '<i class="las la-server font-30"></i>',
				title: 'Backend',
				content: 'PHP & MySQL, Symfony, Node.js, Wordpress.'

			},
			{
				id: 3,
				icon: '<i class="las la-toolbox font-30"></i>',
				title: 'Outils',
				content: 'Docker, Webpack, Jest, Gulp, Git.'

			}
		]
	}
})