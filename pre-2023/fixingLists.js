let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let arrayOfStrings = [];
let currentWord = [];
let newPhrase = [];
let newHashtags = [];
let newString = '';
let list = `
aws cloud practitioner exam

pass4sure aws cloud practitioner`

let makeAList = function(){
    arrayOfStrings = list.split(`\n`)    
    makeHashtags();
}
let makeHashtags = function(){

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let phrase = arrayOfStrings[i];
        let currentWord = phrase.split('')
        for (let i = 0; i < currentWord.length; i++) {
            const character = currentWord[i];
            const lastChar = currentWord[i-1]
            if(i === 0){
                newPhrase.push('#', character)
            } else if(lastChar === ' '){
                newPhrase.push(character.toUpperCase())                
            } else if(character === ' '){                
            } else {
                newPhrase.push(character)
            }
            // console.log(newPhrase[0],newPhrase[1]);
            newHashtags.forEach(element => {
                newString = element.split(',').join('')
            });
            newHashtags.push(newPhrase.toString())            
        }
        console.log(newString.slice('#'));
    }
    return newPhrase;
}

console.log(makeAList());



// #AWSCloud
// #AWSCertification
// #AWSCloudPractitioner
// #AWSCloudCert
// #AWSCloudCertification
// #awscloudpractitionerexam
// #awscloudpractitionertraining
// #awscertifiedcloudpractitionerexam
// #awsTest
// #awscertifiedcloudpractitionerpracticeexam
// #awstechnicalessentials
// #AWSEssentials
// #AWSCloudSalary
// #awscloudpractitionersalary
// #awscertificationquestions
// #awsprofessionaltraining
// #AWSBigData
// #awscertificationfornontechnical
// #awscloudpractitionerexamquestionspdf
// #awssolutionarchitectcareerpath
// #howtolearnawsfordevelopers
// #AWSTutorial
// #howToLearnAWSPractitioner
// #howToAWS
// #howToLearnAWS
// #awscloudpractitionerexamquestions
// #howtopassawscloudpractitionerexam
// #awscloudpractitionerexam
// #bestawscloudpractitionerpracticeexams
// aws cloud practitioner exam
// aws cloud practitioner training
// aws certified cloud practitioner exam
// aws cloud practitioner pdf
// aws cloud practitioner certification cost
// aws certified cloud practitioner book pdf
// aws certified cloud practitioner study guide
// aws certified cloud practitioner practice exam
// aws technical essentials
// aws cloud practitioner salary
// aws certified cloud practitioner dumps
// aws certification sample questions
// aws solution architect professional training
// aws cloud practitioner pdf
// aws big data certification training
// aws certification tutorial pdf
// aws certified cloud practitioner udemy
// aws certification for non technical
// clf-c01 practice test
// aws cloud practitioner reddit
// aws cloud practitioner exam questions pdf
// aws solution architect career path
// how to learn aws for developers
// aws solution architect associate tutorial
// aws certified solutions architect exam path
// aws cloud practitioner udemy
// how to learn aws solution architect
// cloudguru trial
// connect php acloudguru
// a cloud guru t shirt
// acloudguru splunk
// aws cloud practitioner discount code
// aws cloud practitioner exam questions free
// examstrainer
// aws certification pros and cons
// aws certified cloud practitioner difficulty
// free aws cloud practitioner practice exams
// the practitioners brief
// linux academy aws cloud practitioner
// linux academy amazon employees
// how to pass aws cloud practitioner exam
// udemy aws cloud practitioner exam
// aws certified cloud practitioner flashcards
// best aws cloud practitioner practice exams
// aws cloud practitioner practice exam free
// passinstant
// aws cloud practitioner flashcards
// whizlabs aws cloud practitioner review
// pass4sure aws cloud practitioner
// aws cloud practitioner training
// aws certified cloud practitioner exam
// aws cloud practitioner pdf
// aws cloud practitioner certification cost
// aws certified cloud practitioner book pdf
// aws certified cloud practitioner study guide
// aws certified cloud practitioner practice exam
// aws technical essentials
// aws cloud practitioner salary
// aws certified cloud practitioner dumps
// aws certification sample questions
// aws solution architect professional training
// aws cloud practitioner pdf
// aws big data certification training
// aws certification tutorial pdf
// aws certified cloud practitioner udemy
// aws certification for non technical
// clf-c01 practice test
// aws cloud practitioner reddit
// aws cloud practitioner exam questions pdf
// aws solution architect career path
// how to learn aws for developers
// aws solution architect associate tutorial
// aws certified solutions architect exam path
// aws cloud practitioner udemy
// how to learn aws solution architect
// cloudguru trial
// connect php acloudguru
// a cloud guru t shirt
// acloudguru splunk
// aws cloud practitioner discount code
// aws cloud practitioner exam questions free
// examstrainer
// aws certification pros and cons
// aws certified cloud practitioner difficulty
// free aws cloud practitioner practice exams
// the practitioners brief
// linux academy aws cloud practitioner
// linux academy amazon employees
// how to pass aws cloud practitioner exam
// udemy aws cloud practitioner exam
// aws certified cloud practitioner flashcards
// best aws cloud practitioner practice exams
// aws cloud practitioner practice exam free
// passinstant
// aws cloud practitioner flashcards
// whizlabs aws cloud practitioner review