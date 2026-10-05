"use strict";

const knowledgeBase = [
  {
    topic: "artificial intelligence",
    intent: "technology",
    aliases: ["artificial intelligence", "what is ai", "ai", "intelligent machines"],
    answer: "Artificial intelligence (AI) is the broad field of making computer systems perform tasks that usually require human abilities, such as understanding language, recognizing images, solving problems, and making predictions. AI systems follow rules, learn patterns from examples, or combine both approaches. They can be useful assistants, but they do not understand the world exactly as people do, and their answers should be checked for important decisions.",
    example: "A phone that recognizes your face, a map that estimates traffic, and a chatbot that responds to questions are all examples of AI used in different ways."
  },
  {
    topic: "machine learning",
    intent: "technology",
    aliases: ["machine learning", "ml", "learn from data"],
    answer: "Machine learning is a part of AI in which a computer learns patterns from example data rather than being given a hand-written rule for every case. During training, an algorithm adjusts a model to make useful predictions; for example, it might learn to sort emails as spam or not spam. The quality and fairness of its examples matter, and a learned model can make mistakes when it encounters unfamiliar situations."
  },
  {
    topic: "deep learning",
    intent: "technology",
    aliases: ["deep learning", "neural network", "neural networks"],
    answer: "Deep learning is a kind of machine learning that uses neural networks with many layers. Those layers can learn increasingly detailed patterns from data, which has made deep learning effective for tasks such as image recognition, speech recognition, translation, and text generation. It often needs substantial training data and computing power, and its internal decisions can be difficult to explain."
  },
  {
    topic: "generative AI",
    intent: "technology",
    aliases: ["generative ai", "generative artificial intelligence", "text generation"],
    answer: "Generative AI refers to systems that create new content—such as text, pictures, audio, or code—based on patterns learned during training. A text generator predicts likely next pieces of text in response to a prompt; it does not simply look up a guaranteed fact. Generated content can be useful for drafting and brainstorming, but it can also be inaccurate, biased, or too similar to its examples, so review it before relying on it."
  },
  {
    topic: "natural language processing",
    intent: "technology",
    aliases: ["natural language processing", "nlp", "language processing"],
    answer: "Natural language processing (NLP) is the area of computing concerned with working with human language. It includes tasks such as identifying the language in a message, searching documents, translating sentences, recognizing speech, and extracting names or topics. Modern NLP often uses machine-learning models, but a language system can still misread tone, context, idioms, or specialized terminology."
  },
  {
    topic: "computer vision",
    intent: "technology",
    aliases: ["computer vision", "image recognition", "vision ai"],
    answer: "Computer vision helps computers interpret information in images and video. A vision system may classify an image, locate objects, read printed text, or track movement. It is used in areas such as accessibility tools, medical-image assistance, and quality inspection. Results depend on image quality and training examples, and a system can fail or behave unfairly when the images differ from what it learned."
  },
  {
    topic: "Indian history",
    intent: "history",
    aliases: ["indian history", "history of india", "history of indian"],
    answer: "Indian history spans many regions, languages, and political traditions over thousands of years. The Indus Valley civilization flourished in the northwest in the third millennium BCE; later periods saw Vedic traditions, powerful kingdoms and empires such as the Maurya and Gupta, and a wide range of regional states. From the early modern period, the Mughal Empire and other powers shaped the subcontinent, followed by expanding British colonial rule. A diverse independence movement led to the end of British rule in 1947 and the creation of an independent India. This broad outline leaves out many important communities and regional histories."
  },
  {
    topic: "Indian independence",
    intent: "history",
    aliases: ["indian independence", "independence of india", "independence day", "freedom struggle", "indian freedom"],
    answer: "India's independence grew out of a long movement against British colonial rule. Campaigns included petitions, public organizing, labor and student activism, and mass movements such as the Non-Cooperation Movement, Civil Disobedience Movement, and Quit India Movement. India became independent on 15 August 1947. Partition at the same time created India and Pakistan and caused enormous displacement and violence, a painful part of the story that should be remembered alongside the achievement of independence."
  },
  {
    topic: "Mahatma Gandhi",
    intent: "history",
    aliases: ["mahatma gandhi", "gandhi", "mohandas gandhi"],
    answer: "Mohandas Karamchand Gandhi (1869–1948), widely known as Mahatma Gandhi, was a leader in India's independence movement. He became known for satyagraha—organized resistance rooted in truth and nonviolence—and helped lead campaigns including the Salt March of 1930 and the Quit India Movement of 1942. Gandhi's influence was substantial, but India's freedom struggle involved many leaders, communities, and forms of resistance. He was assassinated in 1948."
  },
  {
    topic: "World War I",
    intent: "history",
    aliases: ["world war i", "world war 1", "first world war", "wwi", "great war"],
    answer: "World War I lasted from 1914 to 1918 and involved major powers across Europe and beyond. Rival alliances, militarism, imperial competition, and nationalism contributed to tension; the assassination of Archduke Franz Ferdinand in June 1914 triggered a crisis that became war. Trench warfare, new weapons, and immense casualties marked the conflict. The armistice took effect on 11 November 1918, and the peace settlements reshaped borders and politics but did not prevent another world war."
  },
  {
    topic: "World War II",
    intent: "history",
    aliases: ["world war ii", "world war 2", "second world war", "wwii"],
    answer: "World War II was a global conflict from 1939 to 1945. It began in Europe when Nazi Germany invaded Poland; Britain and France then declared war. The conflict expanded across Europe, Africa, Asia, and the Pacific, drawing in the Allies and Axis powers. It included the Holocaust—the systematic murder of six million Jews and millions of other victims—and ended after the defeat of Germany in May 1945 and Japan's surrender in September 1945. The war caused immense loss of life and helped shape the United Nations and the postwar world."
  },
  {
    topic: "ancient civilizations",
    intent: "history",
    aliases: ["ancient civilization", "ancient civilizations", "indus valley", "mesopotamia", "ancient egypt"],
    answer: "Ancient civilizations developed complex communities, institutions, and technologies in many parts of the world. Mesopotamian city-states developed writing and early legal traditions; ancient Egypt built a Nile-centered state and monumental architecture; and the Indus Valley civilization, including Harappa and Mohenjo-daro, is known for planned cities and drainage systems. These societies traded, farmed, governed, and adapted in different ways. Their achievements were diverse, and their histories continue to be studied through archaeology and written sources."
  },
  {
    topic: "India",
    intent: "geography",
    aliases: ["india", "indian subcontinent", "where is india", "country india"],
    answer: "India is a country in South Asia. It borders Pakistan, China, Nepal, Bhutan, Bangladesh, and Myanmar, and has a long coastline on the Arabian Sea and Bay of Bengal. New Delhi is its capital. India includes varied landscapes—from the Himalayas in the north to the Deccan Plateau and coastal regions—and has many languages, cultures, and climates. It is a federal democratic republic made up of states and union territories."
  },
  {
    topic: "Tamil Nadu",
    intent: "geography",
    aliases: ["tamil nadu", "where is tamil nadu", "capital of tamil nadu"],
    answer: "Tamil Nadu is a state in the southeastern part of India, along the Coromandel Coast of the Bay of Bengal. Chennai is its capital and largest city. The state is known for Tamil language and literature, historic temples, the Nilgiri hills, and a varied coastline. It shares borders with Kerala, Karnataka, and Andhra Pradesh, as well as the union territory of Puducherry."
  },
  {
    topic: "capitals",
    intent: "geography",
    aliases: ["capital of india", "capital of tamil nadu", "capital of france", "capital of japan", "capital of united kingdom", "capital of uk", "capital of usa", "capital of united states", "capital of australia", "capital of canada", "capital of china", "capital of italy", "capital of germany", "capital of brazil", "capital of egypt", "capital of nepal"],
    answer: "Here are some national capitals: India—New Delhi; France—Paris; Japan—Tokyo; the United Kingdom—London; the United States—Washington, D.C.; Australia—Canberra; Canada—Ottawa; China—Beijing; Italy—Rome; Germany—Berlin; Brazil—Brasília; Egypt—Cairo; and Nepal—Kathmandu. Capital-city designations can change, so check a current reference if you need this for official use."
  },
  {
    topic: "continents",
    intent: "geography",
    aliases: ["continents", "seven continents", "continent"],
    answer: "A common school model groups Earth's land into seven continents: Africa, Antarctica, Asia, Europe, North America, South America, and Australia (sometimes grouped as Oceania). The precise grouping is a convention rather than a strict natural boundary: some models combine Europe and Asia as Eurasia, or treat the Americas as one continent."
  },
  {
    topic: "solar system",
    intent: "science",
    aliases: ["solar system", "planets", "planet order"],
    answer: "Our solar system consists of the Sun and everything bound to its gravity, including eight planets, dwarf planets, moons, asteroids, and comets. In order from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. The four inner planets are rocky; the outer planets are much larger worlds with deep atmospheres. Earth is the only world currently known to support life."
  },
  {
    topic: "photosynthesis",
    intent: "science",
    aliases: ["photosynthesis", "how plants make food", "plant food"],
    answer: "Photosynthesis is the process by which plants, algae, and some bacteria use light energy to make sugars. In plants, chlorophyll in leaf cells captures sunlight. Using that energy, the plant combines carbon dioxide from the air with water to make glucose and releases oxygen. In simplified form: carbon dioxide + water + light energy → glucose + oxygen. The sugar stores energy the organism can use to grow."
  },
  {
    topic: "gravity",
    intent: "science",
    aliases: ["gravity", "gravitation", "why things fall"],
    answer: "Gravity is the attraction associated with mass and energy. On Earth, it pulls objects toward the planet's center, giving them weight and keeping the atmosphere and oceans close to the surface. Earth's gravity also keeps the Moon in orbit, while the Sun's gravity holds the planets in their orbits. Einstein's general theory of relativity describes gravity as the bending of spacetime by mass and energy."
  },
  {
    topic: "human body",
    intent: "science",
    aliases: ["human body", "body basics", "organs", "how the body works"],
    answer: "The human body is made of interacting systems. The circulatory system moves blood and carries oxygen; the respiratory system exchanges oxygen and carbon dioxide; the digestive system breaks food into nutrients; and the nervous system coordinates sensing and responses. Bones support and protect the body, while muscles enable movement. These systems work together, and this overview is educational—not a substitute for medical advice."
  },
  {
    topic: "water cycle",
    intent: "science",
    aliases: ["water cycle", "rain cycle", "how rain forms"],
    answer: "The water cycle describes how water moves through Earth's atmosphere, land, and oceans. Sunlight causes evaporation from water surfaces and transpiration from plants. Water vapor cools and condenses into clouds, then returns as precipitation such as rain or snow. Water may flow over land into rivers and oceans, soak into groundwater, or freeze in ice before the cycle continues."
  },
  {
    topic: "electricity",
    intent: "science",
    aliases: ["electricity", "electric current", "voltage", "circuits"],
    answer: "Electricity involves electric charge and its movement. In a simple circuit, a voltage source such as a battery provides a potential difference that can drive charge through a closed conducting path. Current measures the rate of charge flow, and resistance describes how much a material or component opposes that flow. Be cautious: household electricity can cause serious injury, so experiments should use safe low-voltage equipment and adult supervision where appropriate."
  },
  {
    topic: "HTML",
    intent: "programming",
    aliases: ["html", "hypertext markup language", "what is html"],
    answer: "HTML (HyperText Markup Language) is the standard markup language used to structure content on web pages. Elements such as headings, paragraphs, links, images, and forms describe what each part of a page is. A browser reads HTML and presents that structure; CSS controls its appearance, while JavaScript can add behavior. HTML is a markup language, not a programming language.",
    example: "A basic heading looks like this: <h1>Welcome</h1>. The opening and closing tags mark the text as the page's main heading."
  },
  {
    topic: "CSS",
    intent: "programming",
    aliases: ["css", "cascading style sheets", "what is css"],
    answer: "CSS (Cascading Style Sheets) describes how HTML content should look. Rules can set colors, type, spacing, layout, and responsive behavior for different screen sizes. The cascade resolves which rules apply when styles overlap, while selectors target elements such as headings or buttons. Keeping content in HTML and presentation in CSS makes a site easier to maintain.",
    example: "A simple rule is: p { color: navy; } — it selects paragraph elements and sets their text color."
  },
  {
    topic: "JavaScript",
    intent: "programming",
    aliases: ["javascript", "js language", "what is javascript"],
    answer: "JavaScript is a programming language used to add logic and interaction to websites. In a browser it can respond to clicks, update page content, validate forms, and work with browser features. It is also used beyond web pages in other runtimes. JavaScript and Java are separate languages despite their similar names.",
    example: "For instance, const greeting = \"Hello!\"; stores a string, and console.log(greeting); writes it to the browser's developer console."
  },
  {
    topic: "Python",
    intent: "programming",
    aliases: ["python", "python programming", "learn python", "what is python"],
    answer: "Python is a general-purpose programming language known for readable syntax. It is used in automation, education, data analysis, scientific computing, and web development. A Python program is typically run by a Python interpreter, and its indentation is meaningful: it groups the statements in blocks. It is a friendly language to begin with, but like any language, it takes practice to write reliable programs.",
    example: "A first Python line could be: print(\"Hello, world!\") — it asks Python to display the text between the quotation marks."
  },
  {
    topic: "Java",
    intent: "programming",
    aliases: ["java programming", "java language", "what is java", "simple java program"],
    answer: "Java is a general-purpose, class-based programming language. Java source code is compiled into bytecode that runs on a Java Virtual Machine (JVM), which helps the same program work on different systems with a compatible runtime. Java is widely used in enterprise software, backend services, and Android development. Java is distinct from JavaScript.",
    example: "A simple Java program:\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, world!\");\n    }\n}"
  },
  {
    topic: "C",
    intent: "programming",
    aliases: ["c programming", "c language", "what is c", "programming in c"],
    answer: "C is a compiled, general-purpose programming language that gives programmers close control over memory and other system resources. It has been important in operating systems, embedded software, and performance-sensitive tools. That low-level control is powerful, but programmers must take care with memory and pointer use.",
    example: "A minimal C program is:\n\n#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello, world!\\n\");\n    return 0;\n}"
  },
  {
    topic: "programming basics",
    intent: "programming",
    aliases: ["programming", "coding", "how to code", "programming basics", "what is a program"],
    answer: "Programming is writing instructions that a computer can carry out. A program commonly uses variables to store values, conditionals to choose actions, loops to repeat work, and functions to organize reusable steps. To solve a task, break it into small parts, express the steps clearly, test them with examples, and fix errors as you learn."
  },
  {
    topic: "study techniques",
    intent: "education",
    aliases: ["study tips", "study techniques", "how to study", "studying effectively"],
    answer: "Effective studying is active, spaced, and focused. After reading a section, close the book and try to recall the main ideas from memory; then check what you missed. Spread short review sessions over several days instead of cramming once. Mix related problem types, explain a concept in your own words, and take brief breaks. Adjust the method to the subject: solving practice questions is especially useful for mathematics and science."
  },
  {
    topic: "exam preparation",
    intent: "education",
    aliases: ["exam preparation", "prepare for exams", "exam tips", "test preparation"],
    answer: "Start exam preparation by listing the topics and the dates you need to cover. Divide the material into manageable sessions, give extra time to weaker areas, and use practice questions under realistic time limits. Review mistakes to find the underlying gap rather than memorizing only the answer. Protect sleep before the exam and gather what you need in advance; steady preparation usually works better than last-minute cramming."
  },
  {
    topic: "time management",
    intent: "education",
    aliases: ["time management", "manage my time", "time management tips", "organize my time"],
    answer: "A practical time-management routine starts by choosing a few important tasks, estimating how long they will take, and putting them into a realistic schedule. Break large tasks into a small next action, reserve some buffer time, and reduce interruptions during focused work. At the end of the day, briefly review what changed and adjust tomorrow's plan instead of treating a schedule as inflexible."
  },
  {
    topic: "learning tips",
    intent: "education",
    aliases: ["learning tips", "learn better", "how to learn", "learning effectively"],
    answer: "To learn something well, set a specific goal, connect new ideas to something you already know, and practice recalling or applying the material without immediately looking it up. Short, repeated sessions help reinforce learning. Ask questions, explain the concept in your own words, and use feedback to correct misunderstandings. Choose examples and practice tasks that gradually become more challenging."
  },
  {
    topic: "jokes",
    intent: "jokes",
    aliases: ["joke", "tell me a joke", "make me laugh"],
    answer: "Why did the book join the police? It wanted to work undercover."
  }
];

