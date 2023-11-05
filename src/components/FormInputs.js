import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import questions from "../data";

const FormInputs = ({ AddOneItem, notify }) => {
  const [userQ, setUserQ] = useState("");
  const [userA, setUserA] = useState("");
  const addQuestion = () => {
    if (userQ === "" && userA === "") {
      notify("من فضلك ادخل السؤال والإجابة", "error");
    } else if (userQ === "") {
      notify("من فضلك ادخل السؤال", "error");
    } else if (userA === "") {
      notify("من فضلك ادخل الإجابة", "error");
    } else {
      questions.push({ id: Math.random(), question: userQ, answer: userA });
      AddOneItem();
      setUserQ("");
      setUserA("");
    }
  };
  return (
    <Row>
      <Col sm="5">
        <Form.Control
          value={userQ}
          onChange={(e) => setUserQ(e.target.value)}
          type="text"
          placeholder="اكتب السؤال"
        />
      </Col>

      <Col sm="5">
        <Form.Control
          value={userA}
          onChange={(e) => setUserA(e.target.value)}
          type="text"
          placeholder="اكتب الإجابة"
        />
      </Col>

      <Col sm="2">
        <Button
          onClick={addQuestion}
          variant="dark"
          type="submit"
          className="w-100 btn-grad"
        >
          إضافة
        </Button>
      </Col>
    </Row>
  );
};

export default FormInputs;
