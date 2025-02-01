const express = require('express');
const cors = require('cors'); 
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'OPTIONS'],  
  allowedHeaders: ['Content-Type'],
}));
const teamInfo = {
    name: "Zephora",
    logo: "🥷",
    motto: "The Wind beneath your wings"
};

const teamMembers = {
    "anandu": {
        name: "Anantha Krishnan",
        role: "Technical Head",
        description: "A coding ninja who loves solving complex problems",
        specialty: "React and Node.js"
    },
    "Midhun": {
        name: "Midhun Kaipulli",
        role: "Vice Captain",
        description: "Creative genius with an eye for detail",
        specialty: "User Interface Design"
    },
    "Anlia": {
        name: "Anlia Cliff",
        role: "Creative Mind",
        description: "A passionate artist with a love for melodies",
        specialty: "Singing"
    },
    "Akshaya": {
        name: "Akshaya K S",
        role: "Creative Mind",
        description: "A dynamic performer who brings energy to every stage",
        specialty: "Dancing"
    },
    "Akash": {
        name: "Akash",
        role: "Design Team",
        description: "An innovative thinker who loves blending creativity with design",
        specialty: "Singing"
    },
    "Ziyan": {
        name: "Ziyan",
        role: "Documentation Head",
        description: "A meticulous organizer with a passion for adventure",
        specialty: "Bike rider"
    },
    "Adhil": {
        name: "Adhil",
        role: "Design Team",
        description: "A fitness enthusiast who finds creativity in strength",
        specialty: "Body builder"
    },
    "Sreya": {
        name: "Sreya K Ram",
        role: "Captain",
        description: "A natural leader who inspires with her moves and vision",
        specialty: "Dancing"
    }
}


async function generateResponse(userInput) {
    try {
        const input = userInput.toLowerCase();
        
        if (input.includes("what") && (input.includes("zephora") || input.includes("name")) && (input.includes("mean") || input.includes("meaning"))) {
            return `The name "${teamInfo.name}" ${teamInfo.logo} is derived from "Zephyr," the Greek god of the west wind. It represents the wind—symbolizing our passion, speed, and unstoppable drive.`;
        }

        for (const [key, member] of Object.entries(teamMembers)) {
            if (input.includes(member.name.toLowerCase()) || input.includes(key.toLowerCase())) {
                return `${member.name} is the ${member.role} at Team ${teamInfo.name}. ${member.description}. ${member.name=="Anantha Krishnan" || member.name=="Midhun Kaipulli"? "He":"She"} specializes in ${member.specialty}.`;
            }
        }

        if (input.includes("team name")) {
            return `${teamInfo.name} ${teamInfo.logo} - The name "Zephora" is derived from "Zephyr," the Greek god of the west wind. It represents the wind—symbolizing our passion, speed, and unstoppable drive.`;
        }

        if (input.includes("motto")) {
            return `Our motto is "${teamInfo.motto}". It reflects that we strive to lift each other, support growth, and empower one another.`;
        }

        return `${teamInfo.name} ${teamInfo.logo} is a dynamic team guided by our motto "${teamInfo.motto}". We have ${Object.keys(teamMembers).length} talented members, each bringing unique skills to the team.`;
    } catch (error) {
        console.error('Error generating response:', error);
        return "I apologize, but I'm having trouble processing your request at the moment.";
    }
}

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await generateResponse(message);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process chat request' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});