const intentPatterns = {
  greeting: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy"],
  farewell: ["bye", "goodbye", "see you", "see ya", "farewell", "talk later"],
  thanks: ["thank you", "thanks", "thankful", "appreciate it", "much appreciated"],
  history: ["history", "historical", "war", "independence", "ancient", "gandhi", "century", "civilization"],
  geography: ["geography", "capital", "country", "continent", "where is", "located", "state", "river", "ocean"],
  science: ["science", "photosynthesis", "gravity", "solar system", "human body", "water cycle", "electricity", "planet"],
  programming: ["programming", "coding", "code", "python", "java", "javascript", "html", "css", "c language"],
  technology: ["technology", "artificial intelligence", "machine learning", "deep learning", "generative ai", "computer vision", "nlp"],
  education: ["study", "exam", "learning", "learn", "time management", "revision", "homework"],
  date: ["date", "today", "what day", "day is it"],
  time: ["time", "clock", "what time", "current time"],
  jokes: ["joke", "funny", "make me laugh"],
  help: ["help", "what can you do", "topics", "how do i use"]
};

function normalize(text) {
  return text.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9+\-*/%.()'\s]/g, " ").replace(/\s+/g, " ").trim();
}

function includesPhrase(text, phrase) {
  return (` ${text} `).includes(` ${phrase} `);
}

