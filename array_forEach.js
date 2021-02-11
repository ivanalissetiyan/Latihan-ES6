// Membahas Array ForEach

// Ambil element
const skills_holder = document.getElementById('skills');


// ES5



// ES6
const yourSkills = ['Web Developer', 'Mobile Apps Developer', 'Design Thinking'];
// Tambahkan Item Kepada Array
yourSkills.push('IOT');

let parent = '<ul>';
yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(`${skill}`);
});

parent += '</ul>';
skills_holder.innerHTML = parent;