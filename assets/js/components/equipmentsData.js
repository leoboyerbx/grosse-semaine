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
        urlPDF: '#',
        url: ''
    },
    {
        name: "Test2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus at corporis culpa cupiditate delectus fugit, illo neque, numquam officia quam reiciendis ut velit vitae voluptatem. Ab in maiores veritatis.",
        tags: [
            { class: "gccd", name: "GCCD" },
            { class: "gccd", name: "Plateforme Hall Structure" },
            { class: "", name: "Lorem" }
        ],
        platform: 'gccd',
        url: '#'
    },
    {
        name: "Tes3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus at corporis culpa cupiditate delectus fugit, illo neque, numquam officia quam reiciendis ut velit vitae voluptatem. Ab in maiores veritatis.",
        tags: [
            { class: "geii", name: "GEII" },
            { class: "geii", name: "Plateforme CEDMS" },
            { class: "", name: "Électronique" }
        ],
        platform: 'geii',
        url: '#'
    }
]

export default data
