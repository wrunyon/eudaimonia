import { Space, Input, Button } from 'antd';

function GratitudeItem (props) {
    return <Space.Compact style={{ color: "black" }}>
    <Input style={{ width: "500px"}} addonBefore="I am grateful for..." />
    <Button style={{ color: "white"}} onClick={props.onItemSubmission} type="primary">+</Button>
  </Space.Compact>
}

export default GratitudeItem;