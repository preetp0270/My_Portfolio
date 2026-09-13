/**
 * ============================================
 *  PROJECTS DATA — Easy to edit in the future
 * ============================================
 *
 * To add a new project:
 * 1. Copy one of the objects below
 * 2. Paste it at the end of the array
 * 3. Fill in title, description, tags, links, etc.
 * 4. Save & rebuild / refresh
 *
 * image: put images in /public/projects/ and use "/projects/your-image.png"
 * github / live: leave empty string "" if not available
 */

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Vite. Features smooth animations, dark theme, and an easy-to-extend projects data file so I can keep adding work without touching the UI code.",
    tags: ["React", "Vite", "CSS", "GitHub Pages"],
    github: "https://github.com/preetp0270",
    live: "",
    image: "",
    featured: true,
  },
  {
    id: 2,
    title: "Android Learning Projects",
    description:
      "Collection of Android apps built while learning mobile development — focusing on Java/Kotlin fundamentals, layouts, activities, and basic UI patterns.",
    tags: ["Android", "Java", "XML"],
    github: "https://github.com/preetp0270",
    live: "",
    image: "",
    featured: true,
  },
  {
    id: 3,
    title: "DSA Practice & LeetCode",
    description:
      "Consistent practice of Data Structures and Algorithms. Solving problems on LeetCode to strengthen problem-solving skills for interviews and real-world coding.",
    tags: ["DSA", "Java", "C++", "Python", "LeetCode"],
    github: "https://github.com/preetp0270",
    live: "https://leetcode.com/u/5I2Cv1v88w/",
    image: "",
    featured: false,
  },
  {
    id: 4,
    title: "Web Development Mini-Projects",
    description:
      "Hands-on HTML, CSS & JavaScript projects including interactive forms, responsive layouts, and small utility tools built during college coursework.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/preetp0270",
    live: "",
    image: "",
    featured: false,
  },
];

export default projects;
