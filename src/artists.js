const artists = [
    {
        image: "austere.jpg",
        text: "Austere",
        path: "Austere - To Fade With The Dusk.mp3",
        about: `Formed in 2005 in Australia by Mitchell <i>„Desolate”</i> Keepin, joined in 2007 by Tim <i>„Sorrow”</i> Yatras, Austerte features a very dense, melancholic atmosphere, that's so easy to get immersed in.`
    },
    {
        image: "drowned.jpg",
        text: "Drowned",
        path: "Drowned - 72 Hours Awake Thinking About Suicide.mp3",
        about: `Duo from Brazil. Their music puts heavy emphasis on feelings of hatred and anguish.`
    },
    {
        image: "hopeless.jpg",
        text: "Hopeless",
        path: "Hopeless - My Razor My Crown.mp3",
        about: `Hopeless is a Spanish one-man band founded in 2008 by <i>S</i>.<br> His style seems to be influenced by atmospheric black and doom metal.`
    },
    {
        image: "life_is_pain.jpg",
        text: "Life Is Pain",
        path: "Life Is Pain - Oppressive Nights In Mental Asylum.mp3",
        opacity: "25%",
        about: `Life Is Pain formed in 2006 by <i>Trist</i> and <i>Kim Carlsson</i>, putting out a demo CD titled <i>Bloody Melancholy</i>. The project ended in the same year, since Kim wanted to focus more on <i>Lifelover</i>.
        `
    },
    {
        image: "my_useless_life.jpg",
        text: "My Useless Life",
        path: "My Useless Life - A Heart Full of Sorrow.mp3",
        opacity: 0.45,
        about: `Founded in September 2011 by <i>F</i>, joined by <i>S</i> in November 2011. The overdrive effect and echoing vocals, present on most of their tracks, can really make you feel like you're lost in a maze of auditory fog.`
    },
    {
        image: "no_point_in_living.jpg",
        text: "No Point in Living",
        path: "No Point In Living - Urban Melancholy.mp3",
        about: `As one of the most prolific bands within the genre, No Point in Living releases new music on a regular basis. They like to experiment with a variety of different styles and instruments.`
    },
    {
        image: "sacrimoon.jpg",
        text: "Sacrimoon",
        path: "Sacrimoon - Solitude and Coldness.mp3",
        about: `An international band formed in 2012 by <i>L. Nergot</i>, joined in 2014 by <i>Kijel</i>. The consistent, very still pace and notably clean production perfectly convey a sense of deep sorrow and emptiness.`
    },
    {
        image: "through_the_pain.jpg",
        text: "Through the Pain",
        path: "Through the Pain - Time Heals Nothing.mp3",
        about: `Created by <i>Bael'vect in 2006</i>, joined by <i>Wiedergaenger</i> and <i>R</i>. 
        Through the Pain specialises in communicating painful memories of life via tormented cries, screams and monotonous chants.
        `
    },
    {
        image: "trist.jpg",
        text: "Trist",
        path: "Trist - Těžkost bytí.mp3",
        about: `"<i>I recorded music when I was set free from  mental asylum. It was recorded in few days, I had inspiration. I think I won’t make more music in the future. Now my life is alcohol and I think it will destroy me.</i>"<br><br>
        The word <i>trist</i> translates to <i>depressing</i>, <i>dreary</i> or <i>sad</i> in many languages.
        He's music is raw, hopless, trance-inducing. Immense.
        `
    },
    {
        image: "wintercult.jpg",
        text: "Wintercult",
        path: "Wintercult - Frozen in Melancholy.mp3",
        about: `One-man band from Yekaterinburg, Russia created by <i>Waldgeist</i> in 2010, active up to date. Recurring motives include winter, depression and misanthropy. Highly atmospheric.`
    },
    {
        image: "xasthur.jpg",
        text: "Xasthur",
        path: "Xasthur - Prison of Mirrors.mp3",
        about: `One-man project created by <i>Scott Conner</i>, active between 1995 and 2010. Its style is unmistakable, mixing esoteric themes such as astral projections with dsbm canon  - feelings of despair, emptiness and isolation.`
    },
    {
        image: "xathrites.jpg",
        text: "Xathrites",
        path: "Xathrites - My Last Day Story.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "sterbend.jpg",
        text: "Sterbend",
        path: "Sterbend - Left to weep and mourn.mp3",
        opacity: 0.6,
        about: `German project formed in 2000, currently on hold. They have managed to find a perfect combination of doom metal and depressive black metal, mixing together wolf-like howls with slow, sorrowful sounds, suicidal in their very nature.`,
    },
    {
        image: "life_memories.jpg",
        text: "Life Memories",
        path: "Life Memories - Pain, Lament and Loneliness.mp3",
        opacity: 0.5,
        about: ``
    },
    {
        image: "exiled_from_light.jpg",
        text: "Exiled From Light",
        path: "Exiled From Light - The Bitter Taste Of Tears.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "autumn_laments.jpg",
        text: "Autumn Laments",
        path: "Autumn Laments - Autumn Forest.mp3",
        opacity: 0.45, 
        about: `Atmospheric/depressive one-man black metal project from Germany, created in 2018 by <i>L.S</i>, active to date. Through his work, the artist contemplates nature as well as ruminates on his sorrow and loneliness.`
    },
    {
        image: "when_mine_eyes_blacken.jpg",
        text: "When Mine Eyes Blacken",
        path: "When Mine Eyes Blacken - Beneath Pale Stars.mp3",
        about: ``
    },
    {
        image: "hanging_garden.jpg",
        text: "Hanging Garden",
        path: "Hanging Garden - Sleep Overdose.mp3",
        about: `American band from San Diego, California, active between 2008 - 2012. Their work was inspired by yearnful reflections on the downsides of love and relationships.`
    },
    {
        image: "veil.jpg",
        text: "Veil",
        path: "Veil - Dirge.mp3",
        opacity: 0.5,
        about: `Depressive black metal project from Minnesota, USA, created by <i>S.</i> in 2003, joined by <i>Thurisaz</i> later down the line. Split up in 2012. To experience Veil means to take great relish  
        in nightmarish dirges, full of heart-rending cries accompanied by mournful, distorted guitars, which cut right through ones soul, creating a very dark, funeral-like aura.`
    },
    {
        image: "nocturnal_depression.jpg",
        text: "Nocturnal Depression",
        path: "Nocturnal Depression - Solitude And Despair.mp3",
        about: ``
    },
    {
        image: "life_neglected.jpg",
        text: "Life Neglected",
        path: "Life Neglected - As Suicide Brought Hope.mp3",
        about: ``
    },
    {
        image: "sorry.jpg",
        text: "Sorry...",
        path: "Sorry - Claudia.mp3",
        opacity: 0.4,
        about: `A protest against all forms of life voiced through works of pain and isolation.`
    },
    {
        image: "selvhat.jpg",
        text: "Selvhat",
        path: "Selvhat - Selvhat.mp3",
        about: ``
    },
    {
        image: "be_persecuted.jpg",
        text:"Be Persecuted",
        path: "Be Persecuted - Painfull Assemble.mp3",
        opacity: 0.4,
        about: ``
    },
    {
        image: "empty_life.jpg",
        text: "EmptyLife",
        path: "EmptyLife - Homeless.mp3",
        opacity: 0.4,
        about: `This project is strongly influenced by post punk and depressive rock. <br><br> "<i>Through these lovely melodies I try to cheer myself up from my depression.</i>"`

    },
    {
        image: "nyctophilia.jpg",
        text: "Nyctophilia",
        path: "Nyctophilia - Bezdeń.mp3",
        about: `One-man band from Poland, created back in dark December of 2014. <br><br> <i>Nyctophilia</i> is a psychological condition in which a person loves or finds deep comfort in the darkness.`
    },
    {
        image: "annorkoth.jpg",
        text: "Annorkoth",
        path: "Annorkoth - The End, Here and Now.mp3",
        about: `Depressive/atmospheric black metal project formed in Podolsk, Russia, in 2010 by <i>B.M</i>, closed on February 6, 2013. Its main purpose was expressing vexatiously painful feelings of desolation, thereby helping people to find catharsis and relief.`
        
    },
    {
        image: "lost_in_desolation.jpg",
        text: "Lost in Desolation",
        path: "Lost in Desolation - Memory.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "coldworld.jpg",
        text: "Coldworld",
        path: "Coldworld - Suicide.mp3",
        opacity: 0.5,
        about: ``
    },
    {
        image: "cheerful_depression.jpg",
        text: "Cheerful Depression",
        path: "Cheerful Depression - Sleep Forever.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "burzum.jpg",
        text: "Burzum",
        path: "Burzum - A Lost Forgotten Sad Spirit.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "black_hate.jpg",
        text: "Black Hate",
        path: "Black Hate - Alone and Cold.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "herbstregen.jpg",
        text: "Herbstregen",
        path: "Herbstregen - Life Failed.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "dead_life.jpg",
        text: "Deadlife",
        path: "Deadlife - The wounds that you gave.mp3",
        opacity: 0.45,
        about: ``
    },
    {
        image: "lost_inside.jpg",
        text: "Lost Inside",
        path: "Lost Inside - I Hate Myself.mp3",
        about: ``
    },
    {
        image: "apati.jpg",
        text: "Apati",
        path: "Apati - Likgiltighetens Slutstation.mp3",
        about: ``,
        opacity: 0.45
    }

];

export default artists;