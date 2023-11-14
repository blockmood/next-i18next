import { Row, Col, Button } from 'antd';

export function QuestionsHelp({ type = '' }) {
  return (
    <Row>
      <Col span={12}></Col>
      <Col span={12}>
        <h2>Got Any Questions with DSers? Don't hesitate to ask for help!</h2>
        <Button href="mailto:support@dserspro.com">Contact by Email</Button>
        <Button href="https://www.messenger.com/t/DSersOfficial">Contact by Messenger</Button>
      </Col>
    </Row>
  );
}