function detectIntent(text) {
  const normalized = normalize(text);
  const scores = {};

  for (const [intent, phrases] of Object.entries(intentPatterns)) {
    let score = 0;
    for (const phrase of phrases) {
      if (includesPhrase(normalized, phrase)) score += phrase.includes(" ") ? 3 : 2;
    }
    if (score > 0) scores[intent] = score;
  }

  for (const entry of knowledgeBase) {
    for (const alias of entry.aliases) {
      const phrase = normalize(alias);
      if (phrase && includesPhrase(normalized, phrase)) {
        scores[entry.intent] = (scores[entry.intent] || 0) + (phrase.includes(" ") ? 4 : 2);
      }
    }
  }

  if (/\b(what|who|where|when|why|how|explain|define|tell|describe)\b/.test(normalized)) {
    scores["general knowledge"] = (scores["general knowledge"] || 0) + 1;
  }
  if (/\b(today|date|day)\b/.test(normalized)) scores.date = (scores.date || 0) + 3;
  if (/\b(time|clock)\b/.test(normalized)) scores.time = (scores.time || 0) + 3;

  const ranked = Object.entries(scores).sort((left, right) => right[1] - left[1]);
  return ranked.length ? ranked[0][0] : "unknown";
}

function findKnowledge(text) {
  const normalized = normalize(text);
  let best = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const alias of entry.aliases) {
      const phrase = normalize(alias);
      if (phrase && includesPhrase(normalized, phrase)) {
        score += phrase.includes(" ") ? 5 + phrase.split(" ").length : 2;
      }
    }
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }
  return best;
}

