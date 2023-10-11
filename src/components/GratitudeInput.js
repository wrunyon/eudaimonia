import { Space, Input } from 'antd';

function GratitudeInput(props) {
    const handleInputKeyUp = (event) => {
      // event.preventDefault();
      if (event.key === 'Enter') {
        event.preventDefault();
        props.onInput(event.target.value);
        console.log('enter')
      }
    }

    return (
      <div>
        <div>
          {props.entries.map(entry => {
            return (
            <div>
              {entry}
            </div> )
          })}
        </div>

        <Space.Compact style={{ color: "black" }}>
          <Input style={{ width: "500px"}} addonBefore="I am grateful for..." onKeyDown={handleInputKeyUp} />
        </Space.Compact>
      </div>
    )
}

export default GratitudeInput;