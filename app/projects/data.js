export const projects = [
    {
        slug: "finite",
        title: "Finite",
        desc: "A social media app built around intentional use, with a daily time-limiting feature. Built full-stack together with a co-developer.",
        tag: "Next.js, Supabase",
        featured: true,
        links: [{ label: "GitHub", href: "https://github.com/ThijsvZwam/finite" }],
        image: "/projects/Finite.png",
        sections: [
            {
                heading: "Where the idea came from",
                text: [
                    "For a school project, we chose to make a website. We brainstormed alot of possible types of websites and webapps we could make. We then came to the idea of making a social media platform with a built in daily time limit.",
                    "We decided to use Next.js for the website because of it's easy use and fast loading times.",
                    "The name Finite comes from the opposite of infinite. Since you don't have an infinite time on the website!",
                ],
                image: "/projects/Finite.png",
                imageAlt: "The Finite login",
            },
            {
                heading: "Planning the project.",
                text: [
                    "The project was a learning process for using scrum boards. We got a physical board to write all our plans and backlog items on.",
                    "We had to manage the board for each sprint and split the backlog items into smaller tasks that we could devide over the 3 of us."
                ],
                image: "/projects/scrumboard.jpg",
                imageAlt: "Scrum-board",
            },
            {
                heading: "Designing the front-end",
                text: [
                    "Since I had the role of Full-Stack Developer in the project, I had to also design the front-end of the website. We decided on a purple and dark vibe so it's light on the eyes.",
                    "All pages have a sidebar and a top bar. The sidebar has all the pages, popular hashtags, and a small view of what account you're currently logged into."
                ],
                image: "/projects/finite-home.png",
                imageAlt: "Home Page",
            },
            {
                heading: "The back-end",
                text: [
                    "I also worked with the back-end of the project. Linking up the account you made to a profile page. Making sure all the posts save to the back-end and can be loaded efficiently on the home page.",
                    "We used supabase's free tier to host the back-end and link it to the websites front-end."
                ],
                image: "/projects/finite-profile.png",
                imageAlt: "Profile Page",
            },
            {
                heading: "What I learned",
                text: ["It was a very fun project to do! It was my first time working with Next.js and Supabase. Sometimes it was hard to agree on something that everyone wanted on the website, but afterwards, we quickly resolved it and got something everyone agreed on. I'm excited to make more webapps in the future."],
            },
        ],
    },
    {
        slug: "border-of-life",
        title: "Border Of Life",
        desc: "A Persona 5-styled action JRPG with full combat and cutscenes.",
        tag: "Unreal Engine 5, Blueprints, C++",
        featured: true,
        links: [{ label: "GitHub", href: "https://github.com/ThijsvZwam/Sintlucas-Shine-2026" }],
        image: "/projects/BorderOfLife1.png",
        sections: [
            {
                heading: "A school project",
                text: [
                    "It started with a school project for showing off what you've learned this year. You could make anything, from a website to a game or even software tools. I decided to go for a game.",
                    "The idea of the game was pretty easy to get to. I already had an idea for a game for pretty long so I came to the conclusion that I wanted to make a small demo of that game idea.",
                    "The game is an Anime-Styled hack-and-slash JRPG. I mixed persona's 2D graphics style into the game and merged it with Zenless Zone Zero's fast combat style."
                ],
                image: "/projects/BorderOfLife1.png",
                imageAlt: "Border of Life Logo",
            },
            {
                heading: "Developing the project.",
                text: [
                    "As I started developing the project, I ran into some problems and annoying things. I was working on the game in the Unity Engine for the first 2 weeks of the project.",
                    "I came to the conclusion that Unity wasn't the best choice for the project and I switched over to unreal engine, which was the best second option for the game. Though I didn't have much experience with the engine, I learned a lot of things fast and development became pretty quick."
                ],
                image: "/projects/developmentBOL.png",
                imageAlt: "Blueprint",
            },
            {
                heading: "The environment",
                text: [
                    "While I not only developed the systems and UI for the game, I also designed and made the environment of it. It was supposed to be a Tokyo-style environment, and not too big that the player would get lost. So I started placing all kinds of floor tiles and buildings that I could find online to try and bring together the environment.",
                    "After I placed down some buildings and roads, I started polishing the environment and adding neon signs, props, and other things like the gate which I will explain in the next paragraph."
                ],
                image: "/projects/Environment.png",
                imageAlt: "Environment",
            },
            {
                heading: "The goal of the game",
                text: [
                    "The goal of the player is to find an NPC which will redirect the player to a gate. The gate they go in is a mirrored world of the city they live in, but evil. While in the gate, the player should defeat all kinds of different enemies using combo attacks. Once the enemies are defeated, the player can go back to the normal world and the gate will be closed.",
                    "The name Border of Life, was thought of by my partner. It represents the border of where the normal city ends and the dark mirrored world starts."
                ],
                image: "/projects/Gate.png",
                imageAlt: "Gate",
            },
            {
                // No image: the text just goes full width
                heading: "What I learned",
                text: ["In this project I learned that sometimes things don't go as planned and that you have to be prepared to make a big switch in a small time frame. I learned a lot of Unreal Engine and it's Blueprints. I also learned how to make explandable systems like a combat and objective system, and used sequencer to make cutscenes to spice up the game."],
            },
        ],
    },
    {
        slug: "beat-saber-modcharts",
        title: "Beat Saber Modcharts",
        desc: "Custom maps with environments, shaders and visual effects, made with the Heck suite of mods.",
        tag: "HLSL, TypeScript",
        links: [{ label: "BeatSaver", href: "https://beatsaver.com/profile/268475" }],
        sections: [
            {
                heading: "Sleepy Mita",
                text: [
                    "This was my first Beat Saber map I ever released, it was also my first modchart! I uploaded it on 11th of February 2025, and it got a lot of nice reactions.",
                    "I used Poiyomi to make shader materials for all the objects in the map environment."
                ],
                image: "/projects/sleepyBS.png",
                imageAlt: "Sleepy Mita",
            },
            {
                heading: "Murder Plot",
                text: [
                    "I collaborated with Jevk on this map. Jevk is a well known person in the modcharting community, and he did all the mapping + noodling on this map, while I did the visuals! It was released on 4th of April 2025.",
                    "This was the first time I experimented with custom shaders in HLSL and it turned out pretty good! The image is the rework of the original map I made."
                ],
                image: "/projects/MurderPlotBS.png",
                imageAlt: "Murder Plot",
            },
            {
                heading: "Transmission 11623-55-2",
                text: [
                    "This map was a teaser for an upcoming event. I and a few others collaborated to modchart some Zeds Dead songs. On this teaser map, I collaborated with Pixy. She did the mapping and I did the visuals.",
                    "I used particle systems to make the big purple spiral in the sky, it came out pretty cool!"
                ],
                image: "/projects/TransmissionBS.png",
                imageAlt: "Transmission",
            },
            {
                heading: "Sweet Memories",
                text: [
                    "This is my map for the event I mentioned above. This time Pixy did the mapping too and I did all the rest of the modchart.",
                    "I used more of the particle systems to make stunning environments and I used stencil shaders to make seamless transitions through scenes."
                ],
                image: "/projects/SweetMemoriesBS.png",
                imageAlt: "Sweet Memories intro",
            },
        ]
    },
    {
        slug: "festival-manager",
        title: "Festival Manager",
        desc: "A building and placement game where you design and run your own festival. Still work in progress!",
        tag: "Unreal Engine 5, Blueprints, C++",
    },
    {
        slug: "beattimer",
        title: "BeatTimer",
        desc: "A mobile WebApp where you guess the time between audio beeps.",
        tag: "Mobile WebApp",
    },
];