function isDateQuestion(text) {
  return /\b(date|today|what day|day is it)\b/.test(normalize(text));
}

function isTimeQuestion(text) {
  return /\b(time|clock)\b/.test(normalize(text));
}

function isFollowUp(text) {
  return /\b(example|examples|explain that|more about it|tell me more|simpler|simple words|elaborate|go on|why is that|how does it work)\b/.test(normalize(text));
}

function findArithmeticExpression(text) {
  let candidate = text.trim().toLowerCase()
    .replace(/^(what is|what's|calculate|compute|solve|work out)\s+/, "")
    .replace(/[?=]$/, "")
    .trim();

  candidate = candidate.replace(/\b(multiplied by|times)\b/g, "*")
    .replace(/\b(divided by|over)\b/g, "/")
    .replace(/\b(plus)\b/g, "+")
    .replace(/\b(minus)\b/g, "-")
    .replace(/\b(percent|modulo)\b/g, "%");

  if (!candidate || !/[+\-*/%]/.test(candidate) || !/^[\d\s()+\-*/%.]+$/.test(candidate)) return null;
  return candidate;
}

function calculateSafely(expression) {
  const tokens = expression.match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/%]/g);
  if (!tokens || tokens.join("") !== expression.replace(/\s+/g, "")) return null;

  const values = [];
  const operators = [];
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "%": 2, "u+": 3, "u-": 3 };
  let expectingValue = true;

  function applyOperator() {
    const operator = operators.pop();
    if (operator === "u+" || operator === "u-") {
      if (values.length < 1) return false;
      const value = values.pop();
      values.push(operator === "u-" ? -value : value);
      return true;
    }
    if (values.length < 2) return false;
    const right = values.pop();
    const left = values.pop();
    if ((operator === "/" || operator === "%") && right === 0) return false;
    const result = operator === "+" ? left + right
      : operator === "-" ? left - right
        : operator === "*" ? left * right
          : operator === "/" ? left / right : left % right;
    if (!Number.isFinite(result)) return false;
    values.push(result);
    return true;
  }

  for (const token of tokens) {
    if (/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(token)) {
      if (!expectingValue) return null;
      values.push(Number(token));
      expectingValue = false;
    } else if (token === "(") {
      if (!expectingValue) return null;
      operators.push(token);
      expectingValue = true;
    } else if (token === ")") {
      if (expectingValue) return null;
      while (operators.length && operators[operators.length - 1] !== "(") {
        if (!applyOperator()) return null;
      }
      if (operators.pop() !== "(") return null;
      expectingValue = false;
    } else {
      let operator = token;
      if (expectingValue) {
        if (token !== "+" && token !== "-") return null;
        operator = token === "+" ? "u+" : "u-";
      }
      while (operators.length && operators[operators.length - 1] !== "(" &&
        precedence[operators[operators.length - 1]] >= precedence[operator]) {
        if (!applyOperator()) return null;
      }
      operators.push(operator);
      expectingValue = true;
    }
  }

  if (expectingValue) return null;
  while (operators.length) {
    if (operators[operators.length - 1] === "(" || !applyOperator()) return null;
  }
  return values.length === 1 && Number.isFinite(values[0]) ? values[0] : null;
}

function formatNumber(number) {
  return Number.isInteger(number) ? String(number) : String(Number(number.toPrecision(12)));
}

function formatLocalDate(date) {
  return new Intl.DateTimeFormat(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(date);
}

function formatLocalTime(date) {
  return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit", second: "2-digit" }).format(date);
}

function buildReply(message) {
  const expression = findArithmeticExpression(message);
  if (expression) {
    const result = calculateSafely(expression);
    return result === null
      ? "I couldn't evaluate that expression. Check the operators and parentheses, and make sure you aren't dividing by zero."
      : `${expression} = ${formatNumber(result)}`;
  }

  if (isDateQuestion(message) && (detectIntent(message) === "date" || /\b(today|date|what day)\b/.test(normalize(message)))) {
    const now = new Date();
    return `Today is ${formatLocalDate(now)}.`;
  }
  if (isTimeQuestion(message) && detectIntent(message) === "time") {
    return `The time on your device is ${formatLocalTime(new Date())}.`;
  }

  const normalized = normalize(message);
  const entry = findKnowledge(message);
  if (entry) {
    if (entry.topic === "capitals") {
      const country = normalized.match(/capital of ([a-z ]+)/);
      if (country) {
        const countryKey = country[1].trim();
        const capitals = {
          india: "New Delhi", "tamil nadu": "Chennai", france: "Paris", japan: "Tokyo", "united kingdom": "London", uk: "London",
          usa: "Washington, D.C.", "united states": "Washington, D.C.", australia: "Canberra",
          canada: "Ottawa", china: "Beijing", italy: "Rome", germany: "Berlin",
          brazil: "Brasília", egypt: "Cairo", nepal: "Kathmandu"
        };
        if (capitals[countryKey]) return `The capital of ${countryKey.replace(/\b\w/g, (letter) => letter.toUpperCase())} is ${capitals[countryKey]}.`;
      }
    }
    const wantsExample = /\b(example|examples|sample|program)\b/.test(normalized);
    if (wantsExample && entry.example) return entry.example;
    return entry.answer;
  }

  if (/\bhow are you\b/.test(normalized)) return "I'm doing well, thank you for asking! I'm ready to help you explore a topic, work through a calculation, or learn something new.";
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|howdy)\b/.test(normalized)) {
    return "Hello! I'm glad you're here. Ask me about science, history, geography, technology, programming, studying, or a quick calculation.";
  }
  if (/\b(thank you|thanks|much appreciated|appreciate it)\b/.test(normalized)) return "You're very welcome! I'm happy to help. What would you like to explore next?";
  if (/\b(bye|goodbye|see you|see ya|farewell)\b/.test(normalized)) return "Goodbye for now! I'll be right here if another question comes to mind.";
  if (/\b(help|what can you do|topics|how do i use)\b/.test(normalized)) {
    return "I can answer common questions about AI and technology, history, geography, science, programming, and learning; calculate basic arithmetic; and tell you your device's current date or time. Try asking a specific question, or choose one of the suggested prompts. I work offline, so my knowledge is limited to the topics built into this app.";
  }

  if (isFollowUp(message) && window.conversationContext.lastTopic) {
    const previous = window.conversationContext.lastTopic;
    return previous.example
      ? `Here's an example related to ${previous.topic}:\n\n${previous.example}`
      : `Here's a little more about ${previous.topic}: ${previous.answer}`;
  }

  const intent = detectIntent(message);
  if (intent === "greeting") return "Hello! What would you like to learn about today?";
  if (intent === "farewell") return "Goodbye for now! Come back whenever you'd like to ask something.";
  if (intent === "thanks") return "You're very welcome! What else can I help you with?";
  if (intent === "date") return `Today is ${formatLocalDate(new Date())}.`;
  if (intent === "time") return `The time on your device is ${formatLocalTime(new Date())}.`;
  if (intent === "jokes") return "Why did the book join the police? It wanted to work undercover.";
  if (intent === "help") return "I can help with common questions about technology, history, geography, science, programming, study skills, basic arithmetic, and the date or time on your device. Try asking a specific question.";

  const fallbackReplies = [
    "I don't have enough information to answer that confidently yet. I can help with AI, history, geography, science, programming, mathematics, and study tips. Want to try one of those?",
    "That's outside the knowledge I have built in right now, and I don't want to guess. Ask me about technology, history, geography, science, coding, or learning, and I'll do my best.",
    "I haven't learned enough about that topic to give you a trustworthy answer. I do know about AI, historical events, places, science, programming, arithmetic, and study techniques."
  ];
  const nextFallback = (window.conversationContext.fallbackIndex || 0) % fallbackReplies.length;
  window.conversationContext.fallbackIndex = nextFallback + 1;
  return fallbackReplies[nextFallback];
}

