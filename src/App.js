import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import FormInputs from "./components/FormInputs";
import QAList from "./components/QAList";
import questions from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(questions);
  // add one question
  const AddOneItem = () => {
    localStorage.setItem("questions", JSON.stringify([...questions]));
    setData([...questions]);
    notify("تم الإضافة بنجاح", "success");
  };
  // delete all questions
  const DeleteAll = () => {
    localStorage.removeItem("questions");
    questions.splice(0);
    setData([]);
    notify("تم حذف جميع الأسئلة", "error");
  };
  // delete one question
  const DeleteOneItem = (idx, newQs) => {
    localStorage.setItem("questions", JSON.stringify([...newQs]));
    setData([...newQs]);
    notify(`تم حذف السؤال رقم ${idx + 1}`, "error");
    // if the last item was just deleted
    if (newQs.length === 0) {
      localStorage.removeItem("questions");
    }
  };

  // provide feedback
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };
  return (
    <div className="body-style text-center">
      <Container className="p-5">
        <Row>
          <Col sm="4">
            <div className="fs-1 text-center gradient-text">
              تطبيق سؤال وجواب
            </div>
          </Col>

          <Col sm="8" className="mt-3">
            <FormInputs AddOneItem={AddOneItem} notify={notify} />
            <QAList DeleteOneQ={DeleteOneItem} />
            {localStorage.getItem("questions") === null &&
            data.length === 0 ? null : (
              <Button
                onClick={DeleteAll}
                variant="danger"
                className="w-100 mt-2 gradient fs-5"
              >
                احذف كل الأسئلة
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
