export default new Map([
    [
        '1', 
        {
            username: "test@test.no", 
            password: "12345678", 
            createdPolls: [
                '1', 
                {
                    pollname: 'testpoll', 
                    question: 'er dette en poll?',
                    answers: [
                        'yes', 
                        'no', 
                        'idk', 
                        'idc'
                    ],
                },
            ], 
            completedPolls: [
                '3', 
                {
                    pollname: 'poll3', 
                    question: 'er dette en poll da?',
                    answer: 'jepp',
                }, 
                '4',
                {
                    pollname: 'yetAnother poll', 
                    question: 'yet another poll?', 
                    answer: 'yep'
                },
            ]
        }
    ],
    [
        '2', 
        {
            username: "test@test.no", 
            password: "12345678", 
            createdPolls: [
                '1', 
                {
                    pollname: 'testpoll', 
                    question: 'er dette en poll?',
                    answers: [
                        'yes', 
                        'no', 
                        'idk', 
                        'idc'
                    ],
                },
            ], 
            completedPolls: [
                '3', 
                {
                    pollname: 'poll3', 
                    question: 'er dette en poll da?',
                    answer: 'jepp',
                }, 
                '4',
                {
                    pollname: 'yetAnother poll', 
                    question: 'yet another poll?', 
                    answer: 'yep'
                },
            ]
        }
    ],
]);