window.conversationContext = { lastTopic: null, fallbackIndex: 0 };

const conversation = document.getElementById("conversation");
const welcome = document.getElementById("welcome");
const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const newChatButton = document.getElementById("new-chat-button");
const contextCurrent = document.querySelector(".context-current");

function scrollToLatest() {
  conversation.scrollTop = conversation.scrollHeight;
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function appendMessage(role, text) {
  const message = document.createElement("article");
  message.className = `message ${role}`;

  if (role === "assistant") {
    const avatar = document.createElement("span");
    avatar.className = "message-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "✳";
    message.append(avatar);
  }

  const content = document.createElement("div");
  content.className = "message-content";
  const label = document.createElement("div");
  label.className = "message-label";
  label.textContent = role === "user" ? "YOU" : "NORTHSTAR";
  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = text;
  content.append(label, bubble);

  if (role === "assistant") {
    const copy = document.createElement("button");
    copy.className = "copy-button";
    copy.type = "button";
    copy.setAttribute("aria-label", "Copy response");
    copy.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="5" width="8" height="9" rx="1.5"/><path d="M10 5V3.8A1.8 1.8 0 0 0 8.2 2H3.8A1.8 1.8 0 0 0 2 3.8v4.4A1.8 1.8 0 0 0 3.8 10H5"/></svg><span>Copy</span>';
    copy.addEventListener("click", () => copyResponse(text, copy));
    content.append(copy);
  }

  message.append(content);
  conversation.append(message);
  scrollToLatest();
  return message;
}

async function copyResponse(text, button) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temporary = document.createElement("textarea");
      temporary.value = text;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.append(temporary);
      temporary.select();
      const copied = document.execCommand("copy");
      temporary.remove();
      if (!copied) throw new Error("Clipboard access is unavailable.");
    }
    const label = button.querySelector("span");
    label.textContent = "Copied";
    button.setAttribute("aria-label", "Response copied");
    window.setTimeout(() => {
      label.textContent = "Copy";
      button.setAttribute("aria-label", "Copy response");
    }, 1400);
  } catch (error) {
    const label = button.querySelector("span");
    label.textContent = "Copy unavailable";
    button.setAttribute("aria-label", "Copy unavailable");
    window.setTimeout(() => {
      label.textContent = "Copy";
      button.setAttribute("aria-label", "Copy response");
    }, 2200);
  }
}

function resizeInput() {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 150)}px`;
  sendButton.disabled = !input.value.trim();
}

function sendMessage(text) {
  const message = text.trim();
  if (!message) {
    input.focus();
    return;
  }

  if (welcome.isConnected) welcome.remove();
  appendMessage("user", message);
  input.value = "";
  resizeInput();
  contextCurrent.textContent = "Conversation";

  const detected = findKnowledge(message);
  if (detected) window.conversationContext.lastTopic = detected;
  else if (/\b(example|examples|tell me more|elaborate|go on)\b/i.test(message) && window.conversationContext.lastTopic) {
  } else {
    window.conversationContext.lastTopic = null;
  }

  const typing = document.createElement("article");
  typing.className = "message assistant";
  typing.setAttribute("aria-label", "Northstar is thinking");
  typing.innerHTML = '<span class="message-avatar" aria-hidden="true">✳</span><div class="message-content"><div class="message-label">NORTHSTAR</div><div class="message-bubble typing-dots" aria-label="Thinking"><span></span><span></span><span></span></div></div>';
  conversation.append(typing);
  scrollToLatest();

  window.setTimeout(() => {
    typing.remove();
    const reply = buildReply(message);
    appendMessage("assistant", reply);
    input.focus();
  }, 260);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(input.value);
});

input.addEventListener("input", resizeInput);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});

document.querySelectorAll(".prompt-card").forEach((card) => {
  card.addEventListener("click", () => sendMessage(card.dataset.prompt || ""));
});

newChatButton.addEventListener("click", () => {
  conversation.replaceChildren(welcome);
  window.conversationContext = { lastTopic: null, fallbackIndex: 0 };
  contextCurrent.textContent = "New conversation";
  input.value = "";
  resizeInput();
  input.focus();
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    newChatButton.click();
  }
});

resizeInput();
