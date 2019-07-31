export function loadLists() {
    return [
        {
            title: 'To-do',
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: 'Estudar módulo 01 de NodeJS',
                    labels: ['#7159c1'],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                },
                {
                    id: 2,
                    content: 'Estudar módulo 02',
                    labels: ['#7159c1'],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                },
                {
                    id: 3,
                    content: 'Estudar módulo 01 de React Native',
                    labels: ['#7159c1'],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                },
                {
                    id: 4,
                    content: 'Estudar módulo 05 de React"',
                    labels: ['#54e1f7'],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                },
                {
                    id: 5,
                    content: 'Estudar GraphQl',
                    labels: ['#54e1f7'],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                },
            ]
        },
        {
            title: 'Doing',
            creatable: false,
            cards: [
                {
                    id: 6,
                    content: 'Estudando módulo 04 de React',
                    labels: [],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                }
            ]
        },
        {
            title: 'Paused',
            creatable: false,
            cards: [
                {
                    id: 7,
                    content: 'Estudar sobre Geolocalização e mapas com React',
                    labels: ['#7159c1'],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                },
                {
                    id: 8,
                    content: 'Trabalhar em um novo projeto React do zero',
                    labels: ['#54e1f7'],
                    user: 'https://avatars2.githubusercontent.com/u/15989467?s=460&v=4'
                },
                {
                    id: 9,
                    content: 'Formatar computador e por o ZorinOS',
                    labels: [],
                }
            ]
        },
        {
            title: 'Done',
            creatable: false,
            done: true,
            cards: [
                {
                    id: 10,
                    content: 'Estudar módulos de 01 a 03 de React',
                    labels: [],
                },
                {
                    id: 12,
                    content: 'Estudar mais sobre GIT',
                    labels: ['#54e1f7'],
                },
                {
                    id: 13,
                    content: 'Por o ZorinOS no notebook',
                    labels: ['#7159c1'],
                }
            ]
        },
    ];
}