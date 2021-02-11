// Membahas Array ForEach

// Ambil element
const skills_holder = document.getElementById('skills');


// ES5



// ES6
const yourSkills = ['Web Developer', 'Mobile Apps Developer', 'Design Thinking'];


// Filter Data
 const myPrimarySkill = yourSkills.filter(skill => {
    return skill === "Web Developer";
 });
skills_holder.innerHTML = myPrimarySkill;