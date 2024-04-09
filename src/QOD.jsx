// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "Which item below DOES NOT fall under the category of personal protective equipment?",
                choices: [
                    "Goggles", "Gloves", "Smartphone", "Mask"
                ],
                correctAnswer: "Smartphone"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "What actions should you take in the event that dangerous chemical spills occur at work?",
                choices: [
                    "Pretend like it didn't happen", "Post it on social media", "Report it to your supervisor immediately", "Clean it up yourself"
                ],
                correctAnswer: "Report it to your supervisor immediately"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "Which of the following symbols is NOT used in WHMIS to identify hazards?",
                choices: [
                    "Skull", "Pencil", "Flame", "Exclaimation Mark"
                ],
                correctAnswer: "Pencil"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "When workers come upon a WHMIS label that they are unsure of, what should they do?",
                choices: [
                    "Remove the label", "Modify the label to make it clearer", "Ask a friend", "Report it to your supervisor or manager"
                ],
                correctAnswer: "Report it to your supervisor or manager"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What does the WHMIS hazard symbol with an exclamation mark indicate?",
                choices: [
                    "Biohazardous", "Flammable", "Explosive", "Health Hazards"
                ],
                correctAnswer: "Health Hazards"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "What is the purpose of WHMIS training in the workplace?",
                choices: [
                    "To provide entertainment for staff members while they are at work", "To give more work to employees", "Educate staff on job dangers and proper handling of hazardous products", "None of the above"
                ],
                correctAnswer: "Educate staff on job dangers and proper handling of hazardous products"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "What does the WHMIS symbol with a flame signify?",
                choices: [
                    "Health Hazard", "Biohazard", "Fire Hazard", "Bomb"
                ],
                correctAnswer: "Fire Hazard"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "What does the WHMIS symbol with an image of a gas cylinder signify?",
                choices: [
                    "Compressed Air", "Compressed Gas", "Corrosive", "Compressed Oxygen"
                ],
                correctAnswer: "Compressed Gas"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "What does SDS stand for?",
                choices: [
                    "Safety Database Supplies", "Safety Data Supplies", "Safety Design Sheet", "Safety Data Sheet"
                ],
                correctAnswer: "Safety Data Sheet"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "WHMIS stands for:",
                choices: [
                    "Workplace Hazardous Materials Information System", "Workplace Health Materials Information System", "Workplace Hazardous Management Information System", "Worksite Health Management Information System"
                ],
                correctAnswer: "Workplace Hazardous Materials Information System"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "WHMIS Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on WHMIS Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}