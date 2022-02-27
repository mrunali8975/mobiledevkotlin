import {View, Text, TouchableOpacity, Button} from 'react-native';
import {ScrollView} from 'react-native';
import * as React from 'react';
import {useState} from 'react';

var quizData = [
  {
    id: 'q1',
    title: 'Which of the following is the correct name of React.js?',
    options: [
      {
        id: '1a',
        name: 'React',
      },
      {
        id: '1b',
        name: 'React.js',
      },
      {
        id: '1c',
        name: 'ReactJs',
      },
      {
        id: '1d',
        name: 'All of the Above',
      },
    ],
    correctAnswer: '1d',
  },
  {
    id: 'q2',
    title: 'Which of the following are the advantages of React.js?',
    options: [
      {
        id: '2a',
        name: "React.js can increase the application's performance with Virtual DOM.",
      },
      {
        id: '2b',
        name: 'React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.',
      },
      {
        id: '2c',
        name: 'React.js can render both on client and server side.',
      },
      {
        id: '2d',
        name: 'All of the above',
      },
    ],
    correctAnswer: '2d',
  },
  {
    id: 'q3',
    title: 'What of the following is used in React.js to increase performance?',
    options: [
      {
        id: '3a',
        name: 'Original DOM',
      },
      {
        id: '3b',
        name: 'Virtual DOM',
      },
      {
        id: '3c',
        name: 'Both A and B',
      },
      {
        id: '3d',
        name: 'None of the above.',
      },
    ],
    correctAnswer: '3b',
  },
  {
    id: 'q4',
    title:
      'A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?',
    options: [
      {
        id: '4a',
        name: 'Constructor',
      },
      {
        id: '4b',
        name: 'Class',
      },
      {
        id: '4c',
        name: 'Object',
      },
      {
        id: '4d',
        name: 'DataObject',
      },
    ],
    correctAnswer: '4b',
  },
];
export default function Quiz() {
  const [quizAnswer, setquizAnswer] = useState([]);
  const [hasSubmmited, setubmiited] = useState(false);

  const handleQuizSelection = (sid, qid) => {
    let newState = {...quizAnswer};
    newState[qid] = {value: sid};

    console.log(newState);
    setquizAnswer(newState);
  };
  const handleResult = () => {
if(hasSubmmited)
{
setubmiited(false);
setquizAnswer({})
}
else{

    var result = 0;
    var quizkey = Object.keys(quizAnswer);

    quizData.map(quiz => {
      if (quizAnswer[quiz.id]?.value === quiz?.correctAnswer) {
        result = result + 1;
      }
    });

    setubmiited(true);

}

    
  };
  return (
    <ScrollView style={{padding: 20, paddingVertical: 0}}>
      <Text>MCQ Quix</Text>
      <Text>Total No. Questions {quizData?.length}</Text>

      {quizData?.map((quiz, index) => {
        return (
          <View>
            <Text style={{marginBottom: 10}}>
              {index + 1}
              {quiz?.title}
            </Text>
            <View style={{marginLeft: 30, marginBottom: 40}}>
              {quiz?.options.map((option, idx) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleQuizSelection(option?.id, quiz.id)}>
                    <Text
                      style={[
                        {padding: 5},
                        hasSubmmited
                          ? quizAnswer[quiz.id]?.value === option.id
                            ? {
                                backgroundColor:
                                  quizAnswer[quiz.id]?.value ===
                                  quiz.correctAnswer
                                    ? 'green'
                                    : 'red',
                              }
                            : null
                          : quizAnswer[quiz.id]?.value == option.id
                          ? {backgroundColor: '#ddd'}
                          : null,
                      ]}>
                      {idx + 1}. {option?.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      })}
      <Button title={ hasSubmmited ? "Reset" :"submit "} onPress={handleResult()}>
        {' '}
      </Button>
    </ScrollView>
  );
}
