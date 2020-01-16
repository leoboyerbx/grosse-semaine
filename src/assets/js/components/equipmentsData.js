const data = [
    {
        name: "Caméra Ersascope2",
        description: `Cette caméra permet de voir précisément, avec un angle à 90°, le brasage des billes de BGA pour vérifier s’il a été fait correctement.
\tErsascope 2 a une grande flexibilité grâce à sept axes de mouvement pour l'inspection de BGA, µBGA, CSP, Flip Chip, CGA et le débit pour les connexions THT.
Elle permet d'évaluer le remplissage du talon pour le petit boîtier QFP, les boîtiers SO (Small Outline) et d'autres composants avec des connexions d'ailes de mouette (broches sur un circuit intégré, ce sont les broches standard pour le QFP et le SO), mais aussi de déterminer la longueur de mouillage et le mouillage interne pour les boîtiers PLCC (Small Outline Integrated Circuit) et d'autres composants avec des connexions J. 
L’inclinaison et la rotation offrent une variété d’angles de vision - même en cas de reconstruction importante par des composants voisins ! La vue grand angle permet l'inspection des murs VIA, des prises, etc…, sans incliner l'optique (par la méthode de décalage). 
Enfin, vous aurez la possibilité de créer constamment des images nettes à partir de plusieurs images individuelles grâce à divers paramètres de mise au point, le tout à l'aide de la fonction FocusDusion ImageDoc v3 EXP !
`,
        tags: [
            { class: "geii", name: "GEII" },
            { class: "geii", name: "Plateforme CEDMS" },
            { class: "", name: "Électronique" },
            { class: "", name: "Contrôle qualité" }
        ],
        platform: 'geii',
        urlPDF: 'documents/fiche%20technique%20-%20Ersascope.pdf'
    },
    {
        name: "Pile à combustible",
        description: `Au sein de la plateforme CFMC, on retrouve une reproduction à petite échelle d’une pile à combustible. C’est une structure permettant de fabriquer de l’électricité et de l’eau, à partir d’hydrogène.
        Avant toute chose, la production d’hydrogène étant la base de cette pile, ce n’est possible qu'à partir d’une eau pure. Ainsi, une production d’eau ultra pure est possible directement sur la plateforme par osmose inverse, un système complexe basé sur un filtrage très fin, ne laissant passer que les molécules d’eau en purifiant le liquide contenant anciennement des matières en solution. Cette eau ultra pure est ensuite positionnée au niveau de l’électrolyseur pour permettre la création d’oxygène, mais surtout d’hydrogène par séparation d’atomes. Au sein de cet électrolyseur, un courant est envoyé pour séparer les atomes de l’eau (H2O) en deux atomes d’hydrogène et un atome d’oxygène. Les deux atomes d’hydrogène seront alors ensuite rassemblés pour former du dihydrogène. L’hydrogène résultant de la séparation et de l’oxydation de l’eau (perte de ses électrons) est alors stocké sous pression et envoyé par la suite à son anode sur la pile à combustible. De l’autre côté, sur le côté cathode de la pile, un débit d’air est envoyé. Ce qui nous intéresse dans cet air, c’est l’oxygène, facteur primordial pour cette machine. Par réaction, de l’eau (H2O) est produite ainsi que de l’électricité. Cette dernière réaction forme l’ensemble de la chaîne liée à la mobilité dont font partie la pile à combustible et la batterie lithium.
Tout cela est étroitement lié au département GTE (Génie Thermique et Énergie) qui propose une installation bien plus grande et bien plus poussée de la pile à combustible. Mais une chose ne va pas sans l’autre: sans la CFMC, il n’y a pas de production d’hydrogène et sans hydrogène, il n’y a pas de pile à combustible produite par la plateforme H2 & Frigo CO2. De ce fait, les différents DUT collaborent et travaillent ensemble pour se développer.`,
        tags: [
            { class: "chimie", name: "CHIMIE" },
            { class: "chimie", name: "Plateforme CFMC" },
            { class: "", name: "Energie" },
            { class: "", name: "Production" }
        ],
        platform: 'chimie',
        urlPDF: 'documents/fiche technique - pile à combustible.pdf'
    },
    {
        name: "Frigo CO2",
        description: `Dans le domaine de la réfrigération, l'utilisation de fluides naturels (CO2 inclus) est souvent proposée comme solution radicale pour éliminer l'effet de serre dû aux hydrocarbures halogènes de la famille des HFC.
         Le CO2 est un gaz à effet serre, en fait le plus important et le plus connu, mais les quantités concernées, même en cas d'utilisation massive dans le domaine de la réfrigération, sont insignifiantes par rapport à celles produites pendant les processus de combustion. Son GWP (potentiel de réchauffement global) est en tout cas très faible comparé aux HFC (un sur plusieurs milliers). De plus, le CO2 ne pose aucun problème d'inflammabilité ni d'impact sur la couche d'ozone. Toutefois, il y a un risque sérieux que l'installation au CO2 ne puisse être complètement positive en ce qui concerne la réduction de l'effet de serre.

            Même si l'apport direct est pratiquement nul, l'effet indirect augmenterait si les circuits frigorifiques au CO2 étaient moins efficaces que les circuits traditionnels, à cause d'une consommation plus importante d'électricité, entraînant des émissions plus importantes de CO2 et d'autres polluants provenant des centrales électriques, consommant plus d'énergies fossiles. Pour cette raison, il faut toujours avoir à l'esprit que les solutions techniques utilisées pour améliorer les aspects environnementaux ne peuvent négliger l'objectif d'une efficacité thermodynamique élevée. Bien choisir la technologie de l'échangeur est une condition fondamentale pour obtenir des valeurs de COP aux circuits CO2 permettant une véritable réduction de l'effet de serre. Le CO2 se distingue de façon significative de tous les autres fluides halogénés et non halogénés et met les concepteurs d'échangeurs de chaleur face à un problème particulier : leur discussion est l'objet de cet article.`,
        tags: [
            { class: "gte", name: "GTE" },
            { class: "gte", name: "Plateforme CFMC GTE" },
            { class: "", name: "Réfrigération" },
            { class: "", name: "CO2" }
        ],
        platform: 'gte',
        urlPDF: 'documents/fiche%20technique%20-%20frigo%20CO2.pdf'
    },
    {
        name: "CLX 350",
        description: `La CLX 350 de DMG MORI est une des références en matière de tournage universel avec un système de mesures intégré. Avec son interface robot compatible avec la majorité des chargeurs de barres, l’usinage devient plus efficace. De plus, son design compact offre de meilleures perspectives quant à son positionnement tout en conservant un espace de travail suffisant  pour l’usinage. Comme chaque machine DMG MORI, elle peut être équipée de solutions d’automatisation standard ou sur mesure. 

De même, son écran tactile SLIMline 19” est idéale pour les simulations 3D et la vérification des contours. Ainsi, avec la commande SIEMENS l’utilisation est plus simple et intuitive. La CLX35 possède également un système de vitesse de rotation en alternance permettant d’éviter les vibrations. Enfin, avec le logiciel Easy Tool Monitoring 2.0 il est plus simple d’éviter les dommages en cas de bris ou de surcharge d’un outil.

Cette machine offre donc aux étudiants et aux professionnels une grande qualité d’usinage de pièces qu’elles soient complexes ou plus grossières.
`,
        tags: [
            { class: "gmp", name: "GMP" },
            { class: "gmp", name: "Plateforme S.MART" },
            { class: "", name: "Production d'usine" },
            { class: "", name: "Tournage" }
        ],
        platform: 'gmp',
        urlPDF: 'documents/fiche%20technique%20-%20CLX350.pdf'
    },
    {
        name: "Banc de flexion",
        description: `Parmi les nombreux outils de presse que possèdent la plateforme, un parmi eux se nomme le banc de flexion qui permet de tester la résistance de plusieurs échantillons de matériaux afin d’étudier les limites de ces derniers. Cette limite permet ensuite de calculer une marge de sécurité lors de la conception d’ouvrages. 

Cette machine possède deux vérins modulables qui peuvent travailler en indépendant ou en associé. Une force va s’appliquer entre les vérins et le matériau pouvant aller jusqu’à 200 kilonewton par vérin.  Ce dernier pouvant atteindre une portée de 4600 millimètres est soutenu par trois appuis articulés.

Les vérins viennent lentement exercer une pression puissante sur le matériau afin de le déformer jusqu’à son point de rupture. Les résultats sont ensuite analysés afin d’en déduire une résistance optimisée.

Ce banc de flexion est utilisé régulièrement par les étudiants de la plateforme lors de leurs travaux pratiques. En outre, lors de projets innovants, les entreprises peuvent mener leurs essais afin d’améliorer leurs prototypes.

Le banc de flexion est donc un outil au centre de la “Halle Structure” qui tient une place importante dans le département. Cet outil unique au sein de l’IUT1, rassemble étudiants, professeurs et chercheurs autour d’un intérêt commun.  

`,
        tags: [
            { class: "gccd", name: "GCCD" },
            { class: "gccd", name: "Plateforme Hall Structure" },
            { class: "", name: "BTP" },
            { class: "", name: "Contrôle qualité" }
        ],
        platform: 'gccd',
        urlPDF: 'documents/fiche%20technique%20-%20banc%20de%20flexion.pdf'
    }
]

export default data

