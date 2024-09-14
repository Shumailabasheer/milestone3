const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePreview = document.getElementById("resumeContent") as HTMLElement;

const educationList: string[] = [];
const workExperienceList: string[] = [];
const skillsList: string[] = [];

// Add Education
document.getElementById("addEducation")?.addEventListener("click", () => {
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institution = (document.getElementById("institution") as HTMLInputElement).value;
  const gradYear = (document.getElementById("gradYear") as HTMLInputElement).value;

  if (degree && institution && gradYear) {
    const educationItem = `${degree} from ${institution} (${gradYear})`;
    educationList.push(educationItem);
    renderResume();
  }
});

// Add Work Experience
document.getElementById("addExperience")?.addEventListener("click", () => {
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const position = (document.getElementById("position") as HTMLInputElement).value;
  const years = (document.getElementById("years") as HTMLInputElement).value;

  if (company && position && years) {
    const experienceItem = `${position} at ${company} (${years})`;
    workExperienceList.push(experienceItem);
    renderResume();
  }
});

// Add Skills
document.getElementById("addSkill")?.addEventListener("click", () => {
  const skill = (document.getElementById("skill") as HTMLInputElement).value;
  if (skill) {
    skillsList.push(skill);
    renderResume();
  }
});

// Render Resume
function renderResume() {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  resumePreview.innerHTML = `
    <h3>${name}</h3>
    <p>${email} | ${phone}</p>
    <h4>Education</h4>
    <ul>${educationList.map((edu) => `<li>${edu}</li>`).join('')}</ul>
    <h4>Work Experience</h4>
    <ul>${workExperienceList.map((exp) => `<li>${exp}</li>`).join('')}</ul>
    <h4>Skills</h4>
    <ul>${skillsList.map((skill) => `<li>${skill}</li>`).join('')}</ul>
`;
}