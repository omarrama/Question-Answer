import React from "react";
import { Accordion, Button } from "react-bootstrap";
import questions from "../data";

const QAList = ({ DeleteOneQ }) => {

  const LocalData = localStorage.getItem("questions")

  const DeleteQ = (index) => {
    if (LocalData) {
      questions.splice(index, 1);
      DeleteOneQ(index, questions);
    }
  };

  return (
    <Accordion className="mt-2">
      {LocalData === null ? (
        <h2 className="mt-5 gradient-text">لا يوجد أسئلة الآن</h2>
      ) : (
        JSON.parse(LocalData).map((item, index) => {
          return (
            <Accordion.Item key={index} eventKey={item.id}>
              <Accordion.Header>
                <div className="m-auto question-style">{item.question}</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="text-end answer-style">{item.answer}</div>
                <Button
                  onClick={() => DeleteQ(index)}
                  variant="dark"
                  className="mt-3 btn-grad fs-5"
                >
                  احذف السؤال
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          );
        })
      )}
    </Accordion>
  );
};

export default QAList;
