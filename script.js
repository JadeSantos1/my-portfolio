
var elementObjective = document.querySelector('#objective');
var elementEducationalBackground = document.querySelector('#educational-background');
var elementTechnicalSkills = document.querySelector('#technical-skills');
var elementWorkExperience = document.querySelector('#work-experience')

var elementNavObjective = document.querySelector('#nav-objective');
var elementNavEducationalBackground = document.querySelector('#nav-educational-background');
var elementNavTechnicalSkills = document.querySelector('#nav-technical-skills');
var elementNavWorkExperience = document.querySelector('#nav-work-experience');

function resetDisplay(element1, element2){
    elementNavObjective.classList.remove("active");
    elementNavEducationalBackground.classList.remove("active");
    elementNavTechnicalSkills.classList.remove("active");
    elementNavWorkExperience.classList.remove("active");

    elementObjective.classList.add("jumbotron-parent");
    elementEducationalBackground.classList.add("jumbotron-parent");
    elementTechnicalSkills.classList.add("jumbotron-parent");
    elementWorkExperience.classList.add("jumbotron-parent");

    element1.classList.add("active");
    element2.classList.remove("jumbotron-parent");
}

function switchMenu(menuName){
    if (menuName == 'objective') {
        resetDisplay(elementNavObjective, elementObjective);
    }

    if (menuName == 'educational-background') {
        resetDisplay(elementNavEducationalBackground, elementEducationalBackground);
    }

    if (menuName == 'technical-skills') {
        resetDisplay(elementNavTechnicalSkills, elementTechnicalSkills);
    }

    if (menuName == 'work-experience') {
        resetDisplay(elementNavWorkExperience, elementWorkExperience);
    }
}

switchMenu('